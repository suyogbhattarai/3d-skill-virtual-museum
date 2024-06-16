import React from 'react'
import {useGLTF} from "@react-three/drei"
import {useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RigidBody } from '@react-three/rapier'
import { Text } from '@react-three/drei'
import * as THREE from "three";
function Piano() {
    const model=useGLTF('./piano.glb')
 
    


    const pianoClick=()=>{
      console.log("Clicked")
    }

  return (
    <>
  
    <primitive object={model.scene} scale={10} position={[-90,-52.7,190]} rotation-y={THREE.MathUtils.degToRad(90)} onClick={pianoClick}/> 
   
        <Text rotation-y={THREE.MathUtils.degToRad(180)} position={[80,17,249.1]} color={"black"} scale={280}>
         The Walking Piano
        </Text>
        <Text rotation-x={THREE.MathUtils.degToRad(-90)} rotation-z={THREE.MathUtils.degToRad(-180)} position={[-80,0.1,155]} color={"black"} scale={120}>
         Press Keys to play
        </Text>


    </>
  )
}
// position={[20,-18.7,22]}

export default Piano