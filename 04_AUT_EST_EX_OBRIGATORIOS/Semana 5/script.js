function Operation(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("op").value
    var resultado = Calcular(num1,num2,op)
    document.getElementById("resultado").innerHTML = resultado
    console.log(op)
}

function Calcular(x,y,op){
    let result;
    result = eval(x + op + y);
    return result;
}