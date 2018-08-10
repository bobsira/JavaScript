const express = require('express');
const app = express();

//set directory to contain the template ('views')
app.set('views', path.join(__dirname, 'views'));

//set view engine to use in this case 'some_template_engine_name'
app.set('view_engine', 'some_template_engine_name');

app.get('/', (req, res) => {
  res.render('index', { title : 'About dogs', message: 'Dogs rocks!'});
});
