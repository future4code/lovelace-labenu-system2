import { connection } from "../../data/connection";

export default async function getTurma(id: number): Promise<any> {
    if (isNaN(id)){
        return null
    };
    const result = await connection('Turma').where('id', id);
    return result;
}