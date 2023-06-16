const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"]
}

cliente.enderecos = [
    {
        rua: "R. joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

cliente.enderecos.push(
    {
        rua: "R. joseph Ladder",
        numero: 404,
        apartamento: false,
    },
)

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)

console.log(listaApenasApartamentos)


const alunos = [
    {
        nome: "Kaori",
        idade: 11,
        aprovada: true
    },
    {
        nome: "Miguel",
        idade: 12,
        aprovada: true
    },
    {
        nome: "Eslen",
        idade: 13,
        aprovada: false
    },
]

const alunosAprovados = alunos.filter((aluno) => aluno.aprovada === true)

console.log(alunosAprovados)

const alunoMaiorOnzeAnos = alunos.filter((aluno) => {
    return aluno.idade > 11
})

console.log(alunoMaiorOnzeAnos)