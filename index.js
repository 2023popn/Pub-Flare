const express = require('express');
const app = express();

const port = process.env.PORT;

const {readFile} = require('fs').promises;

app.get("/", async (request, response) => {

    response.send(await readFile('./home.html', 'utf-8'))

})

app.listen(port || 3000, () => console.log("App available on http://localhost:3000"))