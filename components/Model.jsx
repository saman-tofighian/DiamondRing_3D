import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import React, { useEffect } from "react";

export default function Model() {
  const ring_model = useGLTF("./ring.glb");
  ring_model.scene.rotation.set(Math.PI / 2, 0, 0);

  const color = useControls(
    "Properties",
    {
      DiamondColor: "#fff",
      RingBase: "#fff",
    },
    { collapsed: true } 
  );

  useEffect(() => {
    if (ring_model.scene) {
      ring_model.scene.children[0].material.color.set(color.DiamondColor);
      ring_model.scene.children[1].material.color.set(color.RingBase);
    }
  }, [color, ring_model]); 

  return (
    <>
      <OrbitControls
        makeDefault
        minDistance={5}
        maxDistance={7}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        rotateSpeed={0.7}
      />
      <Stage center environment="studio">
        <primitive object={ring_model.scene} />
      </Stage>
    </>
  );
}
