import { config } from "dotenv"
import app from "./app"
import { addEstudante } from "./endpoints/addEstudante"
import { addTurma } from "./endpoints/addTurma"
import { addDocente} from "./endpoints/addDocente"
import { addDocenteNaTurma } from "./endpoints/addDocenteNaTurma"
import { addEstudanteNaTurma  } from "./endpoints/addEstudanteNaTurma"
import { getIdadeEstudante } from "./endpoints/getIdadeEstudante"

config()

app.post('/estudante', addEstudante)
app.post("/turma", addTurma);
app.post('/add/docente', addDocente)
app.put("/docente/:id_docente", addDocenteNaTurma)
app.put('/estudante/:id_estudante', addEstudanteNaTurma)
app.get('/estudante/idade/:id', getIdadeEstudante)
