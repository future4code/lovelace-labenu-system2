import express, { Express,Request, Response } from "express";
import cors from "cors";

const app: Express = express();
app.use(express.json());
app.use(cors());


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
    //    console.log(`Server is running in http://localhost: ${address.port}`);
        console.log('Servidor rodando')
    } else {
       console.error(`Failure upon starting server.`);
    }
});

export default app