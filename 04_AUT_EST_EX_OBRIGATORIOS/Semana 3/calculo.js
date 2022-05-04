function arremesso(){
    var velocidade = Number(document.getElementById("name").value);
    var gravidade = 10
    var tempoDeQueda =velocidade/gravidade;
    var alturaMax = (velocidade ** 2) / 2 * gravidade;
    document.getElementById("resultado").innerHTML = `Altura maxima: ${alturaMax} metros. <br> Tempo de queda ${tempoDeQueda} segundos.`
}
