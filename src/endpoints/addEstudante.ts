import { Request, Response } from "express"
import { connection } from "../data/connection"
import { estudante } from "../data/types";
import getEstudante from "../entidades/Estudante/getEstudante";

export const addEstudante = ( async (req: Request, res: Response) => {
    try{
        const email = req.body.email;
        let turma:number | null = Number(req.body.turma);
        if(isNaN(turma)){
            turma = null
        }
        
        const estudantes: estudante[] = await getEstudante(NaN);
        const existeEmail = estudantes.filter((est)=>{
            return est.email === email
        })
        if (existeEmail.length > 0) {
            res.statusCode = 404;
            throw "Email existente";
        }
        await connection.raw(`
        INSERT INTO Estudante(nome,email,data_nasc,turma_id)
        VALUES(
        "${req.body.nome}",
        "${req.body.email}",
        "${req.body.data_nasc}",
        ${turma}
        )`)
        
        res.send("Sucesso!") 

    } catch (error: any) {
        if(typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
})
