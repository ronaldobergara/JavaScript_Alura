
const dados = require("./cliente.json");

console.log(dados)
console.log(dados.endereco.apartamento)

console.log(typeof dados)

const clienteEmString = JSON.stringify(dados) // transforma JSON em String

console.log(clienteEmString)
console.log(typeof clienteEmString)

const objetoCliente = JSON.parse(clienteEmString) // transforma string em JSON
console.log(objetoCliente)