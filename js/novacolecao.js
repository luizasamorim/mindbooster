window.onload = function() {
    var btncadastrarcol = document.getElementById("cadastrarcolecao")
    btncadastrarcol.onclick = function (){
        cadastrarcolecao()
    }
}

function cadastrarcolecao() {
    var name = document.getElementById("name").value
    var descricao = document.getElementById("desc").value
    
    listaColecoes = JSON.parse(localStorage.getItem("listaColecoes"))
    var col = {"nome": name, "descricao": descricao}

    listaColecoes.push(col)
    localStorage.setItem("listaColecoes", JSON.stringify(listaColecoes))
}

