const roteador = require("express").Router();

roteador.use(
    '/', 
    async (requisicao, resposta) => {
        resposta.send(
            JSON.stringify('Rota "pagamentos" criada....')
        )
    }
);

module.exports = roteador