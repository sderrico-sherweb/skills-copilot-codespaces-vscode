// create a webserver
const express = require('express');
const app = express();
const port = 3000;

// require the comments module
const comments = require('./comments');

// get all comments
app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});

// get a comment by id
app.get('/comments/:id', (req, res) => {
    res.json(comments.getComment(req.params.id));
});

// start the webserver
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});