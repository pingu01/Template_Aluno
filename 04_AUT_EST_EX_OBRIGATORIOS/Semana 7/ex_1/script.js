function add(){
    var num = document.getElementById("num").value;
    num = parseInt(num) + 1
    document.getElementById("num").value = num;
}

function subtraction(){
    var num = document.getElementById("num").value;
    num = parseInt(num) - 1
    document.getElementById("num").value = num;
}