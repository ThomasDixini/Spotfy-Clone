import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --white: #ffffff;

    

    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-500: #323435;
    --gray-900: #121214;

    --cyan-500:  #61dafb;
    --yellow-500: #eba417;
}

html {
    @media(max-width: 1080px ){
        font-size: 93.75%;
    }
    @media(max-width: 720px) {
        font-size: 87.5%;
    }
}

body {
    background-color: var(--gray-900);
    color: white;
    
}

body,input,textarea, button {
    font: 400 1rem "Roboto",sans-serif;
}

h1,h2,h3,h4,h5,h6,strong {
    font-weight: bold;
}

button {
    cursor: pointer;
}

[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
}


`