"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

type ShellProps = {
  index: number;
  total: number;
};

function NeuralShell({ index, total }: ShellProps) {
  const ref = useRef<THREE.Group>(null);

  const angle = (index / total) * Math.PI * 2;

  useFrame(() => {
    if (!ref.current) return;

    // Very subtle independent movement
    ref.current.rotation.z += 0.0008 * (index % 2 === 0 ? 1 : -1);
  });

  return (
    <group
      ref={ref}
      rotation={[0, 0, angle]}
    >
      <mesh
        position={[1.35, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <capsuleGeometry args={[0.32, 1.15, 16, 32]} />

        <MeshTransmissionMaterial
          backside
          samples={8}
          thickness={0.25}
          roughness={0.2}
          transmission={0.82}
          ior={1.45}
          chromaticAberration={0.025}
          anisotropy={0.15}
          color="#b7c4d8"
          transparent
          opacity={0.88}
        />
      </mesh>
    </group>
  );
}

function Core() {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.rotation.y =
      Math.sin(clock.elapsedTime * 0.25) * 0.12;

    ref.current.rotation.x =
      Math.cos(clock.elapsedTime * 0.2) * 0.08;
  });

  return (
    <group ref={ref}>
      {/* Outer core */}
      <mesh>
        <icosahedronGeometry args={[0.68, 4]} />

        <MeshTransmissionMaterial
          backside
          samples={12}
          thickness={0.4}
          roughness={0.12}
          transmission={0.9}
          ior={1.35}
          chromaticAberration={0.04}
          anisotropy={0.2}
          color="#dce7f5"
        />
      </mesh>

      {/* Inner intelligence core */}
      <mesh scale={0.42}>
        <icosahedronGeometry args={[1, 3]} />

        <meshStandardMaterial
          color="#5d8dff"
          emissive="#1d5eff"
          emissiveIntensity={2.2}
          roughness={0.25}
          metalness={0.65}
        />
      </mesh>

      {/* Small central point */}
      <mesh scale={0.13}>
        <sphereGeometry args={[1, 32, 32]} />

        <meshBasicMaterial
          color="#ffffff"
        />
      </mesh>
    </group>
  );
}

function Orbit({ radius, rotation }: {
  radius: number;
  rotation: [number, number, number];
}) {
  return (
    <mesh rotation={rotation}>
      <torusGeometry
        args={[radius, 0.012, 8, 128]}
      />

      <meshBasicMaterial
        color="#8db2ff"
        transparent
        opacity={0.32}
      />
    </mesh>
  );
}

function NeuralSystem() {
  const group = useRef<THREE.Group>(null);

  const shells = useMemo(
    () => Array.from({ length: 6 }),
    []
  );

  useEffect(() => {
    if (!group.current) return;

    const object = group.current;

    /*
      MASTER SCROLL ANIMATION

      0.00  = compact
      0.25  = opening
      0.50  = fully open
      0.75  = reorganizing
      1.00  = compact again
    */

    const scrollState = {
      progress: 0,
    };

    const update = () => {
      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        maxScroll > 0
          ? window.scrollY / maxScroll
          : 0;

      gsap.to(scrollState, {
        progress,
        duration: 0.45,
        ease: "power3.out",
        overwrite: true,
        onUpdate: () => {
          const p = scrollState.progress;

          /*
            OPENING
          */

          const openAmount =
            Math.sin(p * Math.PI);

          /*
            Vertical movement
          */

          object.position.y =
            Math.sin(p * Math.PI * 2) * 0.25;

          /*
            Overall rotation
          */

          object.rotation.y =
            p * Math.PI * 1.4;

          object.rotation.x =
            Math.sin(p * Math.PI * 2) * 0.12;

          /*
            Opening shells
          */

          object.children.forEach((child, index) => {
            if (index >= 6) return;

            const shell =
              child as THREE.Group;

            const angle =
              (index / 6) * Math.PI * 2;

            const radius =
              1.35 + openAmount * 1.15;

            shell.position.x =
              Math.cos(angle) *
              openAmount *
              0.25;

            shell.position.y =
              Math.sin(angle) *
              openAmount *
              0.25;

            shell.scale.setScalar(
              0.92 + openAmount * 0.08
            );

            shell.children.forEach(
              (mesh) => {
                mesh.position.x =
                  radius;
              }
            );
          });
        },
      });
    };

    window.addEventListener(
      "scroll",
      update,
      { passive: true }
    );

    update();

    return () => {
      window.removeEventListener(
        "scroll",
        update
      );
    };
  }, []);

  return (
    <group
      ref={group}
      scale={1.15}
    >
      {/* SIX INTELLIGENCE SHELLS */}

      {shells.map((_, index) => (
        <NeuralShell
          key={index}
          index={index}
          total={6}
        />
      ))}

      {/* CENTRAL CORE */}

      <Core />

      {/* ORBITS */}

      <Orbit
        radius={1.85}
        rotation={[Math.PI / 2.7, 0.2, 0]}
      />

      <Orbit
        radius={2.1}
        rotation={[0.8, Math.PI / 3, 0]}
      />

      <Orbit
        radius={1.65}
        rotation={[1.2, 0.4, 0.8]}
      />

      {/* SUBTLE PARTICLES */}

      <Sparkles
        count={45}
        scale={5}
        size={1.2}
        speed={0.15}
        opacity={0.25}
      />
    </group>
  );
}

export default function NeuralCore() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-[1]
        hidden
        lg:block
      "
      aria-hidden="true"
    >
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 38,
        }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.45} />

        <directionalLight
          position={[4, 5, 5]}
          intensity={2}
        />

        <pointLight
          position={[0, 0, 2]}
          intensity={8}
          distance={8}
          color="#477dff"
        />

        <Environment preset="studio" />

        <Float
          speed={0.65}
          rotationIntensity={0.15}
          floatIntensity={0.25}
        >
          <NeuralSystem />
        </Float>
      </Canvas>
    </div>
  );
}