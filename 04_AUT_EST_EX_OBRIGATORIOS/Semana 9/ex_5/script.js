function primos() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;


    for (let i = num1; i <= num2; i++) {//verifica se o numero é primo
        var control = 0; // contador de divisores
        for (let j = 2; j < i; j++) {//verifica se o numero é divisivel por um numero menor que ele
            if (i % j == 0) {//se o numero for divisivel, incrementa o contador
                control += 1;
                break;
            }
        }
        if (control == 0 && i > 1) {
            console.log(i);
            document.getElementById("resultado").innerHTML = i + '<br>'
        }

    }


}