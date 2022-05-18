function notas(){
    //limpa o texto
    document.getElementById("price").innerHTML = "";
    //pega o valor do input
    var price = document.getElementById("price").value
    //array das notas disponiveis
    const money = [100, 50, 20, 10, 5, 2, 1]
    //quantidade das respectivas notas
    var quantity = [0, 0, 0, 0, 0, 0, 0]
    //total de notas usadas
    var total = 0
    for (let i = 0; i < 7; i++){
        while(money[i] <= price){
            price = price - money[i];
            quantity[i] +=1
            total += 1

        }
    }
    document.getElementById("100").innerHTML = '100:' + quantity[0];
    document.getElementById("50").innerHTML = '50:'+ quantity[1];
    document.getElementById("20").innerHTML = '20:' +quantity[2];
    document.getElementById("10").innerHTML = '10:' +quantity[3]
    document.getElementById("5").innerHTML = '5:' + quantity[4]
    document.getElementById("2").innerHTML = '2:' + quantity[5]
    document.getElementById("1").innerHTML = '1:' +quantity[6]

    console.log(quantity, total)
}