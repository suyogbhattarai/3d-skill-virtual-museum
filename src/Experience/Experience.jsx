import React from 'react';
import { Sparkles, OrbitControls, Environment, PresentationControls, ScrollControls, Float, Html } from '@react-three/drei';
import { Physics, Debug, RigidBody } from "@react-three/rapier";
import Lights from '../Lights/Lights';
import Museum from '../Museum/Museum';
import GoCart from '../GoCart/GoCart';

function Experience({ startTour, setStartTour }) {
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

      <OrbitControls makeDefault />
      <PresentationControls />
      <Sparkles
        size={150}
        scale={[1500, 1500]}
        position-y={500}
        speed={3}
        count={3500}
      />
      <Physics>
        {/* <Debug /> */}
        <Lights />
       
         
{!startTour ? (  <Float floatIntensity={40}>
<Museum startTour={startTour} setStartTour={setStartTour} />
</Float>)
:
<>
<Museum startTour={startTour} setStartTour={setStartTour} />
</>

}





 
        
        <ScrollControls pages={3} damping={0.5}>
          <GoCart startTour={startTour} setStartTour={setStartTour} />
        </ScrollControls>
      </Physics>
    </>
  );
}

export default Experience;
