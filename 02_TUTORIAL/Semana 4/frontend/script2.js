function calculo(){
    var valor1 = Number(document.getElementById("val1").value);
    var valor2 = Number(document.getElementById("val2").value);
    var resultado = valor1 + valor2;
    document.getElementById("resultado").innerHTML = `a soma dos valores é ${resultado}`;
}