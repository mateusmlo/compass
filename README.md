<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Feito com [Nest](https://github.com/nestjs/nest) framework.

## Requisitos
- Docker
- Docker compose

## Framework e Libs utilizadas:
- NestJS (Framework)
- NodeJS (LTS: 16.13.1)
- TypeORM
- pg (PostgreSQL)
- Luxon (para tratar datas)
- Class Transformer/Validator (sanitização e DTOs)

## Instalação e setup
Primeiramente fazer uma cópia do arquivo .env.example para apenas .env, e então preencher as variáveis de acordo (as com valores entre <\<x>\>). Para iniciar o projeto e suas dependências, basta rodar no terminal `docker-compose up -d` e os requests estarão sendo aceitos na porta 3001 do localhost. Tanto o Node quanto o NestJS já são baixados diretamente da minha imagem hospedada no DockerHub, então não há preocupação com versões locais da stack. Há também uma imagem do pgAdmin no container para que a database possa ser gerenciada.  

## Rodar localmente
Para rodar localmente será necessário ter uma imagem do PostgreSQL rodando separadamente na porta 5432 ou tê-lo instalado em sua máquina, nesse último caso tendo as variáveis de ambiente `POSTGRES_` devidamente atualizadas com suas credenciais locais, com exceção de `POSTGRES_DB`. Feito isso, basta rodar no terminal:
  
 ```bash
  yarn
  ```
  Aguardar a instalação e então:
  ```bash
  yarn start:dev
  ```

## License

Nest is [MIT licensed](LICENSE).
