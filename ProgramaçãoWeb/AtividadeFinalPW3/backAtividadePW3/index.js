//Importando o pacote express
const express = require("express");

//Instanciando o express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Conexão com o banco de dados
const connection = require("./database/database");

//Models
const Medico = require("./model/Medico");
const Especialidade = require("./model/Especialidade");

//ROTAS
const especialidadeController = require("./controller/EspecialidadeController");
app.use("/", especialidadeController);

const medicoController = require("./controller/MedicoController");
app.use("/", medicoController);

app.listen(3000, () => {
  console.log("Servidor Rodando na Porta 3000 - URL: http://Localhost3000");
});
