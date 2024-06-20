import React,{Suspense} from 'react'
import {Canvas} from "@react-three/fiber"
import Experience from './Experience/Experience'
import { KeyboardControls, OrbitControls, } from '@react-three/drei'
import "./App.css"
import HomePage from './HomePage/HomePage'
import Interface from './Interface/Interface'
import { useState } from 'react'
import LoadingScreen from './LoadingScreen.jsx/LoadingScreen'





function App() {
  const [startTour,setStartTour]=useState(false);

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
<Suspense fallback={<LoadingScreen/>}>
<Canvas shadows>
      <Experience startTour={startTour} setStartTour={setStartTour} />
    </Canvas>
    <Interface startTour={startTour} setStartTour={setStartTour}  />
</Suspense>
  
    </KeyboardControls>
    </>
  )
}

export default App