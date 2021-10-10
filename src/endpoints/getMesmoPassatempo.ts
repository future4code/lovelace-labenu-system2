import { connection } from "../data/connection";

import { Request, Response} from "express";

export const getMesmoPassatempo = async(req: Request,res: Response): Promise<void> =>{
    try {
        const result = await connection.raw(
            `SELECT DISTINCT EP1.passatempo_id, EP1.estudante_id, P.nome AS Passatempo, E.nome AS Estudante
            FROM Estudo_Passatempo EP1
            RIGHT JOIN Estudo_Passatempo EP2 ON EP2.passatempo_id = EP1.passatempo_id
            JOIN Estudante E ON E.id = EP1.estudante_id
            JOIN Passatempo P ON P.id = EP1.passatempo_id
            WHERE EP1.estudante_id <> EP2.estudante_id`
        )
        res.status(200).send(result[0])
    }
    catch (error: any) {
        if(typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}