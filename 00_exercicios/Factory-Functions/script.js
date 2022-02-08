const celular = {
    marcaCelular: 'Motorola',
    tamanhoTela: { vertical: 155, horizontal: 75 },
    capacidadeBateria: 5000,
    ligar: function () { console.log("Fazendo ligação...") }
}

//Função de Fabrica

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){ console.log("Fazendo ligação...") }
    }
}

const celular1 = criarCelular('Iphone',5.6,5000);
console.log(celular1)

