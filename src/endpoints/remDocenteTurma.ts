import { Request, Response } from "express";
import getDocente from "../entidades/Docente/getDocente";
import updateDocente from "../entidades/Docente/updateDocente";

export const remDocenteTurma = async (req: Request, res: Response): Promise<void> => {
    try {
        const id_docente = Number(req.params.id);
        if(isNaN(id_docente)){
            res.statusCode = 422;
            throw "'id_docente' inválido";
        }
        
        let docente = await getDocente(id_docente);
        if(docente.length<1){
            res.statusCode = 404;
            throw "'id_docente' não existe";
        }
        docente[0].turma_id = null;
        
        if(! await updateDocente(id_docente, docente[0])){
            res.statusCode = 500;
            throw "Erro interno!"
        }
        res.status(201).send("Remoção do Docente na turma com sucesso!");
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