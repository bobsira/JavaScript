const express = require('express');
const app = express();
const Wiki = require('./wiki');

app.use('/wiki',wiki);
