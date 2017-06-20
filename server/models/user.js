'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
	email: {
		type: String,
		Required: 'Email is required'
	},
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', User);