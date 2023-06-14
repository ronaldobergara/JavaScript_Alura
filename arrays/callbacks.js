const nomes = ["Evaldo", "Mari", "Camis"];
const outrosNomes = ["Ronaldo", "Kaori", "Eslen", "Blondie"]

nomes.forEach(function (nome){
    console.log(nome)
})

// Arrow function
nomes.forEach((nome) => {
    console.log(nome)
})


console.log("")
function imprimeNomes(nome){
    console.log(nome)
}
// passando a referencia da função
outrosNomes.forEach(imprimeNomes)