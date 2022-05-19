function contaNotas(){
    //limpa o texto
    document.getElementById("price").innerHTML = "";
    //pega o valor do input
    var price = document.getElementById("price").value
    //array das notas disponiveis
    const notas = [100, 50, 20, 10, 5, 2, 1]
    //quantidade das respectivas notas
    var quantidadeNotas = [0, 0, 0, 0, 0, 0, 0]
    //total de notas usadas
    var total = 0
    for (let i = 0; i < 7; i++){
        //enquanto o valor da nota do indice [i] for menor que o preço, vai adicionar uma nota para o respectivo valor usado, e adicionar 1 ao total de notas
        while(notas[i] <= price){
            price = price - notas[i];
            quantidadeNotas[i] +=1
            total += 1

        }
    }
    document.getElementById("100").innerHTML = '100:' + quantidadeNotas[0];
    document.getElementById("50").innerHTML = '50:'+ quantidadeNotas[1];
    document.getElementById("20").innerHTML = '20:' + quantidadeNotas[2];
    document.getElementById("10").innerHTML = '10:' + quantidadeNotas[3]
    document.getElementById("5").innerHTML = '5:' + quantidadeNotas[4]
    document.getElementById("2").innerHTML = '2:' + quantidadeNotas[5]
    document.getElementById("1").innerHTML = '1:' +quantidadeNotas[6]

    console.log(quantidadeNotas, total)
}