import React, { Component } from 'react'
import styled from 'styled-components'
import CircleBar from '../Library/CircleBar';

const CircleBars = styled.div`
    text-align: center;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 5;
    padding: 20px;

    h3 {
        margin-bottom: 30px;
    }
`;

class TechStack extends Component {
    render() {
        return (
            <>
                <CircleBars>
                        <h3>Front End Development</h3>
                        <CircleBar 
                            text="HTML5+"
                            color="255, 255, 255"
                            percentage="100"
                            iconName="html5"
                            link="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"/>
                        <CircleBar 
                            text="CSS3"
                            color="255, 255, 255"
                            percentage="100"
                            iconName="css3"
                            link="https://developer.mozilla.org/en-US/docs/Web/CSS"/>  
                        <CircleBar 
                            text="JS ES6+"
                            color="255, 255, 255"
                            percentage="90"
                            iconName="javascript"
                            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"/>
                        <CircleBar 
                            text="Sass"
                            color="255, 255, 255"
                            percentage="50"
                            iconName="sass"
                            link="https://developer.mozilla.org/en-US/docs/Web/CSS"/>  
                        <CircleBar 
                            text="React.js"
                            color="15, 255, 95"
                            percentage="85"
                            iconName="react"
                            link="https://reactjs.org/"/>
                        <CircleBar 
                            text="Gatsby"
                            color="15, 255, 95"
                            percentage="85"
                            iconName="gatsby"
                            link="https://www.gatsbyjs.org/"/>
                        <CircleBar 
                            text="Styled c."
                            color="255, 255, 255"
                            percentage="85"
                            iconName="styled-components"
                            link="https://styled-components.com/"/>
                        <CircleBar 
                            text="GraphQL"
                            color="255, 255, 255"
                            percentage="65"
                            iconName="graphql"
                            link="https://graphql.org/"/>
                        <CircleBar 
                            text="Liquid"
                            color="255, 255, 255"
                            percentage="80"
                            iconName="shopify"
                            link="https://shopify.github.io/liquid/"/>
                </CircleBars>
                <CircleBars>
                    <h3>Back End Development</h3>
                    <CircleBar 
                            text="Firebase"
                            color="255, 255, 255"
                            percentage="30"
                            iconName="firebase"
                            link="https://firebase.google.com/"/>
                        <CircleBar 
                            text="Node.js"
                            color="15, 255, 95"
                            percentage="40"
                            iconName="node-dot-js"
                            link="https://nodejs.org/en/"/>
                         <CircleBar 
                            text="PHP"
                            color="15, 255, 95"
                            percentage="40"
                            iconName="php"
                            link="https://www.php.net/"/>
                        <CircleBar 
                            text="Wordpress"
                            color="15, 255, 95"
                            percentage="50"
                            iconName="wordpress"
                            link="https://wordpress.org/"/>
                </CircleBars>
                <CircleBars>
                    <h3>UI Design</h3>
                        <CircleBar 
                            color="255, 255, 255"
                            percentage="100"
                            iconName="sketch"
                            link="https://www.sketch.com/"/>
                        <CircleBar 
                            color="255, 255, 255"
                            percentage="100"
                            iconName="adobecreativecloud"
                            link="https://www.adobe.com/uk/creativecloud.html?promoid=NGWGRLB2&mv=other"/>
                        <CircleBar 
                            color="255, 255, 255"
                            percentage="80"
                            iconName="figma"
                            link="https://www.figma.com/"/>
                        <CircleBar 
                            color="255, 255, 255"
                            percentage="100"
                            iconName="invision"
                            link="https://www.invisionapp.com/"/>
                </CircleBars>
            </>
        )
    }
}

export default TechStack
