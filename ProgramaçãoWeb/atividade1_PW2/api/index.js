const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const rota1 = require('./rotas/rota_fornecedor/fornecedor.js')
app.use('/api/fornecedor', rota1)

const rota2 = require('./rotas/rota_pagamentos/pagamentos')
app.use('/api/pagamentos', rota2)


app.listen(
    3030,
     () => console.log("Api em uso....")
     
);
