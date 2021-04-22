// import express 
const express = require('express');
const app = express();
const cors = require('cors');
// port
const PORT = 4040 || process.env.PORT;
// routes 
const articleRoutes = require('./api/routes');

// cors 
app.use(cors());

// use the article routes
app.use('/articles', articleRoutes);



// start server
app.listen(PORT, () => console.log(`personal Blog is running on port $PORT`));