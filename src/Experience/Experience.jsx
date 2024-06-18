import React from 'react'
import { Sparkles,OrbitControls,Environment, PresentationControls ,ScrollControls} from '@react-three/drei'
import{Physics,Debug} from "@react-three/rapier"
import Lights from '../Lights/Lights'
import Museum from '../Museum/Museum'
import GoCart from '../GoCart/GoCart'



function Experience() {
  return (
    <>
       {/* <Environment 
    background
    files={'./studio.hdr'}
    ground={{
      height:7,
      radius:28,
      scale:100
  }}
    /> */}
   

  
         <OrbitControls makeDefault/>
        <PresentationControls/>
        <Sparkles 
            size={150}
            scale={[1500,1500]}
            position-y={500}
            speed={3}
            count={3500}
            />
        <Physics>
        <Debug/>

            <Lights/>
            <Museum/>
            <ScrollControls pages={3} damping={0.5}>
            <GoCart/>
            </ScrollControls>

       
         
        </Physics>
        

         </>
   
  )
}

export default Experience