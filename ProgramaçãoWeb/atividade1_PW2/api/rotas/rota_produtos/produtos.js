const roteador = require("express").Router();

roteador.use(
    '/', 
    async (requisicao, resposta) => {
        resposta.send(
            JSON.stringify('Rota "produtos" criada....')
        )
    }
);

module.exports = roteador