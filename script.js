function calcularIdade() {
    var dataNascimento = window.document.getElementById("dataNascimento").value;
    var resultado = window.document.getElementById("resultado") 
    var pessoa = window.document.getElementById("nome").value;

    var dtn = new Date(dataNascimento)
    var hoje = new Date()
    var idade = Math.floor(
            Math.ceil(
                Math.abs( dtn.getTime() - hoje.getTime())
                / (1000 * 3600 * 24)
                     ) /365.25
            )

            resultado.value = pessoa + " tem "  + idade + " ano(s)";

}

function temaescuro(){
    document.body.classList.remove("white");
    document.body.classList.add("black");
}

function temaclaro(){
    document.body.classList.remove("black");
     document.body.classList.add("white");
}

