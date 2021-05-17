const db = require('./database');

// dataMapper pour gérer les requêtes SQL à la BDD
const dataMapper = {
	/**
	 * Fonction pour afficher tous les pokemons
	 * @function getAllPokemons - trouve tous les pokemons
	 * @param {*} callback - le résultat de la requête getAllpokemons()
	 */
	getAllPokemons: (callback) => {
		const query = {
			text: `SELECT * FROM pokemon;`,
		};

		db.query(query, (error, result) => {
			callback(error, result);
		});
	},

	/**
	 * Fonction pour afficher un pokemon via son id
	 * @function getOnePokemon - trouve le pokemon via son id
	 * @param {Number} id - l'id du pokemon
	 * @param {*} callback - le résultat de la requête getOnePokemon()
	 */
	getOnePokemon: (id, callback) => {
		const query = {
			text: `SELECT pokemon.*, "type".id AS "type_id", "type".name AS "type_name", "type".color 
                    FROM pokemon 
                    JOIN pokemon_type ON pokemon_type."pokemon_numero" = pokemon.numero
                    JOIN "type" ON "type".id = pokemon_type."type_id"
                    WHERE pokemon.id = $1;`,
			values: [id],
		};

		db.query(query, (error, result) => {
			callback(error, result);
		});
	},

	/**
	 * Fonction pour afficher tous les types
	 * @function getAllTypes - trouve tous les différents types
	 * @param {*} callback - le résultat de la requête getAllTypes()
	 */
	getAllTypes: (callback) => {
		const query = {
			text: `SELECT * FROM type`,
		};

		db.query(query, (error, result) => {
			callback(error, result);
		});
	},

	/**
	 * Fonction pour afficher tous les pokemon appartenant à un type spécifié
	 * @function getOneType - trouve tous les pokemon via un type
	 * @param {Number} id - l'id du type
	 * @param {*} callback - le résultat de la requête getOneType()
	 */
	getOneType: (id, callback) => {
		const query = {
			text: `SELECT 
					pokemon.*
					FROM pokemon
					JOIN pokemon_type ON pokemon_type.pokemon_numero = pokemon.numero
					JOIN "type" ON "type".id = pokemon_type.type_id
					WHERE pokemon_type.type_id = $1`,
			values: [id],
			
		};

		db.query(query, (error, result) => {
			callback(error, result);
		});
	},

	/**
	 * Fonction pour la barre de recherche pour un pokemon via son nom
	 * @function searchOnePokemonByName - trouve un pokemon via son nom
	 * @param {String} name - le nom du pokemon à chercher
	 * @param {*} callback - le résultat de la requête searchOnePokemonByName()
	 */
	searchOnePokemonByName: (name, callback) => {
		const query = {
			text: `SELECT *
                    FROM pokemon 
                    WHERE "name" = $1`,
			values: [name],
		};

		db.query(query, (error, result) => {
			callback(error, result);
		});
	},
};

module.exports = dataMapper;
