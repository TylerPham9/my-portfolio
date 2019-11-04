import { createGlobalStyle } from 'styled-components';

import { theme, media } from '@styles';

const { colors, fontSizes } = theme;

const GlobalStyle = createGlobalStyle`

    /* lato-300 - latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  src: url('fonts/lato/lato-v16-latin-300.eot'); /* IE9 Compat Modes */
  src: local('Lato Light'), local('Lato-Light'),
       url('fonts/lato/lato-v16-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('fonts/lato/lato-v16-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('fonts/lato/lato-v16-latin-300.woff') format('woff'), /* Modern Browsers */
       url('fonts/lato/lato-v16-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('fonts/lato/lato-v16-latin-300.svg#Lato') format('svg'); /* Legacy iOS */
}
/* lato-regular - latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: url('fonts/lato/lato-v16-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Lato Regular'), local('Lato-Regular'),
       url('fonts/lato/lato-v16-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('fonts/lato/lato-v16-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('fonts/lato/lato-v16-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('fonts/lato/lato-v16-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('fonts/lato/lato-v16-latin-regular.svg#Lato') format('svg'); /* Legacy iOS */
}
/* lato-700 - latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: url('fonts/lato/lato-v16-latin-700.eot'); /* IE9 Compat Modes */
  src: local('Lato Bold'), local('Lato-Bold'),
       url('fonts/lato/lato-v16-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('fonts/lato/lato-v16-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('fonts/lato/lato-v16-latin-700.woff') format('woff'), /* Modern Browsers */
       url('fonts/lato/lato-v16-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('fonts/lato/lato-v16-latin-700.svg#Lato') format('svg'); /* Legacy iOS */
}
/* lato-900 - latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  src: url('fonts/lato/lato-v16-latin-900.eot'); /* IE9 Compat Modes */
  src: local('Lato Black'), local('Lato-Black'),
       url('fonts/lato/lato-v16-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('fonts/lato/lato-v16-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('fonts/lato/lato-v16-latin-900.woff') format('woff'), /* Modern Browsers */
       url('fonts/lato/lato-v16-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('fonts/lato/lato-v16-latin-900.svg#Lato') format('svg'); /* Legacy iOS */
}

    html {
        box-sizing: border-box;
        /* width: 100%; */
        font-family: "Lato", sans-serif;
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
        color: ${colors.offWhite};
        font-size: ${fontSizes.medium};
        ${media.thone`font-size: ${fontSizes.small};`};
    }

    a {
        display: inline-block;
        color: ${colors.offWhite};
        text-decoration: none;
        text-decoration-skip-ink: none;
    }

    section {
        padding-top: calc(${theme.navHeight} + 10px);
        padding-bottom: 110px;
    }

    ul, ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    h1, h2, h3, h4, h5 {
        padding: 0;
        margin: 0;
        font-weight: 600;
        font-family: "Lato", sans-serif;
    }

    .gatsby-image-outer-wrapper {
        height: 100%;
    }
    img {
        width: 100%;
        max-width: 100%;
        vertical-align: middle;
    }

    hr {
        width: 100%;
        border: 1px solid red;
    }
`;

export default GlobalStyle;