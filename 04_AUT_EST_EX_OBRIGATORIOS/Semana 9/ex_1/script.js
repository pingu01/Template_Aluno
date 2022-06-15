function result(){
    // pega o numero na caixa de texto
    var number = document.getElementById("input").value;
    // separa o numero em um array
    var array = number.split("")
    
    // detecta o numero da centena e diz se ele é par ou ímpar
    if (array[0] % 2 == 1){
        document.getElementById("result").innerHTML = "impar"
    }
    else{
        document.getElementById("result").innerHTML = "par"
    }
}