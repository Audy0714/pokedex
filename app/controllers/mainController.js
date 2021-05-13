const dataMapper = require('../dataMapper');

/**
 * Le controller chargé de centraliser le middleware concernant les pokemons
 */
const mainController = {
	// GET /
	/**
	 * middleware chargé d'afficher la page d'accueil
	 * @param {*} response - la page d'accueil homePage
	 */
	homePage: (request, response) => {
		response.render('homePage');
	},

	// GET /pokemon
	/**
	 * middleware chargé d'afficher la page de tous les pokemons
	 * @param {Request} request - représente la requête getAllPokemons()
	 * @param {Response} response - renvoie la liste de tous les pokemons
	 */
	allPokemonsPage: (request, response) => {
		dataMapper.getAllPokemons((error, result) => {
			if (!!error) {
				response.status(500).send(error);
				return;
			}
			response.render('list', { pokemonList: result.rows });
		});
	},

	// GET /pokemon/:id
	/**
	 * middleware chargé d'afficher la page du pokemon via son id
	 * @param {Request} request - représente la requête getOnePokemon()
	 * @param {Response} response - renvoie le pokemon avec ses types associés
	 * @param {next} next - permet de continuer si rien n'est trouvé
	 */
	pokemonPage: (request, response, next) => {
		const { id } = request.params;

		dataMapper.getOnePokemon(id, (error, result) => {
			if (!!error) {
				response.status(500).send(error);
				return;
			}
			if (!result.rows[0]) {
				next();
				return;
			}
			const pokemon = result.rows[0];
			pokemon.typeList = [];

			for (const type of result.rows) {
				pokemon.typeList.push({
					id: type.type_id,
					name: type.type_name,
					color: type.color,
				});
			}
			// pour pouvoir afficher correctement les différentes types du pokemon, on doit delete d'abord sinon affiche le même type s'il y en a deux !!!
			delete pokemon.type_id;
            delete pokemon.type_name, pokemon.color;
            delete pokemon.color;
         
			response.render('detail', pokemon);
		});
	},

	// GET /type
	/**
	 * middleware chargé d'afficher tous les types des pokemons
	 * @param {Request} request - représente la requête getAllTypes()
	 * @param {Response} response - renvoie la liste de tous les types
	 */
	typePage: (request, response) => {
		dataMapper.getAllTypes((error, result) => {
			if (!!error) {
				response.status(500).send(error);
				return;
			}
			response.render('type', { typeList: result.rows });
		});
	},

	// GET /type/:id
	/**
	 * middleware chargé d'afficher la page des pokemons via un type
	 * @param {Request} request - représente la requête getOneType()
	 * @param {Response} response - renvoie tous les pokemons correspondant à un type
	 */
	pokemonTypePage: (request, response) => {
		const { id } = request.params;

		dataMapper.getOneType(id, (error, result, next) => {
			if (!!error) {
				response.status(500).send(error);
				return;
			}
			if (!result.rows) {
				next();
				return;
			}
			response.render('list', { pokemonList: result.rows });
		});
	},

	// GET /request/search?
	/**
	 *  middleware concernant la barre de recherche sur le nom d'un pokemon
	 * @param {Request} request - représente la requête searchOnePokemonByName()
	 * @param {*} response - renvoie la page du pokemon trouvé via son id
	 */
	searchPokemon: (request, response) => {
		const { search } = request.query;

		dataMapper.searchOnePokemonByName(search, (error, result, next) => {
			if (!!error) {
				response.status(500).send(error);
				return;
			}
			if (!result.rows) {
				next();
				return;
			}
			if (result.rows) {
				response.redirect(`/pokemon/${result.rows[0].id}`);
			}
		});
	},

	/**
	 * Page 404 Not found
	 * @param {Response} response - renvoie la page 404 error
	 */
	notFound: (request, response) => {
		console.debug('mainController notFound');
		response
			.status(404)
			.render('error', { error: 404, message: 'Page not found' });
	},
};

module.exports = mainController;
