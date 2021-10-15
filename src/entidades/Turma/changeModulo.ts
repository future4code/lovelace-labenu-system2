import { connection } from "../../data/connection";
import getTurma from "./getTurma";

export default async function changeModulo(id: number, modulo: number): Promise<any> {
    if (isNaN(id)){
        return null
    };
    if(!((0 <= modulo) && (modulo <= 7))){
        return null
    }

    const turma = await getTurma(id)
        if(turma.length < 1) {
            
            return null
        }
    await connection('Turma').
                    update("modulo", modulo).
                    where('id', id);
    return true
}