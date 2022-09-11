const testarWhile = () => {
    let i = 0;
    while (i < 10){
        console.log("Estou no while");

        i++;
    } 
}

testarWhile();

const testarFor = () => {
    for (i = 0; i <10; i++) {
        console.log("Estou no for");
    }
}

testarFor();

const CORES = ['preto', 'vermelho', 'branco', 'amarelo', 'roxo' ];

for (const cor of CORES) {
    console.log("É uma cor: ", cor);
}