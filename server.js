const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const pokemonController = require("./controllers/pokemon.js");

const db = mongoose.connection;
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/basiccrud';

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/pokedex', pokemonController);

app.listen(PORT, ()=>{
    console.log('listening');
});