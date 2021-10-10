import { Request, Response} from "express";
import getEstudante from "../entidades/Estudante/getEstudante";
import changeModulo from "../entidades/Turma/changeModulo";

export const chgModuloTurma = async (req: Request, res: Response): Promise<voide> => {
    try {
        const id = Number(req.params.id);
        const modulo = Number(req.query.modulo);
        if(isNaN(id) || isNaN(modulo)) {
            res.statusCode = 422
            throw "Id_estudante ou id_turma inválido"
        }
        
        const aluno = await getEstudante(id)
        if(aluno.length < 1 ) {
            res.statusCode = 404
            throw "id_Estudante inexistente"
        }
        if(!((0 <= modulo) && (modulo <= 7))){
            res.statusCode = 404;
            throw "'modulo' tem que estar entre 0 e 7!"
        }
        if(! await changeModulo(id, modulo)) {
            res.statusCode = 500;
            throw "Erro interno!"
        }
        res.status(200).send("Módulo alterado com sucesso!")

    }
    catch (error: any) {
        if(typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message)
            res.status(500).send("Erro!")
        }
    }
}