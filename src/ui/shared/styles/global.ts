import { createGlobalStyle } from "styled-components";


export enum FontSized {
  DEFAULT = 62.5,
  FIFTEEN_HUNDRED = 58.5,
  TWENTY_FIVE_HUNDRED = 77,
  THREE_THOUSAND = 90,
  THIRTY_EIGHT_HUNDRED = 130
}

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    box-sizing: border-box;
    outline: none;
    font-family: var(--font-family);
    user-select: none;
  }

  #__next {
    height: 100%;
    width: 100%;
  }

  ul {
    list-style-type: none;
  }

  input {
    user-select: initial;
  }

  img {
    pointer-events: none;
  }

  html {
    font-size: ${FontSized.DEFAULT}%;
  }

  @media (min-width: 1500px) {
    html {
      font-size: ${FontSized.FIFTEEN_HUNDRED}%;
    }
  }

  @media (min-width: 2560px) {
    html {
      font-size: ${FontSized.THIRTY_EIGHT_HUNDRED}%;
    }
  }

  @media (min-width: 3000px) {
    html {
      font-size: ${FontSized.THREE_THOUSAND}%;
    }
  }

  @media (min-width: 3820px) {
    html {
      font-size: ${FontSized.THIRTY_EIGHT_HUNDRED}%;
    }
  }

  html, body {
    height: 100vh;
    overflow: hidden;
    margin: 0;
    touch-action: pan-y;
  }
  
  #gallery-download {
    width: 16rem;
    height: 4.5rem;
    z-index: 1000000000;
    position: absolute;
    right: 11rem;
    top: 0.5rem;
    background: transparent;
    cursor: pointer;

    span {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      color: #FFF;
      font-family: Nunito Sans, sans-serif;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.63rem;
      text-decoration: none;
    }

    &:hover {
      scale: 1.03;
    }
  }
`