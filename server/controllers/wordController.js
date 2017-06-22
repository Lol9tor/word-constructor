const mongoose = require('mongoose'),
	Word = mongoose.model('Word');

module.exports = {
	getAll: function (req, res) {
		Word.find({}, function(err, task) {
			if (err) res.send(err);
			res.json(task);
		});
	},
	getOne: function (req, res) {
		Word.findById(req.params.wordId, function(err, word) {
			if (err) res.send(err);
			const arrByWord = word.text.split('');
			arrByWord.sort(function() {
				return .5 - Math.random();
			});
			word.set('text', arrByWord.join(''));
			res.json(word);
		});
	},
	create: function (req, res) {
		if (!req.body.text){
			res.status(403);
			res.send({error: 'Field "text" is required'});
			return false;
		}
		const obj = {text:req.body.text};
		const word = new Word(obj);
		word.save(function(err, task) {
			if (err) res.send(err);
			res.json(task);
		});
	},
	update: function (req, res) {
		Word.findOneAndUpdate(req.params.wordId, req.body, {new: true}, function(err, task) {
			if (err) res.send(err);
			res.json(task);
		});
	},
	delete: function (req, res) {
		Word.remove({
			_id: req.params.wordId
		}, function(err, task) {
			if (err) res.send(err);
			res.json({ message: 'Word successfully deleted' });
		});
	}
};

