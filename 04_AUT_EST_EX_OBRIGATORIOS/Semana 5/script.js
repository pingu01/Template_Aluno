function Operation(){
    //vai usar o valor dos dois inputs para fazer a operação
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    //determina o operador da operação
    let op = document.getElementById("op").value
    //chama a função que faz a operação e escreve o resultado
    var resultado = Calcular(num1,num2,op)
    document.getElementById("resultado").innerHTML = resultado
    console.log(op)
}

function Calcular(x,y,op){
    let result;
    result = eval(x + op + y);
    return result;
}