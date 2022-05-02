const express = require('express')

const medico = require('../model/Medico')

const router = express.Router()

//POST
router.post('/medico/registerMedico', (req, res) => {
  let {
    nome_medico,
    email_medico,
    telefone_medico,
    celular_medico,
    tblEspecialistumId,
  } = req.body

  medico
    .create({
      nome_medico,
      email_medico,
      telefone_medico,
      celular_medico,
      tblEspecialistumId,
    })
    .then(() => {
      res.send('Registro do médico efetuado com sucesso!!')
    })
})

//GET
router.get('/medico/listMedico', (req, res) => {
  medico.findAll().then((medico) => {
    res.send(medico)
  })
})

//GET2
router.get('/medico/listMedicoId/:id', (req, res) => {
  let { id } = req.params

  medico.findByPk(id).then((medico) => {
    res.send(medico)
  })
})

//PUT
router.put('/medico/alterMedico', (req, res) => {
  let {
    id,
    nome_medico,
    email_medico,
    telefone_medico,
    celular_medico,
    tblEspecialistumId,
  } = req.body

  medico
    .update(
      {
        nome_medico,
        email_medico,
        telefone_medico,
        celular_medico,
        tblEspecialistumId,
      },
      { where: { id } },
    )
    .then(() => {
      res.send('Dados do médico alterados com sucesso')
    })
})

//DELETE
router.delete('/medico/deleteMedico', (req, res) => {
  let { id } = req.body

  medico.destroy({ where: { id } }).then(() => {
    res.send('Dados do médico deletados com sucesso')
  })
})


module.exports = router
