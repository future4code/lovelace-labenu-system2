
export type turmaInfo = {
    nome: string
    data_inicio: Date
    data_final: Date
    modulo: number
}

export type estudante = {
    nome: string
    email: string
    data_nasc: string
    turma_id: number
}

export type docente = {
    nome: string
    email: string
    data_nasc: string
    turma_id: number
}