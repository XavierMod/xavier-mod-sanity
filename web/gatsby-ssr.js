/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
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