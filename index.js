
const express = require ('express');
const app = express();

const morgan = require('morgan');
const { propfind } = require('./routes');

//settings
app.set('port',process.env.PORT || 3000)
app.set('json spaces' , 2)

//middlewares

app.use(morgan('dev'));
app.use(express.urlencoded( { extended:false}
))
app.use(express.json());


// ROUTES
app.use(require('./routes/index'));
app.use ('/api/criptos',require('./routes/criptos'));


//Starting server
app.listen(3000, ()=>{
    console.log( `Server on port ${3000}`);
});