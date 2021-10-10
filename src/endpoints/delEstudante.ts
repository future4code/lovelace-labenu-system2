import { Request, Response } from "express";
import { connection } from "../data/connection";
import getEstudante from "../entidades/Estudante/getEstudante";
import updateEstudante from "../entidades/Estudante/updateEstudante";

export const delEstudante = async (req: Request, res: Response): Promise<void> => {
    try {
        const id_estudante = Number(req.params.id);
        if(isNaN(id_estudante)){
            res.statusCode = 422;
            throw "'id_estudante' inválido";
        }
        
        let estudante = await getEstudante(id_estudante);
        if(estudante.length < 1){
            res.statusCode = 404;
            throw "'id_estudante' não existe";
        }
        await connection("Estudante")
            .delete()
            .where("id", id_estudante)
        
        res.status(201).send("Estudante deletado com sucesso!");
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