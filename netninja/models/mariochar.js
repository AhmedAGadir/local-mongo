const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema and Model

const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

// model named "mariochar"
// creates collection called "mariochar"
const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;
