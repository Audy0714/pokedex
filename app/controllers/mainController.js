const dataMapper = require('../dataMapper');

const mainController = {
    // router /
    homePage: (request, response) => {

         response.render('header');

        //console.debug('mainController homePage');
         
        /*dataMapper.getAllPokemons((error, result) => {
            if (!!error) {
                response.status(500).send(error);
                //console.trace(error);
                return;
            }

            
        });*/

       

    }, 

    /*allPokemonPage: (request, response) => {
        dataMapper.getAllPokemons((error, result) => {
            if (!!error) {
                response.status(500).send(error);
                //console.trace(error);
                return;
            }
        //response.render('list', { pokemonList: result.rows });
        
    },

    /*pokemonPage: (request, response, next) => {

        //console.debug('mainController pokemonPage', request.params);

        const {id} = request.params;

        dataMapper.getOnePokemon(id, (error, result) => {

            if (!!error) {
                response.status(500).send(error);
                //console.trace(error);
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
                    name: type.name,
                    color: type.color
                })
            }
            response.render('header');
            //response.render('detail', pokemon);
        });
    },

    /*typePage: (request, response) => {

        dataMapper.getAllTypes((error, result) => {
            if (!!error) {
                response.status(500).send(error);
                //console.trace(error);
                return;
            }

             response.render('type', { typeList: result.rows });

        });
    },*/

    notFound: (request, response) => {
        console.debug('mainController notFound');

        response.status(404).render('error', { error: 404, message: 'Page not found' });
    }
};

module.exports = mainController;

