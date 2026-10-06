import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Human(){
 return (
  <group>
   <mesh position={[0,1.7,0]}><sphereGeometry args={[0.25,32,32]}/><meshStandardMaterial /></mesh>
   <mesh position={[0,0.8,0]}><capsuleGeometry args={[0.4,1.2,8,16]}/><meshStandardMaterial /></mesh>
  </group>
 )
}

export default function AnatomyViewer(){
 return (
 <Canvas camera={{position:[0,1.5,4]}}>
  <ambientLight intensity={2}/>
  <directionalLight position={[3,5,5]} />
  <Human />
  <OrbitControls />
 </Canvas>
 )
}
