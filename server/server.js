const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const mongoose = require('mongoose');

 /*let {Todo} = require('./models/todo');
let {User} = require('./models/user');
let {authenticate} = require('./middleware/authenticate');*/
const {PORT, DATABASE_URL} = require('./config/config');

let app = express();
mongoose.Promise = global.Promise;

console.log(DATABASE_URL);

mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database: ${DATABASE_URL}`);
});
mongoose.connection.on('connected', () => {
	console.log(`Connected to database: ${DATABASE_URL}`);
});

// mongoose.connect(DATABASE_URL);
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(bodyParser.json());

app.get('/words', (req, res)=>{
	console.log(req.query);
	res.status(200);
	res.send(['something', 'reorganization']);
});

// app.use('/*', express.static('/dist/'));

app.listen(PORT, () => {
	console.log(`Started up at port ${PORT}`);
});

module.exports = app;