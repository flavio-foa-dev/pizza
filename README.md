# Sistema de Pizzaria com Filtros, Busca e Ordenação etc

Este é um sistema de pizzaria desenvolvido em React com Vite e TypeScript moderno, que permite aos usuários filtrar, buscar e ordenar pizzas de acordo com suas preferências.

## Funcionalidades

O sistema de pizzaria possui as seguintes funcionalidades:

- **Filtros**: Os usuários podem aplicar filtros para encontrar pizzas com base em diferentes categorias, como tipo de massa, cobertura, tamanho, etc.
- **Busca**: Os usuários podem pesquisar pizzas pelo nome ou palavras-chave relacionadas.
- **Ordenação**: As pizzas podem ser ordenadas por diferentes critérios, como preço, popularidade, avaliação, etc.

## Tecnologias Utilizadas

O sistema de pizzaria foi desenvolvido utilizando as seguintes tecnologias:

- React: uma biblioteca JavaScript para criação de interfaces de usuário.
- Vite: um bundler rápido para projetos modernos em JavaScript.
- TypeScript: uma linguagem de programação baseada em JavaScript, com suporte a tipagem estática.
- CSS: estilização dos componentes e layout da aplicação.

## Configuração e Execução

Para executar o sistema de pizzaria em sua máquina local, siga as etapas abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório para o seu ambiente de desenvolvimento.
3. Acesse a pasta raiz do projeto e execute o comando `npm install` ou `yarn install` para instalar as dependências necessárias.
4. Após a conclusão da instalação, execute o comando `npm run dev` ou `yarn dev` para iniciar o servidor de desenvolvimento.
5. Abra o seu navegador e acesse `http://localhost:3000` para visualizar a aplicação em execução.

## Estrutura de Arquivos

A estrutura de arquivos do projeto é organizada da seguinte forma:

```
├── src/
│   ├── components/
│   │   ├── FilterOptions.tsx
│   │   ├── PizzaCard.tsx
│   │   ├── SearchBar.tsx
│   │   ├── SortingOptions.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── ...
│   ├── data/
│   │   └── pizzas.json
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
├── tsconfig.json
└── README.md
```

- A pasta `src` contém todo o código-fonte do projeto.
- A pasta `components` contém os componentes reutilizáveis da aplicação.
- A pasta `pages` contém os componentes que representam as páginas da aplicação.
- A pasta `data` contém os arquivos de dados, como o arquivo `pizzas.json` que contém as informações das pizzas disponíveis.
- O arquivo `App.tsx` é o componente raiz da aplicação.
- O arquivo `index.tsx` é o ponto de entrada da aplicação.
- O arquivo `tsconfig.json` contém as configurações do TypeScript.

## Contribuição

Contribuições são bem-vindas! Se você quiser contribuir com melhorias, correções de bugs ou adicionar novos recursos, sinta-se à vontade para enviar um pull request.

