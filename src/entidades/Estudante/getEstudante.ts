import { connection } from "../../data/connection";

export default async function getEstudante(id: number): Promise<any> {
    if (isNaN(id)){
        return null
    };
    const result = await connection('Estudante').where('id', id);
    return result;
}
