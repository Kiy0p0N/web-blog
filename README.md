# Projeto Blog

Este é um projeto simples de um blog construído utilizando Node.js, Express e EJS, onde os usuários podem criar, visualizar, editar e excluir postagens. O projeto não utiliza banco de dados, e os posts são armazenados temporariamente na memória. Os identificadores dos posts são gerados utilizando a biblioteca `uuid`.

## Funcionalidades

- Criar novas postagens (com título e conteúdo)
- Visualizar todas as postagens com título e conteúdo na página inicial
- Editar postagens existentes
- Excluir postagens
- IDs únicos para cada post gerados utilizando `uuid`

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) - Plataforma de desenvolvimento JavaScript no servidor
- [Express.js](https://expressjs.com/) - Framework web para Node.js
- [EJS](https://ejs.co/) - Template engine para gerar HTML dinâmico
- [uuid](https://www.npmjs.com/package/uuid) - Biblioteca para gerar identificadores únicos universais (UUID)

## Instalação e Execução

Siga os passos abaixo para executar o projeto localmente:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
