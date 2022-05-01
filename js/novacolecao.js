window.onload = function() {
    var btncadastrarcol = document.getElementById("cadastrarcolecao")
    btncadastrarcol.onclick = function (){
        cadastrarcolecao()
    }
}

function cadastrarcolecao() {
    if (!localStorageEmpty()) {
        localStorage.setItem("listaColecoes", "[]")
    }

    var name = document.getElementById("name").value
    var descricao = document.getElementById("desc").value
    
    listaColecoes = JSON.parse(localStorage.getItem("listaColecoes"))
    var len = listaColecoes.length
    
    var col = {"index": len, "nome": name, "descricao": descricao}

    ///alert(JSON.stringify(col))

    listaColecoes.push(col)
    localStorage.setItem("listaColecoes", JSON.stringify(listaColecoes))
}

function localStorageEmpty() {
    if (Object.keys(localStorage).length > 0) {
        return true
    }else{
        return false
    }
}


/**
    localStorage.setItem("listaColecoes", "[]")
 */