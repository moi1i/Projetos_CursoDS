const Sequelize = require('sequelize')
const connection = require('../database/Database')
const Especialista = require('./Especialista')

const Medico = connection.define('tbl_medico', {
  nome_medico: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  email_medico: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  telefone_medico: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
  celular_medico: {
    type: Sequelize.STRING(11),
    allowNull: false,
  },
})

Especialista.hasMany(Medico)

Medico.belongsTo(Especialista)

//Medico.sync({force:true});

module.exports = Medico
