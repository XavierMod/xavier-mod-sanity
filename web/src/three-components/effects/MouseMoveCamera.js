import React, {useEffect, useRef, useState} from 'react';
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber';

function MouseMoveCamera(props) {
    const { camera, gl, mouse, intersect, viewport } = useThree();

    useFrame(({ mouse, camera }) => {
      var x = (mouse.x * 10) / 3
      var y = (mouse.y * 30) / 3
            intersect((e) => {e.position.y= y} )
          camera.position.set(props.init.iniX + (x / 15), props.init.iniY + (y / 15));
        
    })
    return null
}

export default MouseMoveCamera;