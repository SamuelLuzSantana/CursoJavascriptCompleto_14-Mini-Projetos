// Criar um metodo para ler propriedades de um objeto e 
// exibir somente as propriedades do tipo string que estão nesse Objeto

//objetos
const filme = {
    titulo : 'Vingadores',
    ano: 2018,
    diretores: 'Irmãos Russos'
}


exibirPropriedade(filme);
function exibirPropriedade(obj){

   for (prop in obj){
       if(typeof obj[prop] === "string") {
           console.log(prop , ':',obj[prop])
       }
   }

}