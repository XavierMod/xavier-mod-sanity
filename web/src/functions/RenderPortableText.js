import React from "react";
import ReactDOM from "react-dom";
import PortableText from "@sanity/block-content-to-react";
import urlBuilder from "@sanity/image-url";
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import BlockContent from '@sanity/block-content-to-react';
const urlFor = source =>
  urlBuilder({ projectId: "f6m8060l", dataset: "production" }).image(source);

const serializer = {
  types: {
    image: props => {
      const fluidProps = getFluidGatsbyImage(
        props.node.asset._ref,
        { maxWidth: 800 },
        { projectId: "f6m8060l", dataset: "production" }
      )

      return (
          <figure>
            <Img
            style={{zIndex: '-1', margin: '70px auto', maxWidth: '1000px', maxHeight: '800px'}}
              fluid={fluidProps}
              alt={props.node.alt}
            />
            <figcaption>{props.node.caption}</figcaption>
          </figure>
      )
    }
  }
};

const RenderPortableText = (props) => {
    return (
        <PortableText          
          serializers={serializer} 
          blocks={props.body}  />
    )
}

export default RenderPortableText
