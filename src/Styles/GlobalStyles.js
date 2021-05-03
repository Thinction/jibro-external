import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
        font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
    }
    a{
        text-decoration: none;
        color:inherit;
    }

    input{
        :focus{
            outline: none;
        }
    }
    button{
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
        background: transparent;
        color: inherit;
        cursor: pointer;
        :focus{
            outline: none;
        }
    }
`;