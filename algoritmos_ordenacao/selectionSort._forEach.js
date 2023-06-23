const livros = require('./listaLivros')
const menorValor = require('./menorValor')

// Algoritmo de ordenação Selection Sort com for Each
// se quiser ordenar por titulo basta substitui .preco por .titulo
livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
   
    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];
   
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
})

console.log(livros)