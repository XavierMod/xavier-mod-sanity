import React from 'react'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from './globalStyles'

const Theming = (props) => {
    return (
        <ThemeProvider theme={{
            colors: {
                mainBackground: '#14161A',
                darkBackground: '#131416',
                textPrimary: '#ffffff',
                textDark: '#14161A',
                accent: '#ffffff'
            },
            fonts: {
                primary: 'Bitter'
            },
            options: {
                maxWidthLayout: '1200px',
                logoWidth: '28px'
            }
        }}>
            <GlobalStyle />
            {props.children}
        </ThemeProvider>
    )
}

export default Theming
