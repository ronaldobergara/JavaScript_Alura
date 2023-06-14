const notas = [7, 7, 8, 9];

// Copiar uma lista para poder modificar e deixa a lista original com seus valores originais, sem alteração.
// Se for feito dessa forma const novasNotas = notas; o JavaScript irá apontar para o mesmo endereço da memoria e quando alterar a nova lista
// ambas vão ser alteradas, então para realizar uma copia da lista utilizaremos o spread operator
     
                     // spread e adicionando 10 na novasNotas
const novasNotas = [...notas, 10];
// novasNotas.push(10)

console.log(`As novas notas são ${novasNotas}`)
console.log(`As notas originais são ${notas}`)