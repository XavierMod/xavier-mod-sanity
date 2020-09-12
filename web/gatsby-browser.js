import React from "react"
import Theming from './src/theme/Theming'
import ResponsiveHeader from './src/components/Headers/ResponsiveHeader'
import './src/styles/animations/reveal.css';
import './src/styles/animations/basic.css';

export const wrapRootElement = ({ element }) => {
  return (
    <Theming>
        <ResponsiveHeader />
        {element}
    </Theming>
  )
}