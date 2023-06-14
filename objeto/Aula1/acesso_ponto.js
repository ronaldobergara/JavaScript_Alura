const cliente = {
    nome: "João Miguel",
    idade: 23,
    cpf: "12345678900",
    email: "joao@email.com",
};

console.log(
    `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`
);

console.log(
    `Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`
);