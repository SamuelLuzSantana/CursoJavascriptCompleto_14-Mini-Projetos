//Velocidade máxima de até 70 km/h
//a cada 5km acima do limite voce ganha 1 ponyo na carteira
//caso pontos maior que 12 -> "Carteira Suspendida"

verificarVelocidade(70);

function verificarVelocidade(velocidade) {

    const velocidadeMaxima = 70;
    const kmPorPonto = 5;

    if (velocidade <= velocidadeMaxima) {
        console.log('ok');
    }
    else {
       
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        const limite = ((velocidade - velocidadeMaxima));

        if (pontos >= 12) {
            console.log('carteira suspensa!');
        }else{
            console.log(`Voce passou ${limite}Km do Limite, e recebeu ${pontos} pontos na sua carteira`);
            console.log(' \n  Caso você receba 12 pontos, a sua carteira sera suspensa');
        }

    }

}