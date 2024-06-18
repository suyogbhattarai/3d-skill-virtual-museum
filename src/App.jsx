import React from 'react'
import {Canvas} from "@react-three/fiber"
import Experience from './Experience/Experience'
import { KeyboardControls, OrbitControls } from '@react-three/drei'
import "./App.css"
import HomePage from './HomePage/HomePage'




function App() {
  return (
    <>
    <KeyboardControls
    map={[
    {name:"forward",keys:['ArrowUp','KeyW']},
    {name:"backward",keys:['ArrowDown','KeyS']},
    {name:"leftward",keys:['ArrowLeft','KeyA']},
    {name:"rightward",keys:['ArrowRight','KeyD']},
    {name:"jump",keys:['Space','KeyB']}
    ]}
    >
    <Canvas shadows>
      <Experience/>
    </Canvas>
    </KeyboardControls>
    </>
  )
}

export default App