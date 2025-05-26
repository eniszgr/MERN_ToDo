const express = require('express');
const router = express.Router();

const textController = require('../controllers/textController');

//using the controllers for text
router.get('/', textController.getAllTexts);
router.get('/:id', textController.getTextById);
router.post('/addText', textController.addText);
router.put('/:id/updateText', textController.updateText);
router.delete('/:id/deleteText', textController.deleteText);


module.exports = router;