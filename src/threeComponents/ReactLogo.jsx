import React, { useRef, useEffect } from 'react';
import { useGLTF ,Float} from '@react-three/drei';
import { gsap } from 'gsap';

const ReactLogo = (props) => {
  const targetRef = useRef(); 

  const { nodes, materials } = useGLTF('/models/reactLogo.glb'); 

  
  return (
    <Float ref={targetRef} dispose={null}>
      <group  {...props} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['React-Logo_Material002_0'].geometry}
            material={materials['Material.002']}
            position={[0, 7.935, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[39.166, 39.166, 52.734]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Backdrop_Material001_0.geometry}
            material={materials['Material.001']}
            position={[-17.091, 7.935, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[247.854, 247.854, 52.734]}
          />
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload('/models/reactLogo.glb'); // Preload the model to improve performance

export default ReactLogo;
