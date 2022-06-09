const express = require("express");
const app = express();

const axios = require("axios").default;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/especialidade", (req, res) => {
  res.render("especialidade/index");
});

app.get("/medico", (req, res) => {
  //Chamando o axios
  const urlListarEspecialidade =
    "http://localhost:3000/especialidade/listarEspecialidade";

  //URL da rota e callback das respostas
  axios.get(urlListarEspecialidade).then((response) => {
    console.log("data: ", response.data);
    let especialidades = response.data;
    res.render("medico/index", { especialidades });
  });
});

app.get("/listarEspecialidades", (req, res) => {
  //Axios
  const urlListarEspecialidade =
    "http://localhost:3000/especialidade/listarEspecialidade";

  axios.get(urlListarEspecialidade).then((response) => {
    console.log(response.data);
    let especialidades = response.data;
    res.render("especialidade/listagemEspecialidade", { especialidades });
  });
});

//Recebendo a requisição da listagem
app.get("/editarEspecialidades/:id", (req, res) => {
  let { id } = req.params;

  const urlSelecionarEspecialidadeID = `http://localhost:3000/especialidade/listarEspecialidade/${id}`;

  axios.get(urlSelecionarEspecialidadeID).then((response) => {
    let especialidade = response.data;
    console.log(especialidade);
    res.render("especialidade/editarEspecialidade.ejs", { especialidade });
  });
});

//Recebendo a requisição do formulário
app.post("/editarEspecialidades", (req, res) => {
  console.log(req.body);

  const urlAlterarEspecialidade = `http://localhost:3000/Especialidade/alterarEspecialidade`;

  axios.put(urlAlterarEspecialidade, req.body).then((response) => {
    const urlListarEspecialidade =
      "http://localhost:3000/especialidade/listarEspecialidade";
    axios.get(urlListarEspecialidade).then((response) => {
      console.log(response.data);
      let especialidades = response.data;
      res.render("especialidade/listagemEspecialidade", { especialidades });
    });
  });
});

app.get("/excluirEspecialidade/:id", (req, res) => {
  let { id } = req.params;

  const urlExcluirEspecialidade = `http://localhost:3000/especialidade/excluirEspecialidade/${id}`;

  axios.delete(urlExcluirEspecialidade).then((response) => {
    const urlListarEspecialidade =
      "http://localhost:3000/especialidade/listarEspecialidade";

    axios.get(urlListarEspecialidade).then((response) => {
      let especialidades = response.data;
      res.render("especialidade/listagemEspecialidade", { especialidades });
    });
  });
});

app.get("/medico", (req, res) => {
  res.render("medico/index");
});

app.get("/listagemMedico", (req, res) => {
  const urlListarMedico = "http://localhost:3000/medico/listarMedico";

  axios.get(urlListarMedico).then((response) => {
    console.log(response.data);
    let medicos = response.data;
    res.render("medico/listagemMedico", { medicos });
  });
});

//Recebendo a requisição da listagem
app.get("/editarMedicos/:id", (req, res) => {
  let { id } = req.params;

  const urlSelecionarMedicoID = `http://localhost:3000/medico/listarMedicoCodigo/${id}`;

  axios.get(urlSelecionarMedicoID).then((response) => {
    console.log(response.data);
    let medico = response.data;
    res.render("medico/editarMedico", { medico });
  });
});

//Recebendo a requisição do formulário
app.post("/editarMedico", (req, res) => {
  console.log(req.body);

  const urlAlterarMedico = `http://localhost:3000/Medico/editarMedico`;

  axios.put(urlAlterarMedico, req.body).then((response) => {
    const urlListarMedico = "http://localhost:3000/medico/listarMedico";
    axios.get(urlListarMedico).then((response) => {
      console.log(response.data);
      let medicos = response.data;
      res.render("medico/listagemMedico", { medicos });
    });
  });
});

app.get("/excluirMedico/:id", (req, res) => {
  let { id } = req.params;
  const urlExcluirMedico = `http://localhost:3000/medico/excluirMedico/${id}`;

  axios.delete(urlExcluirMedico).then((response) => {
    const urlListarMedico = "http://localhost:3000/medico/listarMedico";
    axios.get(urlListarMedico).then((response) => {
      let medicos = response.data;
      res.render("medico/listagemMedico", { medicos });
    });
  });
});

app.listen(3001, () => {
  console.log("Servidor front-End rodando: http://localhost:3001");
});
