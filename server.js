const express = require("express")
const {z, ZodError} = require("zod")
const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient();

const app = express()

app.use(express.json())

app.get("/tarefas", function(req, res){
    res.status(200).json(["eu viajo nela"])
})

app.post("/tarefas", function(req, res) {
    try{
        
        const schema = z.object({
            nome: z.string(),
            email: z.string().email(),
            matricula:z.string()
        })

        const {nome, email, matricula} = schema.parse(req.body)
        console.log("nome", nome);
        console.log("email", email);
        console.log("matricula", matricula);

        res.status(200).send()
    }catch(err){
       if(err instanceof ZodError) {
        res.status(422).send(err.message)
        return
       }

       res.status(500).send(err.mesage)
    }
})

app.put("/tarefas/:id/concluidas", function(req, res){

})

app.get("/tarefas/concluidas", function(req, res) {

})

app.listen(3333, function(){
    console.log(`Http running server`);
})