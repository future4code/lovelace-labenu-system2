import express , { Request, Response } from "express"
import { connection } from "../data/connection"

export const addEstudante = ( async (req: Request, res: Response) => {
    try{
        await connection.raw(`
        INSERT INTO Estudante(nome,email,data_nasc,turma_id)
        VALUES(
        "${req.body.nome}",
        "${req.body.email}",
        "${req.body.data_nasc}",
        "${req.body.turma_id}"
        )`)
        
        res.send("Sucesso!")

    } catch (error) {
        console.log(error)
        res.status(500).send("Houve um erro")
    }
})
