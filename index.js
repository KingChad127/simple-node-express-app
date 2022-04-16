// Full Stack App

// server lives on a url
// when a user makes a request to this url
// the server will respond with some html

// import express
const express = require('express');
const { readFile } = require('fs/promises');

// create an instance of an express app
// gives us different urls and endpoints 
// that the user can navigate to
const app = express();
// define code for the server to handle requests

// [GET] request
app.get('/', async (request, response) => {
    // request: user's incoming data
    // response: server's outgoing data

    // using callbacks
    // readFile('./index.html', 'utf8', (err, htmlFile) => {
    //     if (err) {
    //         response.status(500).send("sorry, server error");
    //     } else {
    //         response.send(htmlFile);
    //     }
    // });

    // using async/await
    const file = await readFile('./index.html', 'utf-8');
    response.send(file);
});

// have the express server listen for requests
app.listen(process.env.PORT || 3000, () => console.log(`listening on http://localhost:3000`));

