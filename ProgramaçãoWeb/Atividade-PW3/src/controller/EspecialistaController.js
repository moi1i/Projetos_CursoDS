const express = require('express')

const especialista = require('../model/Especialista')

const router = express.Router()

//POST
router.post('/especialista/registerEspecialista', (req, res) => {
  let { nome_especialista } = req.body

  especialista.create({ nome_especialista }).then(() => {
    res.send('Registro do especialista efetuado com sucesso')
  })
})

//GET
router.get('/especialista/listEspecialista', (req, res) => {
  especialista.findAll().then((especialista) => {
    res.send(especialista)
  })
})

//GET2
router.get('/especialista/listEspecialista/:id', (req, res) => {
  let { id } = req.params

  especialista.findByPk(id).then((especialista) => {
    res.send(especialista)
  })
})

//PUT
router.put('/especialista/alterEspecialista', (req, res) => {
  let { id, nome_especialista } = req.body

  especialista.update({ nome_especialista }, { where: { id } }).then(() => {
    res.send('Dados do especialista alterados com sucesso')
  })
})

//DELETE
router.delete('/especialista/deleteEspecialista', (req, res) => {
  let { id } = req.body

  especialista.destroy({ where: { id } }).then(() => {
    res.send('Dados do especialista deletados com sucesso')
  })
})

module.exports = router
