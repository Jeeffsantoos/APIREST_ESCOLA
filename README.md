# Aplicação Express

Esta é uma aplicação Express que possui rotas para manipulação de usuários, tokens, alunos e fotos.

## Configuração

Antes de executar a aplicação, é necessário configurar algumas variáveis de ambiente. Siga as etapas abaixo:

1. Crie um arquivo `.env` na raiz do projeto.
2. Adicione as seguintes variáveis ao arquivo `.env`:

DB_HOST=<endereço_do_banco_de_dados>

DB_USER=<usuário_do_banco_de_dados>

DB_PASSWORD=<senha_do_banco_de_dados>

Certifique-se de substituir `<endereço_do_banco_de_dados>`, `<usuário_do_banco_de_dados>` e `<senha_do_banco_de_dados>` pelas informações corretas do seu banco de dados.

## Instalação

Siga estas etapas para instalar e executar a aplicação:

1. Clone este repositório: `git clone <URL_do_repositório>`
2. Navegue até o diretório do projeto: `cd <diretório_do_projeto>`
3. Instale as dependências: `npm install`
4. Inicie a aplicação: `npm start`

A aplicação será iniciada na porta padrão 3000. Você pode acessá-la em `http://localhost:3000`.

## Rotas

A aplicação possui as seguintes rotas:

- `/` - Rota inicial.
- `/users` - Rotas relacionadas aos usuários.
- `/tokens` - Rotas relacionadas aos tokens.
- `/alunos` - Rotas relacionadas aos alunos.
- `/fotos` - Rotas relacionadas às fotos.

Certifique-se de que as rotas estejam configuradas corretamente no arquivo `App.js` de acordo com as suas necessidades.

## Middlewares

A aplicação utiliza os seguintes middlewares:

- `express.urlencoded({ extended: true })` - Middleware para analisar corpos de requisições codificados em URL.
- `express.json()` - Middleware para analisar corpos de requisições codificados em JSON.
- `express.static()` - Middleware para servir arquivos estáticos localizados na pasta "uploads".

Certifique-se de que os middlewares estejam configurados corretamente no arquivo `App.js` de acordo com as suas necessidades.

---

Lembre-se de personalizar o README com informações adicionais relevantes para o seu projeto.
