import { config } from "dotenv"
import app from "./app"
import { addEstudante } from "./endpoints/addEstudante"
import { addTurma } from "./endpoints/addTurma"
import { addDocente} from "./endpoints/addDocente"
import { addDocenteNaTurma } from "./endpoints/addDocenteNaTurma"


config()

// app.post('/users/signup', addEstudante)
app.post("/turma", addTurma);

app.post('/add/docente', addDocente)
app.put("/docente/:id_docente", addDocenteNaTurma)

