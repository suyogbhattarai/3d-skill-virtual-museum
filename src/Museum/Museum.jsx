import { RigidBody,CuboidCollider } from '@react-three/rapier';
import React from 'react';
import * as THREE from 'three';
import { useTexture,Text } from '@react-three/drei';
import { normalMap, roughness } from 'three/examples/jsm/nodes/Nodes.js';
import Piano from '../Piano/Piano';
import { Sky,Html,Float,PresentationControls } from '@react-three/drei';
import Crab from '../Crab/Crab';
import {useGLTF} from "@react-three/drei"



function Museum() {
    const terrainTextures=useTexture({ 
      map:"./floor/Color.jpg",
      displacementMap:"./floor/Displacement.jpg",
      normalMap:"./floor/NormalDX.jpg",
      roughnessMap:"./floor/Roughness.jpg",
      aoMap:"./floor/AmbientOcclusion.jpg"

})

const wallTextures=useTexture({ 
  map:"./walls/wall.jpg",
  displacementMap:"./walls/disp.png",
  normalMap:"./walls/normal.jpg",
  roughnessMap:"./walls/rough.jpg"
})

terrainTextures.map.wrapS = terrainTextures.map.wrapT = THREE.RepeatWrapping;
terrainTextures.map.repeat.set(10, 10); // Adjust the values to change the scale
terrainTextures.displacementMap.wrapS = terrainTextures.displacementMap.wrapT = THREE.RepeatWrapping;
terrainTextures.displacementMap.repeat.set(10, 10);
terrainTextures.normalMap.wrapS = terrainTextures.normalMap.wrapT = THREE.RepeatWrapping;
terrainTextures.normalMap.repeat.set(10, 10);
terrainTextures.roughnessMap.wrapS = terrainTextures.roughnessMap.wrapT = THREE.RepeatWrapping;
terrainTextures.roughnessMap.repeat.set(10, 10);
terrainTextures.aoMap.wrapS = terrainTextures.aoMap.wrapT = THREE.RepeatWrapping;
terrainTextures.aoMap.repeat.set(10, 10);

// Set texture repeat for walls
wallTextures.map.wrapS = wallTextures.map.wrapT = THREE.RepeatWrapping;
wallTextures.map.repeat.set(5, 1) ; // Adjust the values to change the scale
wallTextures.displacementMap.wrapS = wallTextures.displacementMap.wrapT = THREE.RepeatWrapping;
wallTextures.displacementMap.repeat.set(5, 1);
wallTextures.normalMap.wrapS = wallTextures.normalMap.wrapT = THREE.RepeatWrapping;
wallTextures.normalMap.repeat.set(5, 1);
wallTextures.roughnessMap.wrapS = wallTextures.roughnessMap.wrapT = THREE.RepeatWrapping;
wallTextures.roughnessMap.repeat.set(5, 1);

    const wallGeometry=new THREE.BoxGeometry(500,60,0.2)
    const wallgeometrySide=new THREE.BoxGeometry(0.2,60,500)
    const glass=useGLTF('./GlassPannel.glb')
    
  return (
    <>
    {/* floor */}

    {/* <Sky/> */}
    <RigidBody type='fixed'  restitution={0.2} friction={1}>
        <mesh  rotation-x={-Math.PI*0.5} position={[0,-0.5,0]}>
            <boxGeometry args={[500,500,0.2,20,20]}/>
            <meshStandardMaterial {...terrainTextures}  />
            <CuboidCollider args={[250,250,0.1]} position={[0,-16 ,0]}
         restitution={0.2}
         friction={1}/>   
        </mesh>
    {/* walls  */}
        <mesh geometry={wallGeometry} position={[0,4,-250.1,100,100]} >
            <meshStandardMaterial {...wallTextures}  />
        </mesh>
        {/* <Html>
          <iframe src=''/>
        </Html> */}
        <mesh geometry={wallGeometry} position={[0,4,250.1,100,100]} >
          <meshStandardMaterial {...wallTextures}  />
      </mesh>
      <mesh geometry={wallgeometrySide} position={[-250,4,0,100,100]} >
          <meshStandardMaterial {...wallTextures}  />
      </mesh>
      <mesh geometry={wallgeometrySide} position={[250,4,0,100,100]} >
          <meshStandardMaterial {...wallTextures}   />
      </mesh>

      <Crab/>
      </RigidBody>
      <Piano/>
      {/* <Float floatIntensity={0.2}>
      <Text width={20} rotation-y={-110} scale={500} position={[-30,700,0]}>
      Welcome To Skill Museum
      </Text>
      <Html position={[-60,670,0]}>
        <button>Enter Museum</button>
      </Html>
      </Float> */}
      
      
    </>
  )
}

export default Museum