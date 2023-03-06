import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    html {
      box-sizing: border-box;
    }
    
    * {
      padding: 0;
      margin: 0;
      box-sizing: inherit;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }
    
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

  `;

export default GlobalStyles;
