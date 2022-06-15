function ordenar(){
    var nome1 = document.getElementById("nome1").value;
    var nome2 = document.getElementById("nome2").value;
    var nome3 = document.getElementById("nome3").value;

    var nomes = [nome1, nome2, nome3];

    for (let i = 0; i < nomes.length; i++) {
        for (let j = 0; j < nomes.length; j++) {
            if (nomes[i] < nomes[j]) {
                var temp = nomes[i];
                nomes[i] = nomes[j];
                nomes[j] = temp;
            }
        }
    }
    document.getElementById("ordem").innerHTML = nomes;
}