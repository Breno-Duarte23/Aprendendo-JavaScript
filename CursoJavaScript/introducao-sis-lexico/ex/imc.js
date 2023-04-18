function calcularIMC(peso, altura){
    if (peso === undefined || altura === undefined){
        throw Error("need two parameters: weight and heigth")
    }
    return peso / (altura * altura)
}

function classificaIMC(imc){
    if(imc < 16.9){

    } else if (imc <=  18.4){
        return "abaixo do peso";
    } else if (imc <=  24.9){
        return "normal";
    } else if (imc <= 29.9){
        return "acima do peso";
    } else if (imc <=34.9){
        return "obesidade 1";
    } else if (imc <=40){
        return "obesidade 2";
    } else {
        return "obesisdade 3";
    }
}
let imc = calcularIMC(70, 1.72)
console.log(imc)
console.log(classificaIMC(imc))