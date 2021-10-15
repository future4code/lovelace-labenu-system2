import { connection } from "../data/connection"
import { Request, Response } from "express";
import getDocente from "../entidades/Docente/getDocente";
import { docente } from "../data/types";


export const addDocente = ( async (req:Request,res:Response) => {
    try{
        const email = req.body.email;
        let turma:number | null = Number(req.body.turma);
        if(isNaN(turma)){
            turma = null
        }
        const docentes: docente[] = await getDocente(NaN);
        const existeEmail = docentes.filter((doc)=>{
            return doc.email === email
        })
        if (existeEmail.length > 0) {
            res.statusCode = 404;
            throw "Email existente";
        }
    await connection.raw(`INSERT INTO Docente(nome,email,data_nasc,turma_id)

    VALUES ("${req.body.nome}",
        "${req.body.email}",
        "${req.body.data_nasc}",
        ${turma})
    `)
    res.send("Docente Adicionado com Sucesso!")

    }catch(error: any){
        if(typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
})