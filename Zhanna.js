const express = require('express');
const app = express();

const mysql = require('mysql');

const db = mysql.createConnection({
database: "MONSTERCLUB",
host: "localhost",
user: "root",
password: "root"
}):

db.connect(function (error) {
if (error) {
return console.log("error");
} else {
console.log("Connected!");
}
});

app.get('/monsters', (request, response)=> {
const id = request.params.id;

db.query('SELECT * FROM monsters', null, (error, result) => {
if (error) {
response.send(error);
// TODO change respoce status
}

responce.send(result);
});
});


app.get('/monsters/:id', (request, response) => {
const id = request.params.id;

db.query('SELECT * FROM monsters WHERE id = ?', id, (error, result) => {
if (error) throw error;

response.send(result);
});
});

app.post('/customers', (request, response) => {
const data = [];

request.on('data', (chunk) => {
data.push(chunk);
});

request.on('end', () => {
const body = JSON.parse(Buffer.concat(data).toString());

db.query('INSERT INTO monsters SET ?', body, (error, result) => {
if (error) throw error;

response.status(201).send(`New monster added: ${result.insertid}`);
});
});
});

app.delete('/monsters/:id', (request, response) => {
const id = request.params.id;

db.query('DELETE FROM monsters WHERE id= ?', id, (error, result) => {
if (error) throw error;

response.send('Monster deleted.');
});
});

app.put('/users/:id', (request, response) => {
const id = request.params.id;

db.query('UPDATE monsters SET ? WHERE id = ?', [request.body, id], (error, result) => {
if (error) throw error;

response.send('Monster updated successfully.');
});
});

app.listen(3530, () => {
console.log("listen on port:3550")
});