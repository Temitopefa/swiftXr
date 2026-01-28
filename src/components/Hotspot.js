import { Html } from "@react-three/drei";
import { useState } from "react";

export default function Hotspot({ position, label }) {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      {/* 3D Marker - Outer Ring */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <ringGeometry args={[0.07, 0.09, 32]} />
        <meshBasicMaterial color={hovered ? "#fff" : "var(--primary)"} transparent opacity={0.8} />
      </mesh>

      {/* 3D Marker - Inner Dot */}
      <mesh 
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color={hovered ? "#fff" : "var(--accent)"} />
      </mesh>

      {/* Label Tooltip */}
      <Html distanceFactor={10} zIndexRange={[100, 0]} style={{ pointerEvents: 'none' }}>
        <div
          style={{
            background: "rgba(30, 30, 30, 0.95)",
            padding: "8px 12px",
            borderRadius: "6px",
            color: "white",
            fontSize: "13px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,255,255,0.1)",
            transform: "translate3d(-50%, -140%, 0)", // Position above the dot
            opacity: hovered ? 1 : 0.8,
            transition: "all 0.2s ease",
            backdropFilter: "blur(4px)"
          }}
        >
          {label}
        </div>
      </Html>
    </group>
  );
}
