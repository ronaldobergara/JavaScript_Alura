const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

// identificar qual Aluno esta reprovado, com a media menor que 7

// na função callback, para não ter que passar um parâmetro nomeado que não seria usado, foi passado underline _
const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7
})

console.log(reprovados)