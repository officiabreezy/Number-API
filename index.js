const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const classifyRoutes = require('./routes/classify');

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());

app.use("/api/v1", classifyRoutes);

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});

module.exports = app;