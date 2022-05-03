var index;

window.onload = function() {
    var url = new URL(window.location.href)
    var URLFormatter = new URLSearchParams(url.search)
    index = URLFormatter.get("index")
    
}

function novocartao() {
    window.location = ''
}