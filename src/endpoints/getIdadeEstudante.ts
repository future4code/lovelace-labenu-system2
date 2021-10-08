import { Request, Response} from "express";
import { estudante } from "../data/types";
import getEstudante from "../entidades/Estudante/getEstudante";

export const getIdadeEstudante = async(req: Request,res: Response): Promise<void> =>{
    try {
        const id_estudante = Number(req.params.id);
        if(isNaN(id_estudante)) {
            res.statusCode = 422
            throw "Id_estudante inválido"
        }
        const aluno = await getEstudante(id_estudante);
        if(aluno.length < 1 ) {
            res.statusCode = 404
            throw "id_estudante não encontrado!"
        }
        
        const anoNasc = Number(aluno[0].data_nasc.getFullYear());
        const anoAtual = Number(new Date().getFullYear());
        const result = anoAtual - anoNasc;
        res.status(200).send(`${result}`)
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