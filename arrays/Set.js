const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Remover nomes duplicados

const meuSet = new Set(nomes);
const nomesAtualizados = [...meuSet]

// ou
// const nomesAtualizados = [...new Set(nomes)]

console.log(nomesAtualizados)