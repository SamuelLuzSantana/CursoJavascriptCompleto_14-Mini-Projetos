//Escreva uma função que usa 2 numeros e retorna o maior entre eles

let valorMaior = max(10,10.5)

function max(num1, num2){
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(valorMaior);