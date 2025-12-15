const mongoose = require('mongoose');

const puzzleSchema = new mongoose.Schema({
    serialNumber: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    twoYearsWarranty: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    result: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Puzzle = mongoose.model('Puzzle', puzzleSchema);

module.exports = Puzzle;