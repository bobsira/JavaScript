const express = require('express');
const logger = require('logger');
const app = express();
app.use(logger('dev'));
