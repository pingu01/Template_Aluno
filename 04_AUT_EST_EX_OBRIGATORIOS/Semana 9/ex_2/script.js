function somar(){
    //pega o valor do input
    var number = document.getElementById("input").value;
    //pega o numero do input e separa os digitos em uma array
    var array = number.split("");
    //mantem o resultado zero
    var result = 0;
    //percorre a array
    for(i = 0; i < array.length ; i++){
        //adiciona o valor do digito ao resultado e converte para inteiro
        result = result + Number(array[i]);
    }
    //exibe o resultado
    document.getElementById("result").innerHTML = result;
}