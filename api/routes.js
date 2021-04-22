const express = require('express');
const articleRoutes = express.Router();

// ------- CRUD OPERATIONS
// create article
articleRoutes.post('/create', (request, response) => {

})


// read articles
articleRoutes.get('/all', (request, response) => {
    const articles = [{
        "_id": "art-001",
        "title": "my programming journey",
        "content": "lorem ipsum My name is David. I am a MEAN stack javaScript developer from south-eastern Nigeria, with a passion for problem-solving, automation, and developing software that directly changes how humans perceive phenomena. I am conversant with and proficient in JavaScript, TypeScript, Angular, Node.js, and the technologies that make them stand out.",
        "authors": ["Ike-Njoku David", "Chukwudi Ibom"],
        "media": [],
        "interractions": {
            "likes": 7889,
            "dislikes": 97,
            "comments": [

            ]
        },
        "_id": "art-002",
        "title": "Article 3",
        "content": "lorem ipsum My name is David. I am a MEAN stack javaScript developer from south-eastern Nigeria, with a passion for problem-solving, automation, and developing software that directly changes how humans perceive phenomena. I am conversant with and proficient in JavaScript, TypeScript, Angular, Node.js, and the technologies that make them stand out.",
        "authors": ["Ike-Njoku David", "Chukwudi Ibom"],
        "media": [],
        "interractions": {
            "likes": 7889,
            "dislikes": 97,
            "comments": [

            ]
        },
        "_id": "art-003",
        "title": "This is another one",
        "content": "lorem ipsum My name is David. I am a MEAN stack javaScript developer from south-eastern Nigeria, with a passion for problem-solving, automation, and developing software that directly changes how humans perceive phenomena. I am conversant with and proficient in JavaScript, TypeScript, Angular, Node.js, and the technologies that make them stand out.",
        "authors": ["Ike-Njoku David", "Chukwudi Ibom"],
        "media": [],
        "interractions": {
            "likes": 7889,
            "dislikes": 97,
            "comments": [

            ]
        },
        "_id": "art-004",
        "title": "This is article four",
        "content": "lorem ipsum My name is David. I am a MEAN stack javaScript developer from south-eastern Nigeria, with a passion for problem-solving, automation, and developing software that directly changes how humans perceive phenomena. I am conversant with and proficient in JavaScript, TypeScript, Angular, Node.js, and the technologies that make them stand out.",
        "authors": ["Ike-Njoku David", "Chukwudi Ibom"],
        "media": [],
        "interractions": {
            "likes": 7889,
            "dislikes": 97,
            "comments": [

            ]
        },


    }]


    response.json(articles);
});

// read article

// update article

// delete article

// export the routes module
module.exports = articleRoutes;