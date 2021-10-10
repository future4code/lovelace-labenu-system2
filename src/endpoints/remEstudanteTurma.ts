import { Request, Response } from "express";
import getEstudante from "../entidades/Estudante/getEstudante";
import updateEstudante from "../entidades/Estudante/updateEstudante";

export const remEstudanteTurma = async (req: Request, res: Response): Promise<void> => {
    try {
        const id_estudante = Number(req.params.id);
        if(isNaN(id_estudante)){
            res.statusCode = 422;
            throw "'id_estudante' inválido";
        }
        
        let estudante = await getEstudante(id_estudante);
        if(estudante.length<1){
            res.statusCode = 404;
            throw "'id_estudante' não existe";
        }
        estudante[0].turma_id = null;
        
        if(! await updateEstudante(id_estudante, estudante[0])){
            res.statusCode = 500;
            throw "Erro interno!"
        }
        res.status(201).send("Remoção do Estudante na turma com sucesso!");
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