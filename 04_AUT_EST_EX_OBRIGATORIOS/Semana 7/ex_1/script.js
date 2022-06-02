function add(){
    // Esse botão declara o valor do input em uma variável, adiciona 1, e imprime o valor modificado no input
    var num = document.getElementById("num").value;
    num = parseInt(num) + 1
    document.getElementById("num").value = num;
}

function subtraction(){
        // Esse botão declara o valor do input em uma variável, subtrai 1, e imprime o valor modificado no input
    var num = document.getElementById("num").value;
    num = parseInt(num) - 1
    document.getElementById("num").value = num;
}