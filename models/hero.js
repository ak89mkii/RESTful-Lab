const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heroSchema = newSchema({
    name: {type: String, required: true},
    nation: {type: String, default: 'USA'},
    powers: {type: Number, default: 0},
}, {
    timestamp: true

})
