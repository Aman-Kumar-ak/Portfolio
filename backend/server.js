require('dotenv').config();
const express = require('express');
const app = require('./app');

const server = express();
server.use('/api', app);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));


