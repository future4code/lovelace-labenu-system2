import { Request, Response } from "express";
import { connection } from "../data/connection";
import getDocente from "../entidades/Docente/getDocente";
import getTurma from "../entidades/Turma/getTurma";

export const addDocenteNaTurma = async (req: Request, res: Response): Promise<void> => {
    try {
        const id_docente = Number(req.params.id_docente);
        const id_turma = Number(req.query.id_turma);
        if(isNaN(id_docente) || isNaN(id_turma)){
            res.statusCode = 422;
            throw "'id_docente' ou 'id_turma' inválido";
        }
        
        const docente = await getDocente(id_docente);
        if(docente.length<1){
            res.statusCode = 404;
            throw "'id_docente' não existe";
        }

        const turma = await getTurma(id_turma);
        if(turma.length<1){
            res.statusCode = 404;
            throw "'id_turma' não existe";
        }
        await connection('Docente').update({"turma_id": id_turma}).where('id', id_docente);
        res.status(201).send("Docente ingressado na turma!");
    }
    catch (error: any) {
        if(typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
} 