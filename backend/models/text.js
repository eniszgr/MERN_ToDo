//modal for text data
const mongo = require('mongoose');
const { Schema } = mongo;

const textSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

const Text = mongo.model('Text', textSchema);
module.exports = Text;

