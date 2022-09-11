const saoIguais = (num_a, num_b) => {
    if (num_a == num_b){ // terceiro sinal = compara tipagem tambem
        console.log("Os dois números são iguais");
    } else {
        console.log("Os dois números são diferentes");
    }
}

saoIguais(1, 2);
saoIguais(1, 1);
saoIguais(2, "2");