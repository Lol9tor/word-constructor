'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Word = new Schema({
	text: {
		type: String,
		unique: true,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Word', Word);