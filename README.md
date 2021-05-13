# Pokedex

## Project

Site regroupant tous les Pokemons
Challenge fait en exercice lors de la formation O'Clock (en Boostrap) refait en EJS/CSS

## Stack

-Node 10+
-dotenv
-express
-pg
-ejs for HTML dynamic
-CSS
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
sqitch deploy db:pg:pokemon
sqitch revert db:pg:pokemon
sqitch verify db:pg:pokemon

npm start for node index.js
