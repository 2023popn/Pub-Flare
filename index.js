const express = require('express');
const app = express();
const port = process.env.PORT;

/*
    Send html informaiton to client
*/
const {readFile} = require('fs').promises;

app.get("/", async (request, response) => {

    url_ending = request.url

    if(url_ending == "/"){
        response.send(await readFile('./login.html', 'utf-8'));
    } else {
        response.send(await readFile('./home.html', 'utf-8'));
    }
    

})

app.listen(port || 3000, () => console.log("App available on http://localhost:3000"))