'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
	email: {
		type: String,
		required: 'Email is required',
		unique: true,
		lowercase: true,
		trim: true
	},
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	country: {
		type: String,
		required: 'Country is required'
	},
	sex: {
		type: String,
		required: 'Country is required'
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', User);