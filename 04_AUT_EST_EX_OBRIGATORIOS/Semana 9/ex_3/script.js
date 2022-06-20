function ordenar(){
    //pega os nomes nos inputs
    var nome1 = document.getElementById("nome1").value;
    var nome2 = document.getElementById("nome2").value;
    var nome3 = document.getElementById("nome3").value;
    //ordena os nomes em uma array
    var nomes = [nome1, nome2, nome3];
    //bubble sort para ordenar em ordem alfabética
    for (let i = 0; i < nomes.length; i++) {
        for (let j = 0; j < nomes.length; j++) {
            if (nomes[i] < nomes[j]) {
                var temp = nomes[i];
                nomes[i] = nomes[j];
                nomes[j] = temp;
            }
        }
    }
    //exibe os nomes ordenados
    document.getElementById("ordem").innerHTML = nomes;
}