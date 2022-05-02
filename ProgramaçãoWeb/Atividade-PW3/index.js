// Importando o pacote express
const express = require('express');;

//Instanciando executavel do express
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Importando os models
const Medico = require('./src/model/Medico');
const Especialista = require('./src/model/Especialista');

//Importando as rotas.js
const medicoController = require('./src/controller/MedicoController');
app.use('/', medicoController);

const EspecialistaController = require('./src/controller/EspecialistaController');
app.use('/', EspecialistaController);

app.listen(3000, ()=>{
    console.log('Servidor Rodando na Porta 3000 - URL: http://Localhost3000');
}); 