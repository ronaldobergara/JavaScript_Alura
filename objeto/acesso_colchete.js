const cliente = {
    nome: "João Miguel",
    idade: 23,
    cpf: "12345678900",
    email: "joao@email.com",
};

console.log(
    `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
);

const chaves = ["nome", "idade", "cpf", "email"]

chaves.forEach((chave) => {
    console.log(`A Chave ${chave} tem valor ${cliente[chave]}`)
})