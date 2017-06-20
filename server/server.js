const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Word = require('./models/word');
const User = require('./models/user');
const routes = require('./routes');
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

mongoose.connect(DATABASE_URL);
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// app.use('/*', express.static('/dist/'));
app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(PORT, () => {
	console.log(`Started up at port ${PORT}`);
});

module.exports = app;