# Projeto Blog

Este é um projeto simples de blog desenvolvido com Node.js, Express, EJS, `method-override`, `body-parser` e `uuid`. Os usuários podem criar, visualizar, editar e excluir postagens. O projeto utiliza `uuid` para gerar identificadores únicos para cada post, e as informações não são persistidas em um banco de dados (dados armazenados temporariamente na memória).

## Funcionalidades

- Criar novas postagens (com título e conteúdo)
- Visualizar todas as postagens com título e conteúdo na página inicial
- Editar postagens existentes
- Excluir postagens
- IDs únicos para cada post gerados com `uuid`

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) - Plataforma de desenvolvimento JavaScript no servidor
- [Express.js](https://expressjs.com/) - Framework web para Node.js
- [EJS](https://ejs.co/) - Template engine para gerar HTML dinâmico
- [uuid](https://www.npmjs.com/package/uuid) - Biblioteca para gerar identificadores únicos universais (UUID)
- [method-override](https://www.npmjs.com/package/method-override) - Middleware para suportar métodos HTTP como PUT e DELETE
- [body-parser](https://www.npmjs.com/package/body-parser) - Middleware para analisar dados de formulários

## Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   
2. **Instale as dependências: Navegue até o diretório do projeto e execute o seguinte comando:**
   ```bash
   npm install
   
3. **Utilize o Nodemon para desenvolvimento: Para reiniciar automaticamente o servidor ao fazer alterações no código**
   1. **Instale o Nodemon:
      ```bash
      npm install -g nodemon
   2. **Inicie o servidor: Em vez de usar node, use o comando abaixo para iniciar o servidor com o Nodemon:**
      ```bash
      nodemon index.js

   3. **Acesse o blog:**
      Abra o navegador e acesse http://localhost:3000


## Estrutura do Projeto

|-- node_modules
|-- public
     |-- style
          |-- main.css
|-- views
     |-- partials
          |-- header.ejs
          |-- footer.ejs
     |-- edit.ejs
     |-- index.ejs
|-- index.js
|-- package-lock.json
|-- package.json
|-- readme.md

## Dependências do Projeto
-express: Framework para o desenvolvimento web com Node.js
-ejs: Template engine para renderizar HTML dinâmico
-method-override: Middleware que permite o uso de métodos PUT e DELETE
-body-parser: Middleware para análise de dados enviados por formulários
-uuid: Biblioteca para gerar identificadores únicos (UUID)

### Instalação das Dependências
Para instalar todas as dependências do projeto, execute o comando:
   ```bash
   npm install

````
## Como Usar
1. **Criar um post:**
   Na página inicial, você pode criar um novo post preenchendo o título e o conteúdo no formulário e clicando em "Criar".

2. **Editar um Post:**
   Clique no botão "Editar" ao lado de uma postagem para alterar seu título e/ou conteúdo.

3. **Excluir um Post:**
   Clique no botão "Excluir" para remover permanentemente uma postagem.

## Melhorias Futuras
-Persistir os dados das postagens em um banco de dados (MongoDB, MySQL, etc.).
-Adicionar autenticação para proteger a criação, edição e exclusão de posts.
-Implementar a funcionalidade de busca para encontrar posts específicos.
