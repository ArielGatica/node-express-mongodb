const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model('Cars', new Schema ({
    mark: { type: String, required: true },
    model: { type: String, required: true },
    age: { type: Number },
    price: { type: Number }
},{ timestamps: true }));