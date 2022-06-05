function calcular(){
    //pega os valores dos inputs e transforma em variáveis
    var periodo = document.getElementById("periodo").value;
    var pessoas = document.getElementById("pessoas").value;
    var valor;
    var desconto = 0;
    // ve se o periodo é diurno ou noturno para determinar o valor e a quantidade de pessoas para determinar o desconto
    if(periodo == 1){
        valor = 200;
    } else if(periodo == 2){
        valor = 100;
    }
    //ve a quantidade de pessoas para determinar o desconto e o periodo
    if(pessoas > 50 && periodo == 1){
        desconto = 0.4;
    } else if(pessoas > 50 && periodo == 2){
        desconto = 0.2;
    }
    //imprime o valor final no documento na div referenciada
    var valorFinal = valor - (valor * desconto);
    document.getElementById("result").innerHTML = valorFinal;
    console.log(valorFinal);
}
