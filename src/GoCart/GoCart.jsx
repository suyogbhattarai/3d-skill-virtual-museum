import React, { useRef, useState, useEffect } from "react";
import { RigidBody, useRapier } from "@react-three/rapier";
import { useFrame, useThree } from "@react-three/fiber";
import { useKeyboardControls, useGLTF, useScroll } from "@react-three/drei";
import * as THREE from "three";


function GoCart() {
  const body = useRef();
  const model = useGLTF('./CrabFinal.glb');
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cybertruck/model.gltf');
  console.log("model", model);

  const [smoothedCameraPosition] = useState(() => new THREE.Vector3(0, 0, 0));
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

  const [subscribeKeys, getKeys] = useKeyboardControls();
  const { rapier, world } = useRapier();
  const rapierWorld = world.raw();
  const { camera } = useThree();

  const scroll = useScroll();

  const targetRotation = new THREE.Quaternion(-0.000018261993318446912, -0.01266359630972147, -0.000003830413334071636, 0.9999198317527771);
  const targetPosition = new THREE.Vector3(-0.3209454119205475, -0.37842410802841187, -2.4040873050689697);

  useEffect(() => {
    if (body.current) {
      body.current.setTranslation({ x: 418.0941162109375, y: -0.3783695101737976, z: -11.223409652709961 }, true);
      body.current.setRotation({
        x: 0.000035550208849599585,
        y: -0.701973557472229,
        z: -0.00003524815838318318,
        w: 0.7122029662132263
      }, true);
    }
  }, []);

  const resetCar = () => {
    if (body.current) {
      body.current.setRotation({ x: 0, y: body.current.rotation().y, z: 0, w: 1 }, true);
      body.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
    }
  };

  useFrame((state, delta) => {
    const keys = getKeys();
    const { forward, backward, leftward, rightward, jump } = keys;
    const impulseStrength = 600000 * delta;

    if (body.current) {
      // Get the current rotation of the body
      const currentRotation = body.current.rotation();
      const quaternion = new THREE.Quaternion(
        currentRotation.x,
        currentRotation.y,
        currentRotation.z,
        currentRotation.w
      );
      const euler = new THREE.Euler().setFromQuaternion(quaternion);

      // Apply rotation based on leftward and rightward keys
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

      // Calculate the forward vector in the direction the cube is facing
      const forwardVector = new THREE.Vector3(0, 0, -1).applyQuaternion(newQuaternion);

      // Apply movement based on forward and backward keys
      let impulse = { x: 0, y: 0, z: 0 };
      if (forward) {
        impulse.x -= forwardVector.x * impulseStrength;
        impulse.z -= forwardVector.z * impulseStrength;
      }
      if (backward) {
        impulse.x += forwardVector.x * impulseStrength;
        impulse.z += forwardVector.z * impulseStrength;
      }

      // Check if a full scroll is detected
      console.log("Scroll Delta:", scroll.delta);
      if (Math.abs(scroll.delta) >= 1) {
        console.log("Full scroll detected, setting position and rotation");
        // Set position and rotation to target values
        body.current.setTranslation(targetPosition, true);
        body.current.setRotation(targetRotation, true);
      } else {
        // Apply movement based on scroll delta (reverse the direction as needed)
        const scrollImpulseStrength = scroll.delta * 50000; // Adjust the factor as needed
        impulse.x += forwardVector.x * scrollImpulseStrength;
        impulse.z += forwardVector.z * scrollImpulseStrength;

        body.current.applyImpulse(impulse);
      }

      // Update camera position and target to follow the player
      const bodyPosition = body.current.translation();
      const cameraPosition = new THREE.Vector3();
      cameraPosition.copy(bodyPosition);

      if (jump) {
        cameraPosition.add(new THREE.Vector3(forwardVector.x * 100, 75, forwardVector.z * 120));
      } else {
        cameraPosition.add(new THREE.Vector3(-forwardVector.x * -50, 20, -forwardVector.z * -30));
      }

      const cameraTarget = new THREE.Vector3();
      cameraTarget.copy(bodyPosition);
      cameraTarget.y += 1;

      smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
      smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

      camera.position.copy(smoothedCameraPosition);
      camera.lookAt(smoothedCameraTarget);

      // Log the current position and rotation vectors of the body
      console.log("Position:", bodyPosition);
      console.log("Rotation:", currentRotation);
    }
  });

  return (
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
      <primitive object={scene} />
    </RigidBody>
  );
}

export default GoCart;
