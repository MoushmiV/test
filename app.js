const express = require('express');
const path = require('path');
const Route = require('./routes/UnifiedRoutes');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({extended:false}));
app.use('/grid', Route);
app.use('/form', Route);
app.use('/mail', Route);



app.listen(9000, () =>  {  
    console.log('Server is running..',8000);  
});
