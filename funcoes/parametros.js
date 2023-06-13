function soma(numero1, numero2) {
    return numero1 + numero2
}

console.log(soma())
console.log(soma(1, 3))
console.log(soma(40, 2))


// ordem dos parametros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade} anos`
}

console.log(nomeIdade('Kaori', 3))
console.log(nomeIdade(3, 'Kaori'))