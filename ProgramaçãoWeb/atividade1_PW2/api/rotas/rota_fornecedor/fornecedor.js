const roteador = require("express").Router();

roteador.use(
    '/', 
    async (requisicao, resposta) => {
        resposta.send(
            JSON.stringify('Rota "fornecedor" criada....')
        )
    }
);

module.exports = roteador