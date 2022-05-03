window.onload = function () {
    var anchor = document.getElementById("turn")
    var inv = document.getElementsByClassName("arrow")
    var inv2 = document.getElementsByClassName("show")
    var inv3 = document.getElementsByClassName("question")
    var inv4 = document.getElementsByClassName("click")
    anchor.onclick = function() {
        inv[0].classList.remove("invisible")
        inv2[0].classList.remove("invisible")
        inv3[0].classList.add("invisible")
        inv4[0].classList.add("invisible")
    }
}
    