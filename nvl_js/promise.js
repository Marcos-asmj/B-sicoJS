// const dividir = (num_a, num_b) => {
//     const resultado = num_a / num_b;

//     return resultado;
// }

// const resultado = dividir(6, 3);
// console.log("resultado é:", resultado);

const dividir = (num_a, num_b) => {
    return new Promise((resolve, reject) => {
        if (num_b > 0){
            const resultado = num_a / num_b;

            return resolve(resultado);
        } else {
            return reject("divisor tem que ser maior que zero")
        }
    });
}

dividir(10, 0).then((resultado) => {
    console.log("resultado é", resultado);
}).catch((erro) => {
    console.error(erro);
})