import { connection } from "../../data/connection";
import { docente } from "../../data/types";


export default async function updateDocente(id: number, docente: docente): Promise<any> {
    await connection("Docente")
        .update("nome", `${docente.nome}`)
        .update("email", `${docente.email}`)
        .update("data_nasc", docente.data_nasc)
        .update("turma_id", docente.turma_id)
        .where("id", id)
    return true
}

