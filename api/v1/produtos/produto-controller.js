const produtoBusiness = require('./produto-business');

const createProduto = async (request, h) => {
  try {
    const result = await produtoBusiness.save(request.payload);
    return h.response(result).code(201);
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    return h.response({ error: "Erro ao criar produto" }).code(500);
  }
};

const updateProduto = async (request, h) => {
  try {
    const result = await produtoBusiness.update(request.params.id, request.payload);
    return result ? h.response(result).code(200) : h.response({ message: "Produto não encontrado" }).code(404);
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    return h.response({ error: "Erro ao atualizar produto" }).code(500);
  }
};

const deleteProduto = async (request, h) => {
  try {
    const result = await produtoBusiness.remove(request.params.id);
    return result ? h.response({ message: "Produto removido" }).code(200) : h.response({ message: "Produto não encontrado" }).code(404);
  } catch (error) {
    console.error("Erro ao remover produto:", error);
    return h.response({ error: "Erro ao remover produto" }).code(500);
  }
};

const getProdutoById = async (request, h) => {
  try {
    const result = await produtoBusiness.findById(request.params.id);
    return result ? h.response(result).code(200) : h.response({ message: "Produto não encontrado" }).code(404);
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return h.response({ error: "Erro ao buscar produto" }).code(500);
  }
};

const getProdutos = async (request, h) => {
  try {
    const filters = request.query;
    const result = await produtoBusiness.list(filters);
    return h.response(result).code(200);
  } catch (error) {
    console.error("Erro ao listar produtos:", error);
    return h.response({ error: "Erro ao listar produtos" }).code(500);
  }
};

module.exports = { createProduto, updateProduto, deleteProduto, getProdutoById, getProdutos };