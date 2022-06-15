function fibonacci(){
    let fibonacci = [0, 1];
    let num = parseInt(document.getElementById("fibonacci").value);
    for(let i = 2; i < num; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    document.getElementById("resultado").innerHTML = fibonacci
}