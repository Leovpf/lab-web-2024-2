const listaProdutos = [];

const save = async (payload) => {
    listaProdutos.push(payload); // Adiciona o produto à lista
    return payload; // Retorna o produto cadastrado
};

const list = async () => {
    return listaProdutos;
};

module.exports = { save, list };
