import React from 'react'
import {useGLTF} from "@react-three/drei"
import {useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RigidBody } from '@react-three/rapier'
import { Text } from '@react-three/drei'
import * as THREE from "three";
function Piano() {
    const model=useGLTF('./PianoNoWIres.glb')
 
    
    const pianoSoundsPath = ["./notes/key01.ogg","./notes/key02.ogg","./notes/key03.ogg","./notes/key04.ogg","./notes/key05.ogg","./notes/key06.ogg","./notes/key07.ogg","./notes/key08.ogg","./notes/key09.ogg","./notes/key10.ogg","./notes/key11.ogg","./notes/key12.ogg","./notes/key13.ogg","./notes/key14.ogg","./notes/key15.ogg","./notes/key16.ogg","./notes/key17.ogg","./notes/key18.ogg","./notes/key19.ogg","./notes/key20.ogg","./notes/key21.ogg","./notes/key22.ogg","./notes/key23.ogg","./notes/key24.ogg"];

    const pianoSound = pianoSoundsPath.map(path => new Audio(path));

    const pianoClick = () => {
    
      const randomIndex = Math.floor(Math.random() * pianoSound.length);
      const selectedSound = pianoSound[randomIndex];
      selectedSound.play();
    };
  return (
    <>
  
    <primitive object={model.scene} scale={25} position={[-45,-47.9,235]} rotation-y={THREE.MathUtils.degToRad(90)} onClick={pianoClick}/> 
   
        <Text rotation-y={THREE.MathUtils.degToRad(180)} position={[-20,17,249.1]} font="/text/JoeJack.ttf" scale={280}>
         The Walking Piano
        </Text>
        <Text rotation-x={THREE.MathUtils.degToRad(-90)} rotation-z={THREE.MathUtils.degToRad(-180)} position={[-20,0.1,155]} font="/text/JoeJack.ttf" color={"black"} scale={90}>
         Press Keys to play
        </Text>


    </>
  )
}
// position={[20,-18.7,22]}

export default Piano