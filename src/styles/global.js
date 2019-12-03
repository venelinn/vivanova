import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --color-brand: #e00000;
    --color-dark: #313131;
    --color-base: var(--color-dark);
    --color-light: #444;
    --page-max-width: 1200px;
    --custom-ease-1: cubic-bezier(0.475,0.425,0,0.995);
    --custom-ease-2: cubic-bezier(0.835,-0.005,0.06,1);
    --custom-ease-3: cubic-bezier(0.19,1,0.22,1);
    --custom-ease-4: cubic-bezier(0.63,0.03,0.21,1);
    --primary-ease: var(--custom-ease-1);
    --text-in: cubic-bezier(.31,.11,.12,.99);
    --color-primary-black-1: #1f1e1d;
    --color-primary-black-2: #111;
    --color-primary-black-3: #171615;
    --color-primary-white: #fff;
    --body-font: 'Raleway', serif;
    --fw-light: 100;
    --fw-normal: 400;
    --fw-regular: var(--fw-normal);
    --fw-bold: 700;
  }
`
