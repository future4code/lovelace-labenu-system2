import { connection } from "../../data/connection";

export default async function getDocente(id: number): Promise<any> {
    if (isNaN(id)){
        return null
    };
    const result = await connection('Docente').where('id', id);
    return result;
}