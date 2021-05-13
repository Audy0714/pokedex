const db = require('./database');

const dataMapper = {
	getAllPokemons: (callback) => {
		const query = {
			text: `SELECT * FROM pokemon;`,
		};

		db.query(query, (error, result) => {
			callback(error, result);
		});
	},

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
			text: `SELECT 
            pokemon.*
            FROM pokemon
            JOIN pokemon_type ON pokemon_type.pokemon_numero = pokemon.numero
            JOIN "type" ON "type".id = pokemon_type.type_id
            WHERE pokemon_type.type_id = $1
    		`,
			values: [id],
			
		};

		db.query(query, (error, result) => {
			callback(error, result);
		});
	},

	searchOnePokemonByName: (name, callback) => {
		const query = {
			text: `SELECT *
                    FROM pokemon 
                    WHERE "name" = $1
					`,
			values: [name],
		};

		db.query(query, (error, result) => {
			callback(error, result);
		});
	},
};

module.exports = dataMapper;
