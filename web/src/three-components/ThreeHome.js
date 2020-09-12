import React, {useEffect, useRef, useState} from 'react';
import Box from './components/Box';
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber';
import { Text } from "troika-three-text";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CameraControls from './helpers/OrbitControls';
import styled from 'styled-components';
import Terrain from './components/Terrain';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from 'react-postprocessing';
import fonts from "./resources/fonts";
import Button from '../components/Library/Button'
import MouseMoveCamera from './effects/MouseMoveCamera';
import AniLink from "gatsby-plugin-transition-link/AniLink";

extend({ OrbitControls });
extend({ Text });

const text =
  "Xavier Mod";

const text2 = "Front End Developer, UI Designer & Creative technologist"

const AppWrapper = styled.div`
  height: 100%;
  position: relative;
`;

const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 300px;
    z-index: 1;
    width: 100%;
    text-align: center;
`;

function App() {

  useEffect(() => {
    // Update the document title using the browser API
    console.log('rendering')
  }, []);

  const [init, setInit] = useState({
    iniX: 10,
    iniY: 10,
    iniZ: 30
  });
  const [rotation, setRotation] = useState([0, 0.3, 0, 0]);
  const [opts, setOpts] = useState({
    font: "Bitter",
    fontSize: 1,
    color: "#99ccff",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: -0.04,
    textAlign: "justify",
    materialType: "MeshPhongMaterial"
  });

  const [opts2, setOpts2] = useState({
    font: "Bitter",
    fontSize: 0.2,
    color: "#99ccff",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: -0.07,
    textAlign: "center",
    materialType: "MeshPhongMaterial"
  });

  return (
    <AppWrapper>
    <ButtonWrapper>
    <AniLink paintDrip hex="#21252b" to="about" duration={1}>
      <Button 
            type="primary" 
            body="Come on in"
            width="180px"
            iconSource="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMCAyM2gydjFoLTIwdi0xaDJ2LTIzaDE2djIzem0tMS0yMmgtMTR2MjJoMTRsLTEwLTEuOTU0di0xOC4wMTVsMTAtMi4wMzF6bS03IDExaC0ydjFoMnYtMXoiLz48L3N2Zz4=" />
    </AniLink>
    </ButtonWrapper>
  <Canvas 
  pixelRatio={window.devicePixelRatio / 2}
  camera={{ fov: 15, position: [init.iniX, init.iniY, init.iniZ] }}>      
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <text
          position-z={1}
          position-y={1}
          position-x={0.4}
          rotation={rotation}
          {...opts}
          text={text}
          font={fonts[opts.font]}
          anchorX="center"
          anchorY="middle"
        >
          {opts.materialType === "MeshPhongMaterial" ? (
            <meshPhongMaterial attach="material" color={opts.color} />
          ) : null}
        </text>
        <text
          position-z={1}
          position-y={2}
          position-x={0.4}
          rotation={rotation}
          {...opts2}
          text={text2}
          font={fonts[opts.font]}
          anchorX="center"
          anchorY="middle"
        >
          {opts.materialType === "MeshPhongMaterial" ? (
            <meshPhongMaterial attach="material" color={opts.color} />
          ) : null}
        </text>
      <Terrain />
      <MouseMoveCamera init={init} />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
    </AppWrapper>
  );
}

export default App;