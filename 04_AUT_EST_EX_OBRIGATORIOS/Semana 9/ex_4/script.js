function fibonacci(){
    //comecando a sequencia de fibonacci
    let fibonacci = [0, 1];
    //pega o valor do input
    let num = parseInt(document.getElementById("fibonacci").value);
    //percorre a sequencia de fibonacci e para no numero indicado no input
    for(let i = 2; i < num; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    //exibe o resultado
    document.getElementById("resultado").innerHTML = fibonacci
}