import React from 'react'
import {ThemeProvider} from 'styled-components'
import {theme} from './theme'
import GlobalStyle from './globalStyles'

const Theming = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {props.children}
        </ThemeProvider>
    )
}

export default Theming
