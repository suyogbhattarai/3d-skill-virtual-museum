import React from 'react'
import {useGLTF} from "@react-three/drei"
import {useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RigidBody } from '@react-three/rapier'

function Crab() {
    const model=useGLTF('./CrabFinal.glb')
    

    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/formation-rock/model.gltf')


    


    const crabClick=()=>{
      console.log("Clicked")
    }
  return (
    <>
 <primitive object={model.scene} scale={20} position={[150,-50.7,-230]} onClick={crabClick}/> 
 <primitive position={[60,0,90]} scale={30} object={scene} />


    </>
  )
}

export default Crab