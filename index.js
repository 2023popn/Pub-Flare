const express = require('express');
const app = express();
const port = process.env.PORT;

/*
    Setting up PostgreSQL
*/
const { Client } = require('pg')
const client = new Client({
  user: 'flare_db_user',
  host: 'dpg-cjlnarlk5scs739sq9b0-a',
  database: 'flare_db',
  password: '99VOQIDJNnKBnJUTrxRfiLD13hqTPQWe',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/*
    Send html informaiton to client
*/
const {readFile} = require('fs').promises;

app.get("/", async (request, response) => {

    response.send(await readFile('./home.html', 'utf-8'))

})

app.listen(port || 3000, () => console.log("App available on http://localhost:3000"))