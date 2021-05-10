const dataMapper = require('../dataMapper');

const mainController = {
	// router
	homePage: (request, response) => {
		response.render('homePage');
	},

	allPokemonsPage: (request, response) => {
		dataMapper.getAllPokemons((error, result) => {
			if (!!error) {
				response.status(500).send(error);
				return;
			}
			response.render('list', { pokemonList: result.rows });
		});
	},

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
			response.render('detail', pokemon);
		});
	},

	typePage: (request, response) => {
		dataMapper.getAllTypes((error, result) => {
			if (!!error) {
				response.status(500).send(error);
				return;
			}
			response.render('type', { typeList: result.rows });
		});
	},

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

	notFound: (request, response) => {
		console.debug('mainController notFound');
		response
			.status(404)
			.render('error', { error: 404, message: 'Page not found' });
	},
};

module.exports = mainController;
