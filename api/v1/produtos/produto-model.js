const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true, minlength: 2 },
  descricao: { type: String, required: true },
  categoria: { type: String, required: true },
  marca: { type: String, required: true },
  preco: { type: Number, required: true, min: 0 },
  quantidadeEstoque: { type: Number, required: true, min: 0 },
  codigoBarras: { type: String, required: true },
  dimensoes: {
    altura: { type: Number, required: true },
    largura: { type: Number, required: true },
    profundidade: { type: Number, required: true },
    unidadeMedida: { type: String, required: true },
  },
  peso: {
    valor: { type: Number, required: true },
    unidadeMedida: { type: String, required: true },
  },
  status: { type: String, enum: ['ativo', 'inativo'], default: 'ativo' },
  dataCadastro: { type: Date, default: Date.now },
});

// Cria o modelo Produto
const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;