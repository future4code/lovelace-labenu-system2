import { connection } from "../../data/connection";
import { estudante } from "../../data/types";


export default async function updateEstudante(id: number, estudante: estudante): Promise<any> {
    await connection("Estudante")
        .update("nome", `${estudante.nome}`)
        .update("email", `${estudante.email}`)
        .update("data_nasc",estudante.data_nasc)
        .update("turma_id", estudante.turma_id)
        .where("id", id)
    return true
}