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

app.use(bodyParser.json());

app.use('/*', express.static('/dist/'));

app.listen(PORT, () => {
	console.log(`Started up at port ${PORT}`);
});

module.exports = app;