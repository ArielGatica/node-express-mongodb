const express = require('express');
const morgan = require('morgan');
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes server
app.use('/api', require('./routes/server'));

//mongoDB call
const { mongoose } = require('./database')

//Port
app.set('port', process.env.PORT || 3000);

//Node runner
app.listen(app.get('port'), () => {
    console.log("Api-Backend running port:", app.get('port'));
});