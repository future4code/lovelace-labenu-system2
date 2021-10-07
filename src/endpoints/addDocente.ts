import { connection } from "../data/connection"
import express, { Request, Response } from "express";


export const addDocente = ( async (req:Request,res:Response) => {
    try{

    await connection.raw(`INSERT INTO Docente(nome,email,data_nasc,turma_id)

    VALUES ("${req.body.nome}",
        "${req.body.email}",
        "${req.body.data_nasc}",
        "${req.body.turma_id}")
    `)
    res.send("Docente Adicionado com Sucesso!")

    }catch(error){
        console.log(error)
        res.status(500).send("Error")
    }
})