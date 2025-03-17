import React, { useRef, useEffect } from 'react';
import { useGLTF, Float } from '@react-three/drei'; // Import Float from drei

const ThreejsLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/threejs.glb');

  useEffect(() => {
    // Ensure the material is white
    if (materials.material_0) {
      materials.material_0.color.set(0xffffff); // Set the material color to white
    }
  }, [materials]);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}> 
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.material_0}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('/models/threejs.glb');

export default ThreejsLogo;
