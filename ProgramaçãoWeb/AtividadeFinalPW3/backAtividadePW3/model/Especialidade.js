//Importando o módulo do sequelize
const Sequelize = require('sequelize');

//Importando a conexão com o banco de dados
const connection = require('../database/database');

const Especialidade = connection.define(
    'tbl_especialidade',
    {
        nome_especialidade:{
           type: Sequelize.STRING,
           allowNull: false
        }
    }
);

//Criando a tabela no banco de dados
//Especialidade.sync({force:true});

//Exportando
module.exports = Especialidade;