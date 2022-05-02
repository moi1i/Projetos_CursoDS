const roteador = require("express").Router();

roteador.use(
    '/', 
    async (requisicao, resposta) => {
        resposta.send(
            JSON.stringify('Rota "pedidos" criada....')
        )
    }
);

module.exports = roteador