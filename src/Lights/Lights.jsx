import React from 'react'

function Lights() {
  return (
    <>
    <directionalLight
        castShadow
        position={[40,40,-10]}
        intensity={0.8}
        shadow-mapSize={[1024,1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
    />
    <ambientLight intensity={0.3}/>
    </>
  )
}

export default Lights