// declaração de função

function minhaFuncao(param){
    console.log(param)
}

// Expressão de Função
const soma = function(num1, num2){ return num1 + num2 }
console.log(soma)
console.log(soma(1, 2))

// Diferenças

// É possível utilizar e depois criar a função
console.log(apresentar())
function apresentar() {
    return 'olá'
}

// nesse caso não é possível utilizar primeiro e depois criar a função
console.log(multiplicacao(1, 2))
const multiplicacao = function(num1, num2){ return num1 * num2 }
