// Controlador para lidar com operações relacionadas aos clientes

// Array simulando uma lista de clientes
let clientes = [];

// Função para listar clientes
const listarClientes = (req, res) => {
    res.json(clientes); // Retorna a lista de clientes como JSON
};
const { v4: uuidv4 } = require('uuid');

// Função para criar um novo cliente
const criarCliente = (req, res) => {
    const { nome, cpf, celular, email } = req.body; // Obtém os dados do novo cliente do corpo da requisição
    const novoCliente = {
        id: uuidv4(),//Biblioteca que geraum id único
        nome,
        cpf,
        celular,
        email
    }; // Cria um objeto representando o novo cliente
    clientes.push(novoCliente); // Adiciona o novo cliente à lista de clientes
    res.status(201).json(novoCliente); // Retorna o novo cliente como JSON, com o status 201 (Created)
};

const atualizarCliente = (req, res) => {
    const { id } = req.params; // Obtém o ID do cliente da URL
    const { nome, cpf, celular, email } = req.body; // Obtém os novos dados do cliente

    const index = clientes.findIndex(cliente => cliente.id === id); // Comparação direta com string

    if (index !== -1) { // Se o cliente foi encontrado
        clientes[index] = { ...clientes[index], nome, cpf, celular, email }; // Atualiza os dados
        res.json(clientes[index]); // Retorna o cliente atualizado
    } else {
        res.status(404).json({ mensagem: 'Cliente não encontrado' }); // Retorna erro 404 se não encontrou
    }
};

// Função para excluir um cliente
const excluirCliente = (req, res) => {
    const { id } = req.params; // Obtém o ID do cliente da URL
    const index = clientes.findIndex(cliente => cliente.id === id); // Comparação direta com string

    if (index !== -1) {
        clientes.splice(index, 1); // Remove o cliente da lista
        res.json({ mensagem: 'Cliente excluído com sucesso' });
    } else {
        res.status(404).json({ mensagem: 'Cliente não encontrado' });
    }
};


// Exportando os controladores para serem utilizados em outros arquivos
module.exports = { listarClientes, criarCliente, atualizarCliente, excluirCliente };
