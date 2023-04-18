(function(){
const nomeUsuario = "Breno"
    
    if (nomeUsuario) {
        const topBarElement = document.createElement("div")
        topBarElement.className = "top-bar"
        topBarElement.innerHTML = `<p>Olá, <b> ${nomeUsuario} </b></p>`

        const elementoPai = document.querySelector(".hero")
        elementoPai.insertBefore(topBarElement, elementoPai.firstElementChild)
    }

})()