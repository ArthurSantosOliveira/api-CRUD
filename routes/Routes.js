// routes/Routes.js

const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/Controller');

// Rotas para operações CRUD de clientes
router.get('/clientes', clienteController.listarClientes);
router.post('/clientes', clienteController.criarCliente);
router.put('/clientes/:id', clienteController.atualizarCliente);
router.delete('/clientes/:id', clienteController.excluirCliente);

module.exports = router;
