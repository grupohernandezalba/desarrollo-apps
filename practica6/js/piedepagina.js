fetch("piedepagina.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.getElementById("piedepagina").innerHTML = data;
    });