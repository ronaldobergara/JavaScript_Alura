const livros = require('./listaLivros')
const menorValor = require('./menorValor')

// Algoritmo de ordenação Selection Sort
// se quiser ordenar por titulo basta substitui .preco por .titulo
for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual]
    let livroMenorPreco = livros[menor]

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
}

console.log(livros)