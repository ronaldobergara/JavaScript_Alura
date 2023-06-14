
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

// .includes() verifica se existe na lista
// .indexOf() retorna o indice
function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);

        const mediaDoAluno = listaDeAlunosEMedias[1][indice];

        console.log(`${aluno} tema media ${mediaDoAluno}.`)
    }else{
        console.log("Aluno não encontrado!")
    }
}

exibeNomeENota("João")