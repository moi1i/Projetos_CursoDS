const express = require("express");

const Especialidade = require("../model/Especialidade");

//Configurando o projeto
const router = express.Router();

router.post("/especialidade/cadastrarEspecialidade", (req, res) => {
  let { nome_especialidade } = req.body;

  Especialidade.create({ nome_especialidade }).then(() => {
    res.send("SUCESSO, dados da especialidade inseridos");
  });
});

//Rota de listagem geral das categorias (GET)
router.get("/especialidade/listarEspecialidade", (req, res) => {
  Especialidade.findAll().then((especialidades) => {
    res.send(especialidades);
  });
});

//Rota de listagem por ID das categorias (GET)
router.get("/especialidade/listarEspecialidade/:id", (req, res) => {
  let { id } = req.params;
  Especialidade.findByPk(id).then((especialidade) => {
    res.send(especialidade);
  });
});

//Rota de alteração das categorias (PUT)
router.put("/Especialidade/alterarEspecialidade", (req, res) => {
  let { id, nome_especialidade } = req.body;

  Especialidade.update({ nome_especialidade }, { where: { id } }).then(() => {
    res.send("SUCESSO, dados da especialidade alterados");
  });
});

//Rota para Exclusão das categorias (DELETE)
router.delete("/especialidade/excluirEspecialidade", (req, res) => {
  let { id } = req.body;

  Especialidade.destroy({ where: { id } }).then(() => {
    res.send("SUCESSO, especialidade excluida");
  });
});

module.exports = router;
