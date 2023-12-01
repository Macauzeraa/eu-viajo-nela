const express = require("express")

const app = express()

app.use(express.json())

app.get("/", function(req, res){
    res.status(200).json({
        nome: "Clécio",
        version: "1.0.2",
        curso: "Informática",
    })
})

const port = process.env.port || 3333

app.listen(port, function() {
    console.log(`Http running server`);
})