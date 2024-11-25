const Joi = require("joi");

const createProduto = {
    payload: Joi.object({
        id: Joi
            .string()
            .pattern(/^\d+$/)
            .required(),
        nome: Joi
            .string()
            .min(2)
            .required(),
        descricao: Joi
            .string()
            .min(10)
            .max(500),
        categoria: Joi
            .string()
            .min(3)
            .max(50)
            .required(),
        marca: Joi
            .string()
            .min(2)
            .max(50)
            .required(),
        preco: Joi
            .number()
            .positive()
            .required(),
        quantidadeEstoque: Joi
            .number()
            .integer()
            .positive()
            .required(),
        codigoBarras: Joi
            .string()
            .pattern(/^\d{13}$/) // Exatamente 13 dígitos
            .required(),
        dimensoes: Joi.object({
            altura: Joi.number().positive().required(),
            largura: Joi.number().positive().required(),
            profundidade: Joi.number().positive().required(),
            unidadeMedida: Joi.string().valid("cm", "m").required()
        }).required(),
        peso: Joi.object({
            valor: Joi.number().positive().required(),
            unidadeMedida: Joi.string().valid("kg", "g").required()
        }).required(),
        status: Joi
            .string()
            .valid("ativo", "inativo")
            .default("ativo"),
        dataCadastro: Joi
            .date()
            .iso()
            .required()
    })
};

module.exports = { createProduto };
