let num_a = 10;
let num_b = 5;

let somar = (num_a, num_b) => {
    const resultado = num_a + num_b;

    return resultado;
}

resultado = somar(num_a, num_b);
console.log("resultado: ", resultado);

num_a = 20;
num_b = 3;

resultado = somar(num_a, num_b);
console.log("resultado: ", resultado);

somar = (num_a, num_b, num_c) => {
    const resultado = num_a + num_b + num_c;

    return resultado;
}

let num_c = 4;

resultado = somar(num_a, num_b, num_c);
console.log("resultado: ", resultado);