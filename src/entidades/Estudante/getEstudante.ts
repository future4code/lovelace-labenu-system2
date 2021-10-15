import { connection } from "../../data/connection";

export default async function getEstudante(id: number): Promise<any> {
    if (isNaN(id)){
        const result = await connection('Estudante');
        return result;
    } else {
        const result = await connection('Estudante').where('id', id);
        return result;
    };
    
}
