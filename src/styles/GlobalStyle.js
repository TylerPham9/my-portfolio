import { createGlobalStyle } from 'styled-components';
import theme from './theme'

const { colors, fontSizes } = theme;

const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
        width: 100%;
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        background: ${colors.primaryBackground};
        color: ${colors.white};
    }

    a {
        display: inline-block;
        text-decoration: none;
        color: ${colors.primary};
        transition: ${theme.transition};
    }

    ul, ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    h1, h2, h3 {
        padding: 0;
        margin: 0;
        color: ${colors.white};
        font-weight: 100;
    }

    .gatsby-image-outer-wrapper {
        height: 100%;
    }
    img {
        width: 100%;
        max-width: 100%;
        vertical-align: middle;
    }
    p {
        font-size: ${fontSizes.medium};
    }

    /* .fadeup-enter {
        opacity: 0.01;
        transform: translateY(20px);
        transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
    }
    .fadeup-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
    } */
    .fadedown-enter {
        opacity: 0.01;
        transform: translateY(-20px);
        transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
    }
    .fadedown-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
    }
    .fade-enter {
        opacity: 0.01;
        transition: opacity 1000ms ${theme.easing};
    }
    .fade-enter-active {
        opacity: 1;
        transition: opacity 1000ms ${theme.easing};
    }





`;

export default GlobalStyle;