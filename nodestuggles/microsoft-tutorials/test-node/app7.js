const express = require('express');
const app = express();


app.use(express.static('/public' + '/public'));
app.use(express.static('/media' + '/media'));
