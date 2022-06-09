const express = require("express");
const multer = require("multer");
const fs = require("fs");

const app = express();
const router = express.Router();

const Medico = require("../model/Medico");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now().toString() + "_" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.post("/Medico/cadastrarMedico", upload.array("files", 2), (req, res) => {
  console.log(req.files[0]);
  console.log(req.files[1]);
  console.log(req.body);

  const {
    nome_medico,
    telefone_medico,
    email_medico,
    celular_medico,
    tblEspecialidadeId,
  } = req.body;
  const Foto_Medico = req.files[0].path;
  const Foto_CRM = req.files[1].path;

  Medico.create({
    nome_medico,
    telefone_medico,
    Foto_Medico,
    Foto_CRM,
    email_medico,
    celular_medico,
    tblEspecialidadeId,
  }).then(() => {
    res.send("SUCESSO, dados do médico inseridos");
  });
});

router.get("/Medico/listarMedico", (req, res) => {
  Medico.findAll().then((Medicos) => {
    res.send(Medicos);
  });
});

router.get("/Medico/listarMedicoCodigo/:id", (req, res) => {
  const { id } = req.params;

  Medico.findByPk(id).then((MedicoId) => {
    res.send(MedicoId);
  });
});

router.delete("/Medico/excluirMedico/:id", (req, res) => {
  const { id } = req.params;

  Medico.findByPk(id).then((Medico) => {
    const Foto_CRM = Medico.Foto_CRM;
    const Foto_Medico = Medico.Foto_Medico;

    Medico.destroy({
      where: { id },
    }).then(() => {
      fs.unlink(Foto_Medico, (error) => {
        if (error) {
          res.send("Erro ao excluir a imagem: " + error);
        } else {
          res.send("Imagem excluida com sucesso");
        }
      });

      fs.unlink(Foto_CRM, (error) => {
        if (error) {
          console.log("Erro ao tentar excluir a imagem: " + error);
        } else {
          console.log("Imagem excluida com sucesso");
        }
      });

      res.send("Dados do médico excluidos");
    });
  });
});

router.put("/Medico/editarMedico", upload.array("files", 2), (req, res) => {
  const { nome_medico, telefone_medico, email_medico, celular_medico, id } =
    req.body;

  if (req.files != "") {
    Medico.findByPk(id).then((Medico) => {
      let Foto_CRM = Medico.Foto_CRM;
      let Foto_Medico = Medico.Foto_Medico;

      fs.unlink(Foto_Medico, (error) => {
        if (error) {
          res.send("Erro ao tentar excluir a imagem: " + error);
        } else {
          res.send("Imagem excluida com sucesso");
        }
      });

      fs.unlink(Foto_CRM, (error) => {
        if (error) {
          console.log("Erro ao tentar excluir a imagem: " + error);
        } else {
          console.log("Imagem excluida com sucesso");
        }
      });

      Foto_Medico = req.files[0].path;
      Foto_CRM = req.files[1].path;


      Medico.update(
        {
          nome_medico,
          Foto_CRM,
          Foto_Medico,
          telefone_medico,
          email_medico,
          celular_medico,
          tblEspecialidadeId,
        },
        { where: { id } }
      ).then(() => {
        res.send("Dados alterados com sucesso");
      });
    });
  } else {
    /**UPFDATE SEM IMAGEM */
    Medico.update(
      { nome_medico, telefone_medico, email_medico, celular_medico },
      { where: { id } }
    ).then(() => {
      res.send("Dados alterados com sucesso");
    });
  }
});

module.exports = router;
