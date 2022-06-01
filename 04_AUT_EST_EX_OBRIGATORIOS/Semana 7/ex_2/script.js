function trocar(){
    var palavra1 = document.getElementById("palavra1").value;
    var palavra2 = document.getElementById("palavra2").value;

    document.getElementById("palavra1").value = palavra2;
    document.getElementById("palavra2").value = palavra1;
}