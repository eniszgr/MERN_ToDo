//modal for text data
const mongo = require('mongoose');
const { Schema } = mongo;

const textSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  importance:{
    type: Number,
    default: 1, // Default importance level,
    min: 1, // Minimum importance level
    max: 5, // Maximum importance level
  }
});

const Text = mongo.model('Text', textSchema);
module.exports = Text;

