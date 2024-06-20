import { RigidBody, CuboidCollider } from '@react-three/rapier';
import React from 'react';
import * as THREE from 'three';
import { useTexture, Text } from '@react-three/drei';
import Piano from '../Piano/Piano';
import Crab from '../Crab/Crab';
import { GasStation } from '../GasStation/GasStation';
import Road from '../Road/Road';


function Museum({ startTour, setStartTour }) {
  const terrainTextures = useTexture({
    map: "./floor/Color.jpg",
    displacementMap: "./floor/Displacement.jpg",
    normalMap: "./floor/NormalDX.jpg",
    roughnessMap: "./floor/Roughness.jpg",
    aoMap: "./floor/AmbientOcclusion.jpg"
  });

  const wallTextures = useTexture({
    map: "./walls/wall.jpg",
    displacementMap: "./walls/disp.png",
    normalMap: "./walls/normal.jpg",
    roughnessMap: "./walls/rough.jpg"
  });

  terrainTextures.map.wrapS = terrainTextures.map.wrapT = THREE.RepeatWrapping;
  terrainTextures.map.repeat.set(10, 10); // Adjust the values to change the scale
  terrainTextures.displacementMap.wrapS = terrainTextures.displacementMap.wrapT = THREE.RepeatWrapping;
  terrainTextures.displacementMap.repeat.set(10, 10);
  terrainTextures.normalMap.wrapS = terrainTextures.normalMap.wrapT = THREE.RepeatWrapping;
  terrainTextures.normalMap.repeat.set(10, 10);
  terrainTextures.roughnessMap.wrapS = terrainTextures.roughnessMap.wrapT = THREE.RepeatWrapping;
  terrainTextures.roughnessMap.repeat.set(10, 10);
  terrainTextures.aoMap.wrapS = terrainTextures.aoMap.wrapT = THREE.RepeatWrapping;
  terrainTextures.aoMap.repeat.set(10, 10);

  // Set texture repeat for walls
  wallTextures.map.wrapS = wallTextures.map.wrapT = THREE.RepeatWrapping;
  wallTextures.map.repeat.set(5, 1); // Adjust the values to change the scale
  wallTextures.displacementMap.wrapS = wallTextures.displacementMap.wrapT = THREE.RepeatWrapping;
  wallTextures.displacementMap.repeat.set(5, 1);
  wallTextures.normalMap.wrapS = wallTextures.normalMap.wrapT = THREE.RepeatWrapping;
  wallTextures.normalMap.repeat.set(5, 1);
  wallTextures.roughnessMap.wrapS = wallTextures.roughnessMap.wrapT = THREE.RepeatWrapping;
  wallTextures.roughnessMap.repeat.set(5, 1);

  const wallGeometry = new THREE.BoxGeometry(500, 60, 0.2);
  const wallgeometrySide = new THREE.BoxGeometry(0.2, 60, 500);
  const wallgeometryGateSide = new THREE.BoxGeometry(0.2, 60, 200);

  const handleButtonClick = () => {
    // Handle the button click event
    console.log('Button clicked!');
  };

  return (
    <>
      {/* floor */}
      <RigidBody type='fixed' restitution={0.2} friction={1}>
        <mesh rotation-x={-Math.PI * 0.5} position={[0, -0.5, 0]}>
          <boxGeometry args={[1000, 1000, 0.2, 20, 20]} />
          <meshStandardMaterial {...terrainTextures} />
          <CuboidCollider args={[250, 250, 0.1]} position={[0, -16, 0]} restitution={0.2} friction={1} />
        </mesh>
        {/* walls */}
        <mesh geometry={wallGeometry} position={[0, 4, -250.1, 100, 100]}>
          <meshStandardMaterial {...wallTextures} />
        </mesh>
        <mesh geometry={wallGeometry} position={[0, 4, 250.1, 100, 100]}>
          <meshStandardMaterial {...wallTextures} />
        </mesh>
        <mesh geometry={wallgeometrySide} position={[-250, 4, 0, 100, 100]}>
          <meshStandardMaterial {...wallTextures} />
        </mesh>
        <mesh geometry={wallgeometryGateSide} position={[250, 4, -150.8, 100, 100]}>
          <meshStandardMaterial {...wallTextures} />
        </mesh>
        <mesh geometry={wallgeometryGateSide} position={[250, 4, 150.8, 100, 100]}>
          <meshStandardMaterial {...wallTextures} />
        </mesh>
        <Text color={""} rotation-y={THREE.MathUtils.degToRad(90)} position={[250.5, 17, -145.1]} width={100} font="/text/Montserrat-Bold.ttf" scale={200}>
          ING Skill Museum
        </Text>

        <Crab />
        <Road position={[127, -1.9, -192.7]} scale={10} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[80, -1.9, -192.7]} scale={10} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[-7, -1.9, -192.7]} scale={10} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[-94.3, -1.9, -192.7]} scale={10} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[-94.3, -1.9, -192.7]} scale={10} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[-180.3, -1.9, -192.7]} scale={10} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[-238.3, -1.1, -183]} scale={7} />
        <Road position={[-238.3, -1.1, -183]} scale={7} />
        <Road position={[-238.3, -1.1, -123]} scale={7} />
        <Road position={[-238.3, -1.1, -62]} scale={7} />
        <Road position={[-20.3, -1.1, 128.7]} scale={7} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[-72.3, -1.1, 128.7]} scale={7} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[-133.3, -1.1, 128.7]} scale={7} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[-193.3, -1.1, 128.7]} scale={7} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[-238.3, -1.1, 112.7]} scale={7} />
        <Road position={[-238.3, -1.1, 60]} scale={7} />
        <Road position={[-238.3, -1.1, -1.2]} scale={7} />
        <Road position={[-191, -1.3, -16.2]} scale={7.5} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[-191, -1.3, -16.2]} scale={7.5} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[-126, -1.3, -16.2]} scale={7.5} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[-61, -1.3, -16.2]} scale={7.5} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[-9.3, -1.9, 99.2]} scale={10} />
        <Road position={[-9.3, -1.9, 11.9]} scale={10} />
        <Road position={[55, -2, -11]} scale={10} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[108.9, -2, -11]} scale={10} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[150, -2, -140.2]} scale={10} />
        <Road position={[150, -2, -75.2]} scale={10} />
        <Road position={[195.7, -2, -11]} scale={10} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[282.8, -2, -11]} scale={10} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[370, -2, -11]} scale={10} rotation-y={THREE.MathUtils.degToRad(90)} />
        <Road position={[456, -2, -11]} scale={10} rotation-y={THREE.MathUtils.degToRad(90)} />

      </RigidBody>
      <Piano startTour={startTour} />
      <GasStation />

    

    </>
  );
}

export default Museum;
