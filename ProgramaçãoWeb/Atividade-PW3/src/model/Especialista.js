const Sequelize = require('sequelize')

const connection = require('../database/Database')

const Especialista = connection.define('tbl_especialista', {
  nome_especialista: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
})

//Especialista.sync({force:true});

module.exports = Especialista
