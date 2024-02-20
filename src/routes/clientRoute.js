const express = require('express');
const router = express.Router();
const clientController = require('./../controllers/clientController')

router.get('/', clientController.getClients);
router.get('/:id', clientController.getOneClient);
router.post('/', clientController.creatClient);
router.put('/:id', clientController.updateCliente);
router.delete('/:id', clientController.removeClient)

module.exports = router;