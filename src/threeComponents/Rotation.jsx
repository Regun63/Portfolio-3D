import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Rotation = () => {
  const modelRef = useRef(); // Ref for the model to apply rotation

  // Animate the model in the XY plane
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.03; // Rotation around Y-axis
      modelRef.current.rotation.x += 0.03; // Rotation around X-axis
    }
  });

  return <group ref={modelRef} />; 
};

export default Rotation;
