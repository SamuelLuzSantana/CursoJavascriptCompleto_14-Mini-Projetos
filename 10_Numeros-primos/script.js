//Criar uma função para mostrar os numeros primos

//Primos
//Compostos

//Ex 10,11..

exibirNumerosPrimos(10);

//caso os numeros de entrada forem primo retorna no console eles
function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        if (numeroPrimo(numero)) console.log(numero);       
    }
}


//Verifica se o numero de entrada é primo
function numeroPrimo(numero) {

    for(let divisor = 2; divisor < numero; divisor++){
        if (numero % divisor ===0) {
            return false;
        }
    }

    return true;
}