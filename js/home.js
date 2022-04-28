window.onload = function () {
    listacolecoes()
}

function novacolecao() {
    window.location = '../html/novacolecao.html';
}

function listacolecoes() {
    var listaColecoes = JSON.parse(localStorage.getItem("listaColecoes"))
    var lista = document.getElementById("listacolecoes")
    var i = 0;
    
    listaColecoes.forEach(function () {
            var div1 = document.createElement("div")
            div1.classList.add("card")

                var div7 = document.createElement("div")
                div7.classList.add("card-body", "d-flex", "flex-row")

                    var div5 = document.createElement("div")
                    div5.classList.add("lateral")

                    var div3 = document.createElement("div")
                    div3.classList.add("centro")

                        var div2 = document.createElement("div")
                        div2.classList.add("d-flex", "flex-column", "cardPic")
                        
                            var img1 = document.createElement("img")
                            img1.classList.add("pic")
                            img1.srcset = "../assets/Animal.png"

                        div2.appendChild(img1)

                        var div4 = document.createElement("div")
                        div4.classList.add("collText")
                        
                            var h5 = document.createElement("h5")
                            h5.classList.add("text")
                            h5.innerHTML = JSON.stringify(listaColecoes[i].nome)

                        div4.appendChild(h5)

                    div3.appendChild(div2)
                    div3.appendChild(div4)

                    var div6 = document.createElement("div")
                    div6.classList.add("lateral")

                        var img2 = document.createElement("img")
                        img2.classList.add("actions", "pencil")
                        img2.srcset = "../assets/pencil.png"

                        var img3 = document.createElement("img")
                        img3.classList.add("actions", "trash")
                        img3.srcset = "../assets/trash.png"

                    div6.appendChild(img2)
                    div6.appendChild(img3)

                div7.appendChild(div6)
                div7.appendChild(div3)
                div7.appendChild(div5)

            div1.appendChild(div7)
            
        lista.appendChild(div1)
    
        i++;
    });
}




function editarcolecao(){
    window.location = '../html/editarcolecao.html';
}
function deletarcolecao(){
    //
}

function mostrarcolecao() {
    
}