const express = require('express');
const router = express.Router();
const wordController = require('../controllers/wordController'),
	userController = require('../controllers/userController');

router.get('/words', wordController.getAll);
router.get('/words/user', wordController.getAllForUser);
router.post('/words', wordController.create);

router.get('/words/:wordId', wordController.getOne);
router.put('/words/:wordId', wordController.update);
router.delete('/words/:wordId', wordController.delete);

module.exports = router;