const express = require('express');
const router = express.Router();
const Puzzle = require('../models/Puzzle');

// Compute and save
router.post('/puzzles/compute', async (req, res) => {
    try {
        const { serialNumber, brand, model, description, price } = req.body;
        
        // Business rule: Calculate total price with IVA (15%)
        const IVA = 0.15;
        const totalPrice = price + (price * IVA);
        
        const puzzle = new Puzzle({
            serialNumber,
            brand,
            model,
            description,
            price,
            totalPrice
        });
        
        await puzzle.save();
        res.status(201).json(puzzle);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Read all (for display only)
router.get('/puzzles', async (req, res) => {
    try {
        const puzzles = await Puzzle.find();
        res.json(puzzles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;