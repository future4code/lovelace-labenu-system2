import { config } from "dotenv"
import app from "./app"
import { addEstudante } from "./endpoints/addEstudante"
import { addTurma } from "./endpoints/addTurma"


config()

// app.post('/users/signup', addEstudante)
app.post("/turma", addTurma);

//Endpoint de teste
// app.get("/", async (req,res)=>{
//     const result = await connection.raw("SHOW TABLES")
//     console.log(result);
//     res.send("o endpoint está funcionando")
// })

// const server = app.listen(process.env.PORT || 3003, () => {
//     if (server) {
//        const address = server.address() as AddressInfo;
//        console.log(`Server is running in http://localhost: ${address.port}`);
//     } else {
//        console.error(`Failure upon starting server.`);
//     }
// });