import { createGlobalStyle } from 'styled-components';
import { md_size, overpass, veryDarkBlue } from './variables';

// ## Fonts Family

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 100%;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0px;
        padding: 0px;
        font-size: ${md_size};
        color: ${veryDarkBlue};
        font-family: ${overpass};
    }

    a, a:visited, a:hover {
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, p {
        margin: 0;
    }
`;

export default GlobalStyle;