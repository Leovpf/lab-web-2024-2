const Joi = require('joi');

const createProduto = {
  payload: Joi.object({
    nome: Joi.string().min(2).required(),
    descricao: Joi.string().required(),
    categoria: Joi.string().required(),
    marca: Joi.string().required(),
    preco: Joi.number().positive().required(),
    quantidadeEstoque: Joi.number().integer().positive().required(),
    codigoBarras: Joi.string().required(),
    dimensoes: Joi.object({
      altura: Joi.number().positive().required(),
      largura: Joi.number().positive().required(),
      profundidade: Joi.number().positive().required(),
      unidadeMedida: Joi.string().required(),
    }).required(),
    peso: Joi.object({
      valor: Joi.number().positive().required(),
      unidadeMedida: Joi.string().required(),
    }).required(),
    status: Joi.string().valid('ativo', 'inativo').default('ativo'),
    dataCadastro: Joi.date().default(Date.now),
  }),
};

const updateProduto = { ...createProduto };
const deleteProduto = { params: Joi.object({ id: Joi.string().length(24).required() }) };
const getProdutoById = { params: Joi.object({ id: Joi.string().length(24).required() }) };
const getProdutos = {
  query: Joi.object({
    categoria: Joi.string(),
    nome: Joi.string().min(2),
  }),
};

module.exports = { createProduto, updateProduto, deleteProduto, getProdutoById, getProdutos };