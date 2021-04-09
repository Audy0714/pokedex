require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT || 5478;

const router = require('./app/router');

app.set('view engine', 'ejs');
app.set('views','app/views');

app.use(express.static('public'));

app.locals.pageTitle = `PokeDex`;
app.locals.pageDescription = `Attrapez les tous !`;


app.use(router);

// ici, on pourrait aussi écrire notre 404

app.listen(PORT, () => { 
   console.info(`Server listening on port ${PORT}`)
});





