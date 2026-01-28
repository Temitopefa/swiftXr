import { useGLTF } from "@react-three/drei";

export default function ModelViewer({ url, onAddHotspot }) {
  const { scene } = useGLTF(url);

  return (
    <primitive
      object={scene}
      onClick={(e) => {
        e.stopPropagation();
        onAddHotspot(e.point);
      }}
      onPointerOver={() => (document.body.style.cursor = "crosshair")}
      onPointerOut={() => (document.body.style.cursor = "auto")}
    />
  );
}
