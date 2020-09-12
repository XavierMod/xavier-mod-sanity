import React, {useEffect, useRef, useState} from 'react';
import { useFrame, useUpdate } from "react-three-fiber";
import {noise} from '../helpers/perlin';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load("models/scene.gltf", setModel)
  })

  return model ? <primitive 
    position={[0, 10, 1]}
    rotation={[Math.PI / 2, 0, 0]}    
    scale={[0.3, 0.3, 0.3]} 
    object={model.scene} /> : null
}

const Terrain = () => {
  const mesh = useUpdate(({ geometry }) => {
    noise.seed(Math.random());
    let pos = geometry.getAttribute("position");
    let pa = pos.array;
    const hVerts = geometry.parameters.heightSegments + 1;
    const wVerts = geometry.parameters.widthSegments + 1;
    for (let j = 0; j < hVerts; j++) {
      for (let i = 0; i < wVerts; i++) {
        const ex = 0.9;
        pa[3 * (j * wVerts + i) + 2] =
          (noise.simplex2(i / 100, j / 100) +
            noise.simplex2((i + 200) / 50, j / 50) * Math.pow(ex, 1) +
            noise.simplex2((i + 400) / 25, j / 25) * Math.pow(ex, 2) +
            noise.simplex2((i + 600) / 12.5, j / 12.5) * Math.pow(ex, 3) +
            +(noise.simplex2((i + 800) / 6.25, j / 6.25) * Math.pow(ex, 4))) /
          2;
      }
    }

    pos.needsUpdate = true;
  });

  // Raf loop
  useFrame(() => {
    mesh.current.rotation.z += 0.001;
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[45, 25, 75, 75]} />
      <meshPhongMaterial
        attach="material"
        color={"#14161A"}
        specular={"#14161A"}
        shininess={3}
        flatShading
      />
    </mesh>
  );
};

export default Terrain;