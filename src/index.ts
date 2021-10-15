import { config } from "dotenv"
import app from "./app"
import { addEstudante } from "./endpoints/addEstudante"
import { addTurma } from "./endpoints/addTurma"
import { addDocente} from "./endpoints/addDocente"
import { addDocenteNaTurma } from "./endpoints/addDocenteNaTurma"
import { addEstudanteNaTurma  } from "./endpoints/addEstudanteNaTurma"
import { getIdadeEstudante } from "./endpoints/getIdadeEstudante"
import { chgModuloTurma } from "./endpoints/chgModuloTurma"
import { remDocenteTurma } from "./endpoints/remDocenteTurma"
import { remEstudanteTurma } from "./endpoints/remEstudanteTurma"
import { getMesmoPassatempo } from "./endpoints/getMesmoPassatempo"
import { delEstudante } from "./endpoints/delEstudante"

config()
app.get('/estudante/passatempo', getMesmoPassatempo)
app.post('/estudante', addEstudante)
app.delete('/estudante/:id', delEstudante)
app.post("/turma", addTurma);
app.post('/add/docente', addDocente)
app.put("/docente/:id_docente", addDocenteNaTurma)
app.put('/estudante/:id_estudante', addEstudanteNaTurma)
app.get('/estudante/idade/:id', getIdadeEstudante)
app.put('/turma/modulo/:id', chgModuloTurma);
app.put('/docente/removerTurma/:id', remDocenteTurma)
app.put('/estudante/removerTurma/:id', remEstudanteTurma)

