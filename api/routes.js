const express = require('express');
const articleRoutes = express.Router();
// ------- CRUD OPERATIONS
// create article
articleRoutes.post('/create', (request, response) => {

})

// read articles
articleRoutes.get('/all', (request, response) => {
    const articles = {
        "name": "David",
        "class": "ss2b"
    }


    try {
        response.header(200, 'Access-Control-Allow-Origin', '*');
        response.json(articles);
    } catch (error) {
        console.log(error);
    }
})

// read article

// update article

// delete article

// export the routes module
module.exports = articleRoutes;