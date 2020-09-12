import React, { Suspense, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
    Canvas,
    useLoader,
    useFrame,
    extend,
    useThree,
  } from "react-three-fiber";

const CameraControls = () => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    const {
      camera,
      gl: { domElement },
    } = useThree();
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame((state) => controls.current.update());
    return <orbitControls ref={controls} args={[camera, domElement]} />;
  };

export default CameraControls;