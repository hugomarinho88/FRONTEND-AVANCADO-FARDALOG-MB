#  FardaLog MB

Sistema Front-end desenvolvido em React para simular a cadeia logística de fardamento.

Este projeto foi desenvolvido como **MVP da disciplina Desenvolvimento Front-end Avançado, da Pós-graduação em Desenvolvimento Full Stack.

---

# Objetivo

Desenvolver uma aplicação front-end utilizando React, React Router, Hooks e Componentização, simulando um sistema de consulta aos itens de fardamento, por meio de um arquivo JSON, sem utilização de um servidor real.

---

# Funcionalidades

- Dashboard com indicadores logísticos;
- Catálogo de itens de fardamento;
- Pesquisa dinâmica por nome do item;
- Página de detalhes de cada item;
- Status visual dos itens;
- Navegação entre páginas utilizando React Router;
- Página 404 para URLs inexistentes;
- Layout responsivo;
- Simulação de consulta a servidor utilizando arquivo JSON.

---

# Tecnologias utilizadas

- React
- Vite
- JavaScript (ES6+)
- React Router DOM
- HTML5
- CSS3

---

# Hooks utilizados

- useState
- useEffect
- useNavigate
- useParams
- useLocation

---

# Componentes reutilizáveis

O projeto foi desenvolvido utilizando o conceito de componentização do React.

Componentes criados:

- Header
- Footer
- PageContainer
- InfoCard
- ItemCard
- SearchBar
- StatusBadge

---

# Estrutura do Projeto

```text
src
│
├── components
│   ├── Footer
│   ├── Header
│   ├── InfoCard
│   ├── ItemCard
│   ├── PageContainer
│   ├── SearchBar
│   └── StatusBadge
│
├── data
│   └── itens.json
│
├── pages
│   ├── Dashboard.jsx
│   ├── Catalogo.jsx
│   ├── Detalhes.jsx
│   └── NotFound.jsx
│
├── routes
│   └── AppRoutes.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

---

# Como executar o projeto

## Clonar o repositório

```bash
git clone https://github.com/hugomarinho88/FRONTEND-AVANCADO-FARDALOG-MB.git
```

## Acessar a pasta

```bash
cd FRONTEND-AVANCADO-FARDALOG-MB
```

## Instalar as dependências

```bash
npm install
```

## Executar o projeto

```bash
npm run dev
```

## Abrir no navegador

```
http://localhost:5173
```

---

# Requisitos atendidos

✔ React

✔ Componentização

✔ React Router

✔ useState

✔ useEffect

✔ useNavigate

✔ useParams

✔ useLocation

✔ Simulação de servidor utilizando JSON

✔ Página 404

✔ Layout responsivo

---

Projeto desenvolvido como MVP da disciplina Desenvolvimento Front-end Avançado, da Pós-graduação em Desenvolvimento Full Stack.

