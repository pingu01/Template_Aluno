function somar(){
    //
    var number = document.getElementById("input").value;
    var array = number.split("");
    var result = 0;

    for(i = 0; i < array.length ; i++){
        result = result + Number(array[i]);
    }

    document.getElementById("result").innerHTML = result;
}