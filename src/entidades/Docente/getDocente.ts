import { connection } from "../../data/connection";

export default async function getDocente(id: number): Promise<any> {
    if (isNaN(id)){
        const result = await connection('Docente')
        return result;
    } else {
        const result = await connection('Docente').where('id', id);
        return result;
    };
    
    
}