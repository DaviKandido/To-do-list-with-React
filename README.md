# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



 
 ### - O que é o React ?
React é uma biblioteca usada para criar Interfaces de usuários interativas
<br>
### - Qual seu beneficio ?
Auxilia na componentização, ou seja, reaproveitamento de código, Aplicado para desenvolvimento IOS & Android (React Native) & Desktop (Electron)
<br>
### - Quem foi seu criador ?
  Foi criado pela Meta (Facebook)


### Primeiros passo:
- npm create vite@5.5.2 . (Auxilia no desenvolvimento de React)
  -  npm (Gerenciador de pacotes)
  -  create (Criador do projeto)
  -  vite (Instancia um projeto vite)
  -  @5.2.2 (Versão do vite utilizada)A
  -  . (Ordena ele ser criado na pasta atual)


- Para importar Portabilidade de SCSS
  - npm install -D sass-embedded

- Pra importar Portabilidade com o TailWindcss
  - npm install -D tailwindcss postcss autoprefixer
  - npx tailwindcss init -p

### Em tailwind.config.js:
  /** @type {import('tailwindcss').Config} */
  export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }



### colar no index.scss:
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

### biblioteca para gerar ids Aleatório: 
  - npm install uuid@10.10.0


### Biblioteca para o gerenciamento de rotas em React:
  - npm install react-router-dom
  - Gerencia diferentes paginas (No entanto em um mesmo HTML) (SPA -Single Page Application)



### Para Fazer o deploy

    Prepare a aplicação para build
    - npm run build
