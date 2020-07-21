const express = require('express');

const app = express();
//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true }))
//Import Routes
const weatherRoute = require('./routes/weather');

//Use Views engine
app.set('view engine','ejs');

//Middleware route
app.use('/', weatherRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server at port ${PORT}'));