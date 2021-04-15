const db = require('./database');

const dataMapper = {
	getAllPokemons: (callback) => {
		const query = {
			text: `SELECT * FROM pokemon;`,
		};

		db.query(query, (error, result) => {
			//console.debug('dataMapper getAllPokemons', query, error, result.rowCount);
			callback(error, result);
		});
	},

	getOnePokemon: (id, callback) => {
		const query = {
			text: `SELECT pokemon.*, "type".id AS type_id, "type".name, "type".color 
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

	getAllTypes: (callback) => {
		const query = {
			text: `SELECT * FROM type`,
		};

		db.query(query, (error, result) => {
			callback(error, result);
		});
	},

	getOneType: (id, callback) => {
		const query = {
			text: `SELECT pokemon.*
					FROM pokemon
					JOIN pokemon_type ON pokemon_type.pokemon_numero = pokemon.numero
					JOIN "type" ON "type".id = pokemon_type.type_id
					WHERE "type".id = $1`,
			values: [id],
		};

		db.query(query, (error, result) => {
			callback(error, result);
		});
	},
};

module.exports = dataMapper;
