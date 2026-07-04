# FardaLog MB

Sistema front-end desenvolvido em React para simular a consulta e o acompanhamento da cadeia logística de fardamento da Marinha do Brasil.

Este projeto foi desenvolvido como MVP da disciplina **Desenvolvimento Front-end Avançado**, da Pós-graduação em Desenvolvimento Full Stack.

## Funcionalidades

- Dashboard com indicadores logísticos;
- Catálogo de itens de fardamento;
- Busca por nome do item;
- Cards reutilizáveis;
- Página de detalhes por item;
- Status visual dos itens;
- Navegação com React Router;
- Página 404 para rotas inexistentes;
- Layout responsivo;
- Simulação de requisição a servidor por meio de arquivo JSON.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- React Router DOM
- HTML
- CSS

## Hooks utilizados

- `useState`
- `useEffect`
- `useNavigate`
- `useParams`
- `useLocation`

## Como executar o projeto

1. Clone o repositório:

```bash
git clone LINK_DO_REPOSITORIO

2. Acesse a pasta do projeto
cd fardalog-mb

3. Instale as dependências:
npm install

4. Execute o Projeto:
npm run dev

5. Acesse no navegador:
http://localhost:5173/

Estrutura de pastas:

src
├── components
│   ├── Footer
│   ├── Header
│   ├── InfoCard
│   ├── ItemCard
│   ├── PageContainer
│   ├── SearchBar
│   └── StatusBadge
├── data
│   └── itens.json
├── pages
│   ├── Catalogo.jsx
│   ├── Dashboard.jsx
│   ├── Detalhes.jsx
│   └── NotFound.jsx
├── routes
│   └── AppRoutes.jsx
├── App.jsx
├── index.css
└── main.jsx