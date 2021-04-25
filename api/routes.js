const express = require('express');
const articleRoutes = express.Router();
// ------- CRUD OPERATIONS
// create article
articleRoutes.post('/create', (request, response) => {

})

articleRoutes.get('/', (request, response) => {
    response.send(`
        <div style ="background-colour:purple; height: 100vh; color:green;">
            <h1>Personal Blog Api is running!!!</h1>
            <hr>

            <div>Routes:</div>

            <ul>
                <li> get all articles : GET '/all' </li>
                <li> get particlular article: GET '/:id </li>
                <li> update field: PATCH '/:id  </li>
            </ul>
        </div>
    `);
});


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