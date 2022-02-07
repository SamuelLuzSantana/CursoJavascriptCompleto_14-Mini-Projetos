//Recebe uma quantidade de valores para avaliarr
//função exibe se cada valor é par ou impar

exibirTipo(3);

function exibirTipo(limite){

    for (let i = 0; i <= limite; i++) {
      
        if (i % 2 === 0) {
            console.log(`${i} - PAR`);
        }
        else{
            console.log(`${i} - IMPAR`);
        }
       
    }
    

}