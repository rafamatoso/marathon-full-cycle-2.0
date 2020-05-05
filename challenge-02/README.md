<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

---

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="http://maratona.fullcycle.com.br/public/img/logo-maratona.png"/></a>
</p>

# Desafio 2

## API no Nest.js com TypeORM

Nesse desafio você dará um passo além e criará um endpoint Rest com a listagem de todas aulas da Maratona Full Cycle 2.0 (utilize o menu do site: [maratona.fullcycle.com.br](http://maratona.fullcycle.com.br)).

### Requisitos

- Nest.js
- TypeORM
- Migrations
- Banco de dados: SQLite

### Detalhes

- Estrutura do banco de dados: Tabela: maratona. Campos: id, aula.
- Endpoint: "/maratona" com a opção de listar (GET) e inserir (POST)
- Realize o build da aplicação usando o comando: "npm run build"
- Gere uma imagem Docker copiando a pasta dist para dento do container incluindo o arquivo do banco do SQLite com as informações populadas
- Utilize o comando como entrypoint: "npm start:prod"
- A aplicação deverá rodar na porta 3000
- Suba o container no DockerHub
- Poste sua imagem nos comentários do site: [maratona.fullcycle.com.br](http://maratona.fullcycle.com.br)
- Quando executarmos: "docker run -p 3000:3000 seu-login-docker/nome-da-sua-imagem" deveremos ter acesso a API na porta 3000

### Dicas

- Coloque o arquivo do banco de dados gerado pelo SQLite na raiz do projeto (não esqueça de copiá-lo para dentro do container em conjunto com a pasta dist). Utilize a configuração abaixo no arquivo: "app.module.ts"

```
TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [Maratona],
 })
```

- Para facilitar o processo e rodar o comando do TypeORM no terminal, adicione em scripts no package.json:

```
"typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js"
```

- Para realizar a configuração do banco de dados, crie um arquivo .env na raiz do projeto conforme abaixo:

```
TYPEORM_CONNECTION=sqlite
TYPEORM_DATABASE=database.sqlite
TYPEORM_ENTITIES=src/**/*.entity.ts
TYPEORM_MIGRATIONS=src/migrations/**/*.ts
TYPEORM_MIGRATIONS_DIR=src/migrations
```

- Para criar uma nova migração, execute o comando:

```
npm run typeorm migration:create -- -n maratona
```
