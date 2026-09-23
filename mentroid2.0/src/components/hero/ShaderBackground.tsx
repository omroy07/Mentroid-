"use client";

import {
  ShaderGradient,
  ShaderGradientCanvas,
} from "@shadergradient/react";

export default function ShaderBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <ShaderGradientCanvas
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        pixelDensity={1}
        fov={45}
      >
        <ShaderGradient
          animate="on"
          brightness={1.05}
          cAzimuthAngle={170}
          cDistance={4.4}
          cPolarAngle={70}
          cameraZoom={1}
          color1="#ffffff"
          color2="#BFE1FF"
          color3="#BFE1FF"
          envPreset="city"
          grain="off"
          lightType="3d"
          positionX={0}
          positionY={0.9}
          positionZ={-0.3}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={45}
          rotationY={0}
          rotationZ={0}
          shader="defaults"
          type="plane"
          uAmplitude={0}
          uDensity={1.2}
          uFrequency={0}
          uSpeed={0.2}
          uStrength={3.0}
          uTime={0}
          wireframe={false}
          zoomOut={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}