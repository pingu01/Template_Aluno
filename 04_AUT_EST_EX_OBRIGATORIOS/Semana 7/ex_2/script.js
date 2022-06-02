function trocar(){
    /**
        Pega o que está digitado nos inputs com as id's e as torna variáveis
    */
    var palavra1 = document.getElementById("palavra1").value;
    var palavra2 = document.getElementById("palavra2").value;
    /**
        Imprime as variáveis dentro dos inputs com as variáveis trocadas 
    */
    document.getElementById("palavra1").value = palavra2;
    document.getElementById("palavra2").value = palavra1;
}