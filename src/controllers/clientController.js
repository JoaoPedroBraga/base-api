const clientes = [
    {'id': 1, 'nome': 'Joao'},
    {'id': 2, 'nome': 'Stefanny'},
    {'id': 3, 'nome': 'Eysha'},
    {'id': 4, 'nome': 'Petunia'},
]

getClients = (req, res) =>{
    res.status(200).send(clientes);
}

getOneClient = (req, res) => {
    let id = req.params.id;
    const cliente = clientes.find((item) => item.id === Number(id))
    if (cliente){
        res.status(200).send(cliente);
    }else{
        res.status(404).send(`Não foi encontrado cliente com esse id: ${id}`)
    }
}

module.exports = { getClients, getOneClient };