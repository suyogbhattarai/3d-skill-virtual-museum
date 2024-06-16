import React from 'react'
import { Sparkles,OrbitControls,Environment } from '@react-three/drei'
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
   

  
        {/* <OrbitControls makeDefault/> */}
        <Physics>
        <Debug/>

            <Lights/>
            <Museum/>
            <GoCart/>

            
         
        </Physics>
        

         </>
   
  )
}

export default Experience