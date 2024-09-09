fetch("cabecera.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.getElementById("cabecera").innerHTML = data;
    });