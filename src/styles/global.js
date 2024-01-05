import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,500&family=Montserrat:wght@500;600&display=swap');

:root {
    --cor-fundo: #060047;
    --cor-texto: #E8D2A6;
    --cor-destaque: #F48484;
    --cor-hover: #F55050;

    --fonte-principal: 'Lora', serif;
    --fonte-secundária: 'Montserrat', sans-serif;
}

* {
  margin: 0;
  padding: 0;
};

body {
  box-sizing: border-box;
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
}
`;
