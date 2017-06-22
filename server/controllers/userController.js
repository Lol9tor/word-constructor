const mongoose = require('mongoose'),
	User = mongoose.model('User');

module.exports = {
	getAll: function (req, res) {
		User.find({}, function(err, task) {
			if (err) res.send(err);
			res.json(task);
		});
	},
	getOne: function (req, res) {
		User.findById(req.params.wordId, function(err, task) {
			if (err) res.send(err);
			res.json(task);
		});
	},
	create: function (req, res) {
		const User = new User(req.body);
		User.save(function(err, task) {
			if (err) res.send(err);
			res.json(task);
		});
	},
	update: function (req, res) {
		User.findOneAndUpdate(req.params.wordId, req.body, {new: true}, function(err, task) {
			if (err) res.send(err);
			res.json(task);
		});
	},
	delete: function (req, res) {
		User.remove({
			_id: req.params.wordId
		}, function(err, task) {
			if (err) res.send(err);
			res.json({ message: 'User successfully deleted' });
		});
	}
};

