import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function PlaceholderBody() {
  return (
    <group>
      <mesh position={[0,1,0]}><sphereGeometry args={[0.3]}/><meshStandardMaterial/></mesh>
      <mesh position={[0,0,0]}><capsuleGeometry args={[0.45,1.4,8,16]}/><meshStandardMaterial/></mesh>
    </group>
  );
}

export default function AnatomyViewer(){
  return (
    <Canvas camera={{position:[0,1.5,4]}}>
      <ambientLight intensity={2}/>
      <directionalLight position={[5,5,5]}/>
      <OrbitControls />
      <PlaceholderBody />
    </Canvas>
  )
}
