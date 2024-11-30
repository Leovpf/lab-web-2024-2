const Produto = require('./produto-model');

const save = async (produtoData) => {
  const produto = new Produto(produtoData);
  return await produto.save();
};

const update = async (id, produtoData) => {
  return await Produto.findByIdAndUpdate(id, produtoData, { new: true });
};

const remove = async (id) => {
  return await Produto.findByIdAndDelete(id);
};

const list = async (filters) => {
  return await Produto.find(filters);
};

const findById = async (id) => {
  return await Produto.findById(id);
};

module.exports = { save, update, remove, list, findById };