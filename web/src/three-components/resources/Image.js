import React, {useMemo} from 'react'
import * as THREE from 'three'

function Image({ url }) {
    const texture = useMemo(() => new THREE.TextureLoader().load(url), [url])
    return (
      <mesh scale={[1000, 3.5, 3.5]}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshLambertMaterial attach="material" transparent>
          <primitive attach="map" object={texture} />
        </meshLambertMaterial>
      </mesh>
    )
  }

export default Image;