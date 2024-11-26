const listaProdutos = [];

const produtoBusiness = require("./produto-business");

const getProdutos = async (request, h) => {
    const result = await produtoBusiness.list(request.query);
    return result;
};

const createProduto = async (request, h) => {
    const result = await produtoBusiness.save(request.payload);
    return h.response(result).code(201);
};

module.exports = { getProdutos, createProduto };
