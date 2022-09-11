const CADASTRO = {
    descricao: "um cadastro de pessoas",
    pessoas: [
        {
            nome: "joao da silva",
            idade: 25,
            profissao: "dentista" 
        },
        {
            nome: "jose da silva",
            idade: 32,
            profissao: "engenheiro" 
        },
        {
            nome: "maria da silva",
            idade: 28,
            profissao: "medica" 
        },
    ]
}

console.log(CADASTRO.descricao);

for (const pessoa of CADASTRO.pessoas) {
    console.log(pessoa);
}

