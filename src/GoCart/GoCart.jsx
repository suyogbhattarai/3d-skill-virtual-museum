import React, { useRef, useState, useEffect } from "react";
import { RigidBody, useRapier } from "@react-three/rapier";
import { useFrame, useThree } from "@react-three/fiber";
import { useKeyboardControls, useGLTF, useScroll, Html } from "@react-three/drei";
import Guide from "../Guide/Guide";
import * as THREE from "three";
import Interface from "../Interface/Interface";

function GoCart({ startTour, setStartTour }) {
  const body = useRef();
  const model = useGLTF('./CrabFinal.glb');
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cybertruck/model.gltf');

  const [smoothedCameraPosition] = useState(() => new THREE.Vector3(0, 0, 0));
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

  const [isWithinBoundaries, setIsWithinBoundaries] = useState(false);
  const [isWithinSecondPolygon, setIsWithinSecondPolygon] = useState(false);
  const [isWithinThirdPolygon, setIsWithinThirdPolygon] = useState(false);
  const [isWithinFourthPolygon, setIsWithinFourthPolygon] = useState(false);
  const [isWithinFifthPolygon, setIsWithinFifthPolygon] = useState(false);
  const [isWithinSixthPolygon, setIsWithinSixthPolygon] = useState(false); // New state

  const [subscribeKeys, getKeys] = useKeyboardControls();
  const { rapier, world } = useRapier();
  const { camera } = useThree();
  const scroll = useScroll();

  const targetRotation = new THREE.Quaternion(-0.000018261993318446912, -0.01266359630972147, -0.000003830413334071636, 0.9999198317527771);
  const targetPosition = new THREE.Vector3(-0.3209454119205475, -0.37842410802841187, -2.4040873050689697);

  const vertices1 = [
    new THREE.Vector3(84.77340698242188, -0.37833935022354126, -47.003719329833984),
    new THREE.Vector3(85.36974334716797, -0.3783346712589264, -221.67625427246094),
    new THREE.Vector3(242.88099670410156, -0.3785855174064636, -202.44407653808594),
    new THREE.Vector3(200.87701416015625, -0.3783450722694397, -49.959720611572266)
  ];

  const vertices2 = [
    new THREE.Vector3(49.42793655395508, -0.37835559248924255, 80.67807006835938),
    new THREE.Vector3(-160.3184051513672, -0.3783460557460785, 75.03829193115234),
    new THREE.Vector3(-195.33377075195312, -0.37842074036598206, 203.95553588867188),
    new THREE.Vector3(167.74386596679688, -0.37844613194465637, 225.96595764160156)
  ];

  const vertices3 = [
    new THREE.Vector3(-180.21136474609375, -0.3784714937210083, 231.79571533203125),
    new THREE.Vector3(-180.0924835205078, -0.3783237934112549, -229.6956329345703),
    new THREE.Vector3(-262.15869140625, -0.37834131717681885, -232.3572998046875),
    new THREE.Vector3(-244.52139282226562, -0.3781448304653168, 235.53382873535156)
  ];

  const vertices4 = [
    new THREE.Vector3( -129.88668823242188,  -0.37829113006591797,  -37.480411529541016),
    new THREE.Vector3( -170.89366149902344, -0.3782903254032135,  -47.62967300415039),
    new THREE.Vector3( -171.72308349609375,  -0.3783474266529083,  -6.3583245277404785),
    new THREE.Vector3( -130.97640991210938,  -0.37813660502433777,  -5.637146949768066)
  ];

  const vertices5 = [
    new THREE.Vector3( 90.37833404541016,  -0.3784542977809906,  30.121116638183594),
    new THREE.Vector3( 83.60946655273438, -0.3783559799194336,  -40.4099235534668),
    new THREE.Vector3( -33.03282165527344,  -0.3781997263431549,  -40.753456115722656),
    new THREE.Vector3( -48.63674545288086,  -0.3780880570411682,  15.748767852783203)
  ];

  const vertices6 = [
    new THREE.Vector3(  464.4526062011719,  -0.37837332487106323,  46.510894775390625),
    new THREE.Vector3(  129.67015075683594,  -0.3782169222831726,  47.67276382446289),
    new THREE.Vector3( 104.13240814208984,  -0.37858864665031433,  -47.886878967285156),
    new THREE.Vector3(  455.6981506347656,  -0.3783685266971588, -58.58925247192383),
  ]; // New polygon vertices

  const startTourRef = useRef(startTour);

  useEffect(() => {
    startTourRef.current = startTour;
  }, [startTour]);

  const boundryRef = useRef(isWithinBoundaries);
  useEffect(() => {
    boundryRef.current = isWithinBoundaries;
  }, [isWithinBoundaries]);

  const secondBoundryRef = useRef(isWithinSecondPolygon);
  useEffect(() => {
    secondBoundryRef.current = isWithinSecondPolygon;
  }, [isWithinSecondPolygon]);

  const thirdBoundryRef = useRef(isWithinThirdPolygon);
  useEffect(() => {
    thirdBoundryRef.current = isWithinThirdPolygon;
  }, [isWithinThirdPolygon]);

  const fourthBoundryRef = useRef(isWithinFourthPolygon);
  useEffect(() => {
    fourthBoundryRef.current = isWithinFourthPolygon;
  }, [isWithinFourthPolygon]);

  const fifthBoundryRef = useRef(isWithinFifthPolygon);
  useEffect(() => {
    fifthBoundryRef.current = isWithinFifthPolygon;
  }, [isWithinFifthPolygon]);

  const sixthBoundryRef = useRef(isWithinSixthPolygon);
  useEffect(() => {
    sixthBoundryRef.current = isWithinSixthPolygon;
  }, [isWithinSixthPolygon]); // New useRef and useEffect

  useEffect(() => {
    if (body.current) {
      body.current.setTranslation({ x: 368.0941162109375, y: -0.3783695101737976, z: -11.223409652709961 }, true);
      body.current.setRotation({
        x: 0.000035550208849599585,
        y: -0.701973557472229,
        z: -0.00003524815838318318,
        w: 0.7122029662132263
      }, true);
    }
  }, [startTour]);

  const resetCar = () => {
    if (body.current) {
      body.current.setRotation({ x: 0, y: body.current.rotation().y, z: 0, w: 1 }, true);
      body.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
    }
  };

  const isPointInPolygon = (point, vertices) => {
    let inside = false;
    for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
      const xi = vertices[i].x, zi = vertices[i].z;
      const xj = vertices[j].x, zj = vertices[j].z;

      const intersect = ((zi > point.z) !== (zj > point.z)) &&
                        (point.x < (xj - xi) * (point.z - zi) / (zj - zi) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  };

  useFrame((state, delta) => {
    const keys = getKeys();
    const { forward, backward, leftward, rightward, jump } = keys;
    const impulseStrength = 600000 * delta;

    if (body.current) {
      const currentRotation = body.current.rotation();
      const quaternion = new THREE.Quaternion(
        currentRotation.x,
        currentRotation.y,
        currentRotation.z,
        currentRotation.w
      );
     
      const euler = new THREE.Euler().setFromQuaternion(quaternion);

      const angle = THREE.MathUtils.degToRad(50) * delta;
      if (leftward) {
        euler.y += angle;
        const rotationQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, angle, 0));
        currentRotation.multiply(rotationQuaternion);
        body.current.setRotation(currentRotation, true);
      }
      if (rightward) {
        euler.y -= angle;
        const rotationQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, -angle, 0));
        currentRotation.multiply(rotationQuaternion);
        body.current.setRotation(currentRotation, true);
      }
      const newQuaternion = new THREE.Quaternion().setFromEuler(euler);
      body.current.setNextKinematicRotation(newQuaternion);

      const forwardVector = new THREE.Vector3(0, 0, -1).applyQuaternion(newQuaternion);

      let impulse = { x: 0, y: 0, z: 0 };
      if (forward) {
        impulse.x -= forwardVector.x * impulseStrength;
        impulse.z -= forwardVector.z * impulseStrength;
      }
      if (backward) {
        impulse.x += forwardVector.x * impulseStrength;
        impulse.z += forwardVector.z * impulseStrength;
      }

      if (Math.abs(scroll.delta) >= 1) {
        body.current.setTranslation(targetPosition, true);
        body.current.setRotation(targetRotation, true);
      } else {
        const scrollImpulseStrength = scroll.delta * 50000;
        impulse.x += forwardVector.x * scrollImpulseStrength;
        impulse.z += forwardVector.z * scrollImpulseStrength;

        body.current.applyImpulse(impulse);
      }

      const bodyPosition = body.current.translation();
      const cameraPosition = new THREE.Vector3();
      cameraPosition.copy(bodyPosition);

      if ( boundryRef.current || secondBoundryRef.current || thirdBoundryRef.current ) {
        cameraPosition.add(new THREE.Vector3(forwardVector.x * 100, 75, forwardVector.z * 120));
      } else {
        cameraPosition.add(new THREE.Vector3(-forwardVector.x * -50, 20, -forwardVector.z * -30));
      }

      if (startTourRef.current) {
        const cameraTarget = new THREE.Vector3();
        cameraTarget.copy(bodyPosition);
        cameraTarget.y += 1;

        smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
        smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

        camera.position.copy(smoothedCameraPosition);
        camera.lookAt(smoothedCameraTarget);
      } else if (!startTourRef.current) {
        camera.position.copy(new THREE.Vector3(-30, 200, 0));
        camera.lookAt(10, -10, 0);
      }

      setIsWithinBoundaries(isPointInPolygon(bodyPosition, vertices1));
      setIsWithinSecondPolygon(isPointInPolygon(bodyPosition, vertices2));
      setIsWithinThirdPolygon(isPointInPolygon(bodyPosition, vertices3));
      setIsWithinFourthPolygon(isPointInPolygon(bodyPosition, vertices4));
      setIsWithinFifthPolygon(isPointInPolygon(bodyPosition, vertices5));
      setIsWithinSixthPolygon(isPointInPolygon(bodyPosition, vertices6)); // New state check

      console.log("Position:", bodyPosition);
      console.log("Rotation:", currentRotation);
    }
  });

  return (
    <>
      <RigidBody
        ref={body}
        type="dynamic"
        castShadow
        linearDamping={0.5}
        angularDamping={0.5}
        colliders="cuboid"
        restitution={0.001}
        friction={1}
        scale={5}
        onClick={resetCar}
      >
        <primitive object={scene}/>
      </RigidBody>
      <Html>
        <Guide
          isWithinBoundaries={isWithinBoundaries}
          setIsWithinBoundaries={setIsWithinBoundaries}
          isWithinSecondPolygon={isWithinSecondPolygon}
          setIsWithinSecondPolygon={setIsWithinSecondPolygon}
          isWithinThirdPolygon={isWithinThirdPolygon}
          setIsWithinThirdPolygon={setIsWithinThirdPolygon}
          isWithinFourthPolygon={isWithinFourthPolygon}
          setIsWithinFourthPolygon={setIsWithinFourthPolygon}
          isWithinFifthPolygon={isWithinFifthPolygon}
          setIsWithinFifthPolygon={setIsWithinFifthPolygon}
          isWithinSixthPolygon={isWithinSixthPolygon} // Pass new state
          setIsWithinSixthPolygon={setIsWithinSixthPolygon} // Pass new setter function
          startTour={startTour}
        />
      </Html>
    </>
  );
}

export default GoCart;
