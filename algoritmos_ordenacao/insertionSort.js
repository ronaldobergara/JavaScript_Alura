const livros = require('./listaLivros')

// Algoritmo de ordenação insertion Sort
// se quiser ordenar por titulo basta substitui .preco por .titulo
function insertionSort(lista){
    for (let atual = 0; atual < lista.length; atual++){
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco){
            let itemAnalise = lista[analise]
            let itemAnterior = lista[analise - 1]
        
            lista[analise] = itemAnterior
            lista[analise - 1] = itemAnalise

            analise--
        }
    }

    console.log(lista)
}

insertionSort(livros)