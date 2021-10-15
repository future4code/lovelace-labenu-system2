import { connection } from '../data/connection'
import { Request, Response } from 'express'
import getTurma from '../entidades/Turma/getTurma'
import getEstudante from '../entidades/Estudante/getEstudante'

export const addEstudanteNaTurma = async (req: Request, res: Response): Promise<void> => {
    try{
    
        const id_estudante = Number(req.params.id_estudante)
        const id_turma = Number(req.query.id_turma)

        if(isNaN(id_estudante) || isNaN(id_turma)) {
            res.statusCode = 422
            throw "Id_estudante ou id_turma inválido"
        }
        
        const aluno = await getEstudante(id_estudante)
        if(aluno.length < 1 ) {
            res.statusCode = 404
            throw "Não existe id_Estudante"
        }

        const turma = await getTurma(id_turma)
        if(turma.length < 1) {
            res.statusCode = 404
            throw "Não existe id_turma"
        }
        await connection('Estudante').update({"turma_id":id_turma}).where('id', id_estudante)
        res.status(201).send("Estudante adicionado na turma")
        
    }  catch (error: any) {
        if(typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Erro!")
        }
    }
}


