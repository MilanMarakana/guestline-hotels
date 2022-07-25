import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #EFEFEF;
        padding: 20px 60px;
        margin: 0;
        @media screen and (max-device-width: 1024px)
		 {
			padding: 10px 10px;
		}
    }
`;