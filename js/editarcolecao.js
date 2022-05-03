var index;

window.onload = function() {
    var url = new URL(window.location.href)
    var URLFormatter = new URLSearchParams(url.search)
    index = URLFormatter.get("index")
    var btnsalvar = document.getElementById("editarcolecao")
    btnsalvar.onclick = function (){
        editarcolecao(index)
    }
}

function editarcolecao(ind) {
    var name = document.getElementById("name").value
    var descricao = document.getElementById("desc").value
    
    listaColecoes = JSON.parse(localStorage.getItem("listaColecoes"))

    listaColecoes.splice(ind, 1, {"nome" : name, "descricao" : descricao})
    
    localStorage.setItem("listaColecoes", JSON.stringify(listaColecoes))

    window.location = '../html/home.html'

    //window.location.reload()
}


