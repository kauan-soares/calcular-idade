function calcularIdade() {
    var dataNascimento = window.document.getElementById("dataNascimento").value
    var resultado = window.document.getElementById("resultado") 

    var dtn = new Date(dataNascimento)
    var hoje = new Date()
    var idade = Math.floor(
            Math.ceil(
                Math.abs( dtn.getTime() - hoje.getTime())
                / (1000 * 3600 * 24)
                     ) /365.25
            )

            resultado.value = "A idade é " + idade + " ano(s)"

}