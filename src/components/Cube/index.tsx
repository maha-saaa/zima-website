import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

interface BoxProps {
  position: any;
}

const Cube = (props: BoxProps) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props} ref={mesh} scale={1}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"#2872f4"} opacity={0.8} transparent />
    </mesh>
  );
};

export default Cube;
