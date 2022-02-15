// Criar um objeto endereço com :
// Rua | Cidade | CEP (exibir endereço)


let endereco = {
    rua : 'a',
    cidade: 'b',
    cep: 'c'
}

function exibirEndereco(endereco){
    for(let chave in endereco)
        console.log(chave,endereco[chave]);
}

exibirEndereco(endereco)