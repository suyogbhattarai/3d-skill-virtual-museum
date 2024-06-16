import { RigidBody,CuboidCollider } from '@react-three/rapier';
import React from 'react';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { normalMap, roughness } from 'three/examples/jsm/nodes/Nodes.js';
import Piano from '../Piano/Piano';
import { Sky } from '@react-three/drei';
import Crab from '../Crab/Crab';



function Museum() {
    const terrainTextures=useTexture({ 
      map:"./floor/Color.jpg",
      diplacementMap:"./floor/Displacement.jpg",
      normalMap:"./floor/NormalDX.jpg",
      roughnessMap:"./floor/Roughness.jpg",
      aoMap:"./floor/AmbientOcclusion.jpg"

})

// const wallTextures=useTexture({ 
//   map:"./walls/basecolor.jpg",
//   diplacementMap:"./walls/height.png",
//   normalMap:"./walls/normal.jpg",
//   roughnessMap:"./walls/roughness.jpg",
//   aoMap:"./walls/ambientOcclusion.jpg"

// })
    const wallGeometry=new THREE.BoxGeometry(500,60,0.2)
    const wallgeometrySide=new THREE.BoxGeometry(0.2,60,500)
    
  return (
    <>
    {/* floor */}

    <Sky/>
    <RigidBody type='fixed'  restitution={0.2} friction={1}>
        <mesh  rotation-x={-Math.PI*0.5} position={[0,-0.5,0]}>
            <boxGeometry args={[500,500,0.2,128,128]}/>
            <meshStandardMaterial {...terrainTextures}  />
            
            <CuboidCollider args={[250,250,0.1]} position={[0,-16 ,0]}
         restitution={0.2}
         friction={1}/>
            
        </mesh>
    

        
 
   

    {/* walls  */}
        <mesh geometry={wallGeometry} position={[0,4,-250.1]} >
          
            <meshStandardMaterial/>
        </mesh>

        <mesh geometry={wallGeometry} position={[0,4,250.1]} >
          
          <meshStandardMaterial/>
      </mesh>
      <mesh  geometry={wallgeometrySide} position={[-250,4,0]} >
          
          <meshStandardMaterial/>
      </mesh>

      <mesh  geometry={wallgeometrySide} position={[250,4,0]} >
          
          <meshStandardMaterial/>
      </mesh>
     
      <Crab/>
      </RigidBody>
      <Piano/>
      
    </>
  )
}

export default Museum