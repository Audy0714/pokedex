const { Router } = require('express');

const router = Router();

const mainController = require('./controllers/mainController');

router.get('/', mainController.homePage);

//router.get('/pokemon', mainController.allPokemonPage);
//router.get('/pokemon/:id', mainController.pokemonPage);

//router.get('/type', mainController.typePage);

//router.get('/type/:id', mainController.pokemonTypePage)

router.use(mainController.notFound);

module.exports = router;