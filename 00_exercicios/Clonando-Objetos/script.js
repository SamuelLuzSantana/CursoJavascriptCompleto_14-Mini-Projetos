const celular = {
    marcaCelular: 'Motorola',
    tamanhoTela: { vertical: 155, horizontal: 75 },
    capacidadeBateria: 5000,
    ligar: function () { console.log("Fazendo ligação...") }
}

//metodo 1 - com essa forma é possivel adicionar  
//novos atributos no objeto clonado
const novoObjeto = Object.assign({

    cabo: true 

}, celular);

console.log(novoObjeto);


// segundo metodo
const objeto2 = {...celular};
console.log(objeto2);
