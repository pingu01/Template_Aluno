function inputAlunos(){
    var alunos = parseInt(document.getElementById("quantidade").value);
    var text = ''
    // cria inputs para serem colocados na tela de acordo com o numero de alunos
    for(i = 0; i < alunos; i++){
        text += '<input type="text" placeholder="nome" class="nome">' +
        '<input type="text" placeholder="nota da prova" class="prova">' +
        '<input type="text" placeholder="nota do trabalho" class="trabalho"><BR>'
    }
    text += '<button onclick="media()" class = "text-center">calcular media</button>'
    document.getElementById('campos').innerHTML = text
}

function mediaArit(){
    var notaProva = document.querySelectorAll(".prova");
    var notaTrabalho = document.querySelectorAll(".trabalho");
    var medias = ''

    for(var i = 0; i < notaProva.length; i++){
        //                  peso 2
       var mediaAluno = ((parseInt(notaProva[i]) * 2) + (parseInt(notaTrabalho[i]) * 3)) / 5;
       medias += mediaAluno + ' ';
    }
    console.log(medias);
}