const mongoose = require('mongoose');

// Define o schema de Aluno
const AlunoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    minlength: 2
  },
  idade: {
    type: Number,
    required: true,
    min: 1,
    max: 150
  }
});

// Cria o modelo Aluno
const Aluno = mongoose.model('Aluno', AlunoSchema);

module.exports = Aluno;