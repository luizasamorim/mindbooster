window.onload = function() {
    var btnlogar = document.getElementById("logar")
    btnlogar.onclick = function (){
        logar()
    }
}

function logar() {
    var mail = document.getElementById("email").value
    var passw = document.getElementById("pass").value
    
    var validado = validaEmail(mail)

   if (validado) {
        listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))

        let userMap = listaUsuarios.map(userMap => userMap.email);

        let i = userMap.findIndex(email => email == mail);

        if (listaUsuarios[i].pass == passw) {
            window.location.href = '../html/home.html';
        }else{
            let anchor2 = document.getElementById("loginwrongpass")
            anchor2.classList.remove("invisible")
        }
    } else{
        alert("else")
        let anchor = document.getElementById("loginwrongemail")
        anchor.classList.remove("invisible")
    }
    
    
}

function validaEmail(field) {
    usuario = field.substring(0, field.indexOf("@"));
    dominio = field.substring(field.indexOf("@")+ 1, field.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        return true
    }
    else{
        return false
    }
}