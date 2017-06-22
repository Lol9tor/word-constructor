'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Word = new Schema({
	text: {
		type: String,
		unique: true,
		required: '"text" field must have chars',
		lowercase: true,
	},
	/*author: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: 'You must supply an author!'
	},*/
	created_at: {
		type: Date,
		default: Date.now
	},
	__v: { type: Number, select: false}
});

module.exports = mongoose.model('Word', Word);