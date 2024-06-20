import React, { useEffect, useRef } from 'react';
import { useGLTF } from "@react-three/drei";
import { Text } from '@react-three/drei';
import * as THREE from "three";

function Piano({ startTour }) {
  const model = useGLTF('./PianoNoWIres.glb');
  const groupRef = useRef();

  const pianoSoundsPath = [
    "./notes/key01.ogg", "./notes/key02.ogg", "./notes/key03.ogg", "./notes/key04.ogg",
    "./notes/key05.ogg", "./notes/key06.ogg", "./notes/key07.ogg", "./notes/key08.ogg",
    "./notes/key09.ogg", "./notes/key10.ogg", "./notes/key11.ogg", "./notes/key12.ogg",
    "./notes/key13.ogg", "./notes/key14.ogg", "./notes/key15.ogg", "./notes/key16.ogg",
    "./notes/key17.ogg", "./notes/key18.ogg", "./notes/key19.ogg", "./notes/key20.ogg",
    "./notes/key21.ogg", "./notes/key22.ogg", "./notes/key23.ogg", "./notes/key24.ogg"
  ];

  const pianoSound = pianoSoundsPath.map(path => new Audio(path));

  const pianoClick = () => {
    const randomIndex = Math.floor(Math.random() * pianoSound.length);
    const selectedSound = pianoSound[randomIndex];
    console.log("clicked");
    selectedSound.play();
  };

  useEffect(() => {
    const group = groupRef.current;
    if (group) {
      group.traverse((child) => {
        if (child.isMesh) {
          child.userData.clickable = true;
          child.onClick = pianoClick;
        }
      });
    }
  }, [startTour, model]);

  return (
    <>
      <group ref={groupRef} position={[-45, -47.9, 235]} rotation-y={THREE.MathUtils.degToRad(90)} scale={25} onClick={pianoClick}>
        <primitive object={model.scene} />
      </group>
      <Text 
        rotation-y={THREE.MathUtils.degToRad(180)} 
        position={[-20, 17, 249.1]} 
        font="/text/JoeJack.ttf" 
        scale={280}
      >
        The Walking Piano
      </Text>
      <Text 
        rotation-x={THREE.MathUtils.degToRad(-90)} 
        rotation-z={THREE.MathUtils.degToRad(-180)} 
        position={[-20, 0.1, 155]} 
        font="/text/JoeJack.ttf" 
        color={"black"} 
        scale={90}
      >
        Press Keys to play
      </Text>
    </>
  );
}

export default Piano;
