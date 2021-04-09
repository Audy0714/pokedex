# pokedex

## Project

Site regroupant tous les Pokemons

## Stack
-Node 10+
-dotenv
-express
-pg
-ejs for HTML
-postgresql
-dataMapper
-JSDOC
-sqitch

## Configuration
npm init -y for install dependencies
for BDD :
sqitch init pokemon --engine pg
sqitch config --user engine.pg.client psql
createdb pokemon
sqitch deploy (target heroku for sqitch deploy)
sqitch revert db:pg:pokemon
sqitch verify db:pg:pokemon

npm start for node index.js

### Deployment method

https://pokemon.herokuapp.com/v1