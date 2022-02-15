//Primeira Opção

let faixas = [
    {tooltip: 'até R$: 700', minimo: 0, maximo: 700},
    {tooltip: 'até R$: 700 a R$:1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$:1000 ou mais', minimo: 1000, maximo: 99999999}
]

//segunda Opção (Factory Function)
function criarFaixaPreco(tooltip,minimo,maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
}


let faixas2 = [
    criarFaixaPreco('a',1,100),
    criarFaixaPreco('b',10,1000),
    criarFaixaPreco('c',100,10000),
]


// Teceira Opção (constructor Function)
function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixaPreco('d', 10, 1000),
    new FaixaPreco('e', 20, 3000),
    new FaixaPreco('f', 40, 4000),
];

console.log(faixas)
console.log(faixas2)
console.log(faixas3)