# API de Notícias MDR

Uma API RESTful para gerenciamento e consulta de notícias, construída com Astro e PostgreSQL.

## 📋 Sobre o Projeto

Este projeto é uma API para gerenciar notícias do MDR (Ministério do Desenvolvimento Regional). A API permite listar todas as notícias, obter as notícias mais recentes e buscar notícias específicas por slug.

## 🛠️ Tecnologias Utilizadas

- [Astro](https://astro.build/) - Framework web para construção de sites e APIs
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
- [dotenv](https://www.npmjs.com/package/dotenv) - Gerenciamento de variáveis de ambiente

## 🚀 Estrutura do Projeto

```text
/
├── public/
├── src/
│   ├── lib/
│   │   └── db.ts         # Configuração da conexão com o banco de dados
│   └── pages/
│       └── api/
│           └── noticia/  # Endpoints da API de notícias
│               ├── all.ts       # Endpoint para listar todas as notícias
│               ├── recents.ts   # Endpoint para listar as 4 notícias mais recentes
│               └── [slug].ts    # Endpoint para buscar uma notícia específica por slug
└── package.json
```

## 📡 Endpoints da API

### GET /api/noticia/all
Retorna todas as notícias ordenadas por data de publicação (mais recentes primeiro).

### GET /api/noticia/recents
Retorna as 4 notícias mais recentes.

### GET /api/noticia/[slug]
Retorna uma notícia específica com base no slug fornecido.

## ⚙️ Configuração

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto:
   ```
   PG_HOST=seu_host_postgres
   PG_PORT=sua_porta_postgres
   PG_USER=seu_usuario_postgres
   PG_PASSWORD=sua_senha_postgres
   PG_DATABASE=seu_banco_postgres
   ```

## 🧞 Comandos

| Comando                   | Ação                                             |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala as dependências                          |
| `npm run dev`             | Inicia o servidor de desenvolvimento em `localhost:4321` |
| `npm run build`           | Compila o projeto para produção em `./dist/`     |
| `npm run preview`         | Visualiza a versão de produção localmente        |

## 📝 Estrutura do Banco de Dados

A API utiliza uma tabela `noticias_mdr` no PostgreSQL com os seguintes campos principais:
- `slug`: Identificador único da notícia na URL
- `publication_date`: Data de publicação da notícia

## 🔒 Requisitos

- Node.js 16 ou superior
- PostgreSQL 12 ou superior