const express = require('express');
const classifyNumber = require('../utils/mathUtils');

const router = express.Router();

router.get('/classify-number', async (req, res) => {
const { number } = req.query;
   
    if(!number || isNaN(number) || !Number.isInteger(Number(number))) {
        return res.status(400).json({ number, error: true });
    }

    const num = parseInt(number);
    const result = await classifyNumber(num);

    res.json({ number, result });   
});

module.exports = router;