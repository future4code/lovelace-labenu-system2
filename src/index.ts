import express, { Express,Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";


const app: Express = express();
app.use(express.json());
app.use(cors());

//Endpoints
//endpoint de teste
app.get("/",async (req,res)=>{
    const result = await connection.raw("SHOW TABLES")
    console.log(result);
    res.send(result)
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});