// Import Express
const express = require("express");

//membuat object express
const app = express();

/**
 * Membuat routing.
 * Method get menerima 2 params.
 * Param 1 adalah endpoint.
 * Param 2 callback.
 * Callback menerima object req dan res 
 */

app.get("/students", (req, res) => {
    res.send("Menampilkan semua students");
});

app.post("/students", (req, res) => {
    res.send("Menampilkan data students");
});

app.put("/students", (req, res) => {
    const {id} = req.params;
    res.send('Mengedit students ${id}');
});

app.delete("/students", (req, res) => {
    res.send('Mengedit students ${id}');
});

//Mendefinisikan port,
app.listen(3000);