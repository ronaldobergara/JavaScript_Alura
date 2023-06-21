const clientes = require("./clientes.json")

// Função para Verifica se existe clientes que moram em apartamento sem complemento
function filtrarApartamentoSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"))    
    })
}

const filtrados = filtrarApartamentoSemComplemento(clientes)
console.log(filtrados)