const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Produto = database.sequelize.define('Produto', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        field: 'id'
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'nome'
    },
    descricao: {
        type: Sequelize.TEXT,
        field: 'descricao'
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'categoria'
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'marca'
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
        field: 'preco'
    },
    quantidadeEstoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'quantidade_estoque'
    },
    codigoBarras: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'codigo_barras'
    },
    altura: {
        type: Sequelize.FLOAT,
        allowNull: false,
        field: 'altura'
    },
    largura: {
        type: Sequelize.FLOAT,
        allowNull: false,
        field: 'largura'
    },
    profundidade: {
        type: Sequelize.FLOAT,
        allowNull: false,
        field: 'profundidade'
    },
    unidadeMedidaDimensao: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'unidade_medida_dimensao'
    },
    pesoValor: {
        type: Sequelize.FLOAT,
        allowNull: false,
        field: 'peso_valor'
    },
    unidadeMedidaPeso: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'unidade_medida_peso'
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'status'
    },
    dataCadastro: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'data_cadastro'
    }
}, {
    tableName: 'produto',
    timestamps: false
});

module.exports = { Produto };
