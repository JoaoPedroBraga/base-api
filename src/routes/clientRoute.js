const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('Entrei na Rota')
    console.log("Entrei na minha rota /")
})

module.exports = router;