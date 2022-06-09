//Importando o sequelize
const Sequelize = require("sequelize");

//Criando a instancia da conexão com o banco de dados (SEQUELIZE)
const connection = new Sequelize("trabalho_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = connection;
