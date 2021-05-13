const { Router } = require('express');

const router = Router();

const mainController = require('./controllers/mainController');

/**
* Page d'accueil
* @route GET /
* @returns homePage
 */ 
router.get('/', mainController.homePage);

/** 
* Barre de recherche
* @route GET/request/search?
* @group One Pokemon - un pokemon
* @param {String} name.path.required - le nom du pokemon à chercher
* @returns {JSON} - le pokemon trouvé avec ses types associés
*/
router.get('/request/search?', mainController.searchPokemon);

/** 
* Page qui affiche tous les pokemons
* @route GET/pokemon
* @group List All Pokemons - tous les pokemons
* @returns  - tous les pokemons trouvés
*/
router.get('/pokemon', mainController.allPokemonsPage);

/** 
* Page qui affiche un pokemon
* @route GET/pokemon/:id
* @group One Pokemon - un pokemon
* @param {Number} id.path.required - l'id du pokemon à fournir
* @returns  - le pokemon trouvé
*/
router.get('/pokemon/:id', mainController.pokemonPage);

/** 
* Page qui affiche tous les types des pokemons
* @route GET/type
* @group List All Types - liste de tous les types
* @returns {JSON} - tous les types
*/
router.get('/type', mainController.typePage);

/** 
* Page qui affiche tous les pokemons selon le type sélectionné
* @route GET/type/:id
* @group One Type - liste tous les pokemons selon le type sélectionné
* @param {Number} id.path.required - l'id du type à fournir
*/
router.get('/type/:id', mainController.pokemonTypePage);

/** 
* page 404 : Not found
*/
router.use(mainController.notFound);

module.exports = router;
