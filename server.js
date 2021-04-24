// import express 
var express = require('express')
var cors = require('cors')
var app = express()
const articleRoutes = require('./api/routes');
const PORT = 4040 || process.env.PORT;

// app.use(cors());
// use the article routes
app.use('/articles', articleRoutes);



// start server
app.listen(PORT, () => console.log(`personal Blog is running on port ${PORT}`));