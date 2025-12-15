const express = require('express');
const router = express.Router();
const Puzzle = require('../models/Puzzle');

// Compute and save
router.post('/puzzles/compute', async (req, res) => {
    try {
        const { serialNumber, brand, model, twoYearsWarranty, price } = req.body;
        
        // Business rule: Apply 10% discount if warranty and price > 100
        let result = price;
        if (twoYearsWarranty && price > 100) {
            result = price * 0.9;
        }
        
        const puzzle = new Puzzle({
            serialNumber,
            brand,
            model,
            twoYearsWarranty,
            price,
            result
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