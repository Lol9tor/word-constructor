module.exports = function(app) {
	const wordController = require('../controllers/wordController'),
		userController = require('../controllers/userController');

	app.route('/words')
		.get(wordController.getAll)
		.post(wordController.create);

	app.route('/words/:wordId')
		.get(wordController.getOne)
		.put(wordController.update)
		.delete(wordController.delete);
};