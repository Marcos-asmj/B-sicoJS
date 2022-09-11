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

const pessoas = CADASTRO.pessoas;

// map
pessoas.map((pessoa) => {
    console.log("a profissão de", pessoa.nome, "é", pessoa.profissao);
});

// filter
const outraColecao = pessoas.filter((pessoa) => 
    pessoa.idade >= 28
);
console.log("pessoas filtradas", outraColecao);

// reduce
const soma = pessoas.reduce((total, pessoa) => {
    return total + pessoa.idade
}, 0);
console.log("a soma das idades é", soma);