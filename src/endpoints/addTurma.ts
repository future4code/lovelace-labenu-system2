import { Request, Response } from "express";
import { connection } from "../data/connection";
import { turmaInfo } from "../data/types";
import { validDate } from "../functions/validDate";

export const addTurma = async (req: Request, res: Response): Promise<void> => {
    try {
        let {nome, data_inicio, data_final} = req.body;

        if(!nome || !data_inicio || !data_final){
            res.statusCode = 422;
            throw "'nome', 'data_inicio' e 'data_final' são obrigatórios!"
        }
        let modulo = Number(req.body.modulo);
        if(isNaN(modulo)){
            modulo = 0
        }
        if(!((0 <= modulo) && (modulo <= 7))){
            res.statusCode = 422;
            throw "'modulo' tem que estar entre 0 e 7!"
        }
        data_inicio = validDate(data_inicio);
        data_final = validDate(data_final);
        
        const newTurma: turmaInfo = {nome, 
                                     data_inicio,
                                     data_final,
                                     modulo
                                    };
        await connection('Turma').insert(newTurma);
        res.status(201).send('Turma incluída');
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