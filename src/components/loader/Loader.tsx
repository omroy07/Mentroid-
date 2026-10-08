"use client";

import { useEffect, useRef } from "react";

type LoaderProps = {
  assets?: string[];
  onComplete?: () => void;
};

const DEFAULT_ASSETS = [
 "/videos/agentic-ai.webm",
  "/videos/ai-webm",
  "/videos/automation.webm",
];

export default function Loader({
  assets = DEFAULT_ASSETS,
  onComplete,
}: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  const completeRef = useRef(false);

  useEffect(() => {
    const loader = loaderRef.current;
    const canvas = canvasRef.current;
    const counter = counterRef.current;

    if (!loader || !canvas || !counter) return;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const gl =
      canvas.getContext("webgl2", {
        alpha: true,
        antialias: false,
        depth: false,
        stencil: false,
        premultipliedAlpha: false,
      }) ||
      canvas.getContext("webgl", {
        alpha: true,
        antialias: false,
        depth: false,
        stencil: false,
        premultipliedAlpha: false,
      });

    if (!gl) {
      counter.textContent = "100%";

      const fallback = window.setTimeout(() => {
        loader.remove();

        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";

        onComplete?.();
      }, 600);

      return () => window.clearTimeout(fallback);
    }

    // --------------------------------------------------
    // EXACT REFERENCE SHADERS
    // --------------------------------------------------

    const vertexShaderSource = `
      attribute vec3 position;
      attribute vec2 uv;

      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;

      uniform float p;
      uniform float np;

      varying vec2 vUv;

      float easeInOut(float t) {
        return t * t * (3.0 - 2.0 * t);
      }

      void main() {
        vUv = uv;

        float ease = easeInOut(np);

        vec3 pos = position;

        float curtain = smoothstep(
          pos.y,
          0.0,
          ease
        );

        pos.y -= curtain;

        gl_Position =
          projectionMatrix *
          modelViewMatrix *
          vec4(pos, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision highp float;

      uniform vec2 u_res;
      uniform float uTime;
      uniform float p;

      varying vec2 vUv;

      #define NUM_OCTAVES 5

      vec3 toRGB(vec3 rgb) {
        return rgb / 255.0;
      }

      float rand(vec2 n) {
        return fract(
          sin(
            dot(
              n,
              vec2(12.9898, 4.1414)
            )
          ) * 43758.5453
        );
      }

      float noise(vec2 p) {
        vec2 ip = floor(p);
        vec2 u = fract(p);

        u = u * u * (3.0 - 2.0 * u);

        float res = mix(
          mix(
            rand(ip),
            rand(ip + vec2(1.0, 0.0)),
            u.x
          ),
          mix(
            rand(ip + vec2(0.0, 1.0)),
            rand(ip + vec2(1.0, 1.0)),
            u.x
          ),
          u.y
        );

        return res * res;
      }

      float fbm(vec2 x) {
        float v = 0.0;
        float a = 0.5;

        vec2 shift = vec2(100.0);

        mat2 rot = mat2(
          cos(0.5),
          sin(0.5),
          -sin(0.5),
          cos(0.50)
        );

        for (int i = 0; i < NUM_OCTAVES; ++i) {
          v += a * noise(x);

          x =
            rot *
            x *
            2.0 +
            shift;

          a *= 0.5;
        }

        return v;
      }

      void main() {
        vec2 uv = vUv;

        vec3 color =
          toRGB(
            vec3(10.0)
          );

        float progress =
          smoothstep(
            p,
            p - 0.01,
            fbm(
              gl_FragCoord.xy /
              (u_res * 0.17)
            )
          );

        float alpha =
          mix(
            0.0,
            1.0,
            progress
          );

        gl_FragColor =
          vec4(
            color,
            alpha
          );
      }
    `;

    // --------------------------------------------------
    // SHADER HELPERS
    // --------------------------------------------------

    const createShader = (
      type: number,
      source: string
    ) => {
      const shader = gl.createShader(type);

      if (!shader) {
        throw new Error("Unable to create shader");
      }

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (
        !gl.getShaderParameter(
          shader,
          gl.COMPILE_STATUS
        )
      ) {
        console.error(
          gl.getShaderInfoLog(shader)
        );

        gl.deleteShader(shader);

        throw new Error(
          "Shader compilation failed"
        );
      }

      return shader;
    };

    const vertexShader = createShader(
      gl.VERTEX_SHADER,
      vertexShaderSource
    );

    const fragmentShader = createShader(
      gl.FRAGMENT_SHADER,
      fragmentShaderSource
    );

    const program = gl.createProgram();

    if (!program) {
      throw new Error(
        "Unable to create WebGL program"
      );
    }

    gl.attachShader(
      program,
      vertexShader
    );

    gl.attachShader(
      program,
      fragmentShader
    );

    gl.linkProgram(program);

    if (
      !gl.getProgramParameter(
        program,
        gl.LINK_STATUS
      )
    ) {
      console.error(
        gl.getProgramInfoLog(program)
      );

      throw new Error(
        "WebGL program linking failed"
      );
    }

    gl.useProgram(program);

    // --------------------------------------------------
    // FULLSCREEN PLANE
    // --------------------------------------------------

    const vertices = new Float32Array([
      -1, -1, 0,
       1, -1, 0,
      -1,  1, 0,
       1,  1, 0,
    ]);

    const uvs = new Float32Array([
      0, 0,
      1, 0,
      0, 1,
      1, 1,
    ]);

    const positionBuffer =
      gl.createBuffer();

    gl.bindBuffer(
      gl.ARRAY_BUFFER,
      positionBuffer
    );

    gl.bufferData(
      gl.ARRAY_BUFFER,
      vertices,
      gl.STATIC_DRAW
    );

    const positionLocation =
      gl.getAttribLocation(
        program,
        "position"
      );

    gl.enableVertexAttribArray(
      positionLocation
    );

    gl.vertexAttribPointer(
      positionLocation,
      3,
      gl.FLOAT,
      false,
      0,
      0
    );

    const uvBuffer =
      gl.createBuffer();

    gl.bindBuffer(
      gl.ARRAY_BUFFER,
      uvBuffer
    );

    gl.bufferData(
      gl.ARRAY_BUFFER,
      uvs,
      gl.STATIC_DRAW
    );

    const uvLocation =
      gl.getAttribLocation(
        program,
        "uv"
      );

    gl.enableVertexAttribArray(
      uvLocation
    );

    gl.vertexAttribPointer(
      uvLocation,
      2,
      gl.FLOAT,
      false,
      0,
      0
    );

    // --------------------------------------------------
    // UNIFORMS
    // --------------------------------------------------

    const uResolution =
      gl.getUniformLocation(
        program,
        "u_res"
      );

    const uTime =
      gl.getUniformLocation(
        program,
        "uTime"
      );

    const uP =
      gl.getUniformLocation(
        program,
        "p"
      );

    const uNP =
      gl.getUniformLocation(
        program,
        "np"
      );

    const uModelView =
      gl.getUniformLocation(
        program,
        "modelViewMatrix"
      );

    const uProjection =
      gl.getUniformLocation(
        program,
        "projectionMatrix"
      );

    // --------------------------------------------------
    // ORTHOGRAPHIC MATRICES
    // --------------------------------------------------

    const identityMatrix = new Float32Array([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1,
    ]);

    const projectionMatrix =
      new Float32Array([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, -1, 0,
        0, 0, 0, 1,
      ]);

    // --------------------------------------------------
    // RESIZE
    // --------------------------------------------------

    const resize = () => {
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      const width =
        window.innerWidth;

      const height =
        window.innerHeight;

      canvas.width =
        width * dpr;

      canvas.height =
        height * dpr;

      canvas.style.width =
        `${width}px`;

      canvas.style.height =
        `${height}px`;

      gl.viewport(
        0,
        0,
        canvas.width,
        canvas.height
      );

      gl.useProgram(program);

      gl.uniform2f(
        uResolution,
        canvas.width,
        canvas.height
      );

      gl.uniformMatrix4fv(
        uModelView,
        false,
        identityMatrix
      );

      gl.uniformMatrix4fv(
        uProjection,
        false,
        projectionMatrix
      );
    };

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    // --------------------------------------------------
    // REFERENCE VALUES
    // --------------------------------------------------

    let p = 1;
    let np = 1;

    let targetP = 1;
    let targetNP = 1;

  const startTime = performance.now();

    // --------------------------------------------------
    // PROGRESS
    // --------------------------------------------------

    let loaded = 0;

    const progress = {
      target: 0,
      current: 0,
    };

    let loadingFinished = false;

    const updateCounter = () => {
      progress.current +=
        (
          progress.target -
          progress.current
        ) * 0.06;

      if (
        progress.current <= 99.6
      ) {
        counter.textContent =
          `${Math.round(
            progress.current
          )}%`;
      }
    };

    // --------------------------------------------------
    // LOAD REFERENCE ASSETS
    // --------------------------------------------------

    const loadImage = (
      src: string
    ) => {
      const image =
        new Image();

      image.crossOrigin =
        "anonymous";

      image.onload = () => {
        loaded++;

        progress.target =
          (loaded /
            assets.length) *
          100;

        if (
          loaded ===
          assets.length
        ) {
          loadingFinished = true;
        }
      };

      image.onerror = () => {
        loaded++;

        progress.target =
          (loaded /
            assets.length) *
          100;

        if (
          loaded ===
          assets.length
        ) {
          loadingFinished = true;
        }
      };

      image.src = src;
    };

    assets.forEach(loadImage);

    // --------------------------------------------------
    // OUTRO
    // --------------------------------------------------

    let outroStarted = false;
    let outroStartTime = 0;

    const startOutro = () => {
      if (outroStarted) return;

      outroStarted = true;

      outroStartTime =
        performance.now();

      targetP = 0;
      targetNP = 0;
    };

    // --------------------------------------------------
    // RENDER LOOP
    // --------------------------------------------------

    let animationFrame = 0;

   
const render = (now: number) => {
  const elapsed = now - startTime;

      gl.clearColor(
        0,
        0,
        0,
        0
      );

      gl.clear(
        gl.COLOR_BUFFER_BIT
      );

      // Reference interpolation
      p +=
        (targetP - p) *
        0.06;

      np +=
        (targetNP - np) *
        0.06;

      gl.useProgram(program);

      gl.uniform1f(
        uP,
        p
      );

      gl.uniform1f(
        uNP,
        np
      );

      gl.uniform1f(
        uTime,
        elapsed * 0.001
      );

      gl.drawArrays(
        gl.TRIANGLE_STRIP,
        0,
        4
      );

      updateCounter();

      /*
       * Reference:
       *
       * when progress reaches ~99.6%
       * the loader outro starts.
       */
      if (
        loadingFinished &&
        progress.current >= 99.6
      ) {
        counter.textContent =
          "100%";

        startOutro();
      }

      if (outroStarted) {
        const outroElapsed =
          now -
          outroStartTime;

        /*
         * Reference:
         * p + np animate during ~1600ms.
         */

        const t =
          Math.min(
            outroElapsed / 1600,
            1
          );

        const eased =
          t * t *
          (3 - 2 * t);

        p =
          1 - eased;

        np =
          1 - eased;

        /*
         * Reference loader opacity:
         * delay 500ms
         * duration 600ms
         */

        if (
          outroElapsed >= 500
        ) {
          const fade =
            Math.min(
              (
                outroElapsed -
                500
              ) / 600,
              1
            );

          loader.style.opacity =
            `${1 - fade}`;
        }

        /*
         * Remove after shader
         * transition completes.
         */

        if (
          outroElapsed >= 1600
        ) {
          loader.style.display =
            "none";

          document.documentElement.style.overflow =
            "";

          document.body.style.overflow =
            "";

          cancelAnimationFrame(
            animationFrame
          );

          onComplete?.();

          return;
        }
      }

      animationFrame =
        requestAnimationFrame(
          render
        );
    };

    animationFrame =
      requestAnimationFrame(
        render
      );

    // --------------------------------------------------
    // CLEANUP
    // --------------------------------------------------

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );

      document.documentElement.style.overflow =
        "";

      document.body.style.overflow =
        "";

      gl.deleteBuffer(
        positionBuffer
      );

      gl.deleteBuffer(
        uvBuffer
      );

      gl.deleteProgram(
        program
      );

      gl.deleteShader(
        vertexShader
      );

      gl.deleteShader(
        fragmentShader
      );
    };
  }, [assets, onComplete]);

  return (
    <div
      id="loader"
      ref={loaderRef}
      className="fixed inset-0 z-[99999] h-screen w-screen overflow-hidden bg-[#0a0a0a]"
    >
      <canvas
        id="loader-gl"
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      <div
        id="l-c"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <span
          id="counter"
          ref={counterRef}
          className="font-mono text-[85px] text-white"
        >
          0%
        </span>
      </div>
    </div>
  );
}