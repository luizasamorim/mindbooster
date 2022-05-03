window.onload = function() {
    var btncadastraruser = document.getElementById("cadastraruser")
    btncadastraruser.onclick = function (){
        cadastraruser()
    }
}

function cadastraruser() {
    
    if (!localStorageEmpty()) {
        localStorage.setItem("listaUsuarios", "[]")
    }

    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var pass = document.getElementById("pass").value
    var confirmation = document.getElementById("confirmation").value

    alert("Nome: "+ name + "\nEmail: "+ email +"\nSenha: "+ pass +"\nConfirmação: "+ confirmation)
    
    if (pass == confirmation) {
        alert("if")
        listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))

        var user = {"nome": name, "email": email, "pass": pass, "confirmation": confirmation}

        alert(JSON.stringify(user))

        listaUsuarios.push(user)
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))
    } else{
        alert("else")
        var anchor = document.getElementById("wrongpass")
        debugger;
        anchor.classList.remove("invisible")
    }
    
    
}

function localStorageEmpty() {
    /*var storage = Object.keys(localStorage)
    for (let index = 0; index < storage.length; index++) {
        alert(storage[index])
        if (storage[index] == ) {
            array
        }
    }
    if (.length > 0) {
        return true
    }else{
        return false
    }*/
}


/**
    localStorage.setItem("listaUsuarios", "[]")
 */