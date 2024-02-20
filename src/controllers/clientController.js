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

creatClient = (req, res) =>{
    const cliente = req.body
    if(Object.keys(cliente).length){
        clientes.push(cliente);
        res.status(200).send(cliente)
    }else{
        res.status(406).send('Insira o dados do Cliente')
    }
}

updateCliente = (req, res) =>{
    let id = req.params.id;
    let indice = findClientIndex(id);
    clientes[indice] = req.body;
    res.status(200).send('Cliente Atualizado')
}

removeClient = (req, res) => {
    let id = req.params.id;
    let indice = findClientIndex(id);
    clientes.splice(indice, 1)

    res.status(200).send(`O id: ${id} foi excluido`)
}

//Função para puxar o cliente para edição
findClientIndex = (id) => {
    //                      findIndex retorna o index do ID
    const indice = clientes.findIndex((item) => item.id === Number(id));
    return indice
}

module.exports = { getClients, getOneClient, creatClient, updateCliente, removeClient };