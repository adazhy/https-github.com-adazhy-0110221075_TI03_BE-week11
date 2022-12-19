// import express dan routing
const express = require("express");
const router = require("./routes/api.js");

// Membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());

// Menggunakan routing (router)
app.use(router);

// Mendefinisikan port.
app.listen(3000);

// //import express
// const express = require("express");

// // Membuat object router 
// const router= express.Router();

// /**
//  * Membuat routing 
//  * Method get menerima 2 params
//  * Param 1 adalah endpoint
//  * Param 2 callback
//  * Callback menerima object req dan res
//  */

// router.get("/", (req, res) => {
//     res.send("Hello Express");
// });

// //export router
// module.export = router;