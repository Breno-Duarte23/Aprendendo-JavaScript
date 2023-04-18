(function(){
    const nomeUsuario = null
    const elemento = document.querySelector(".top-bar p")

    if(nomeUsuario){
         //document.querySelector(".top-bar p").textContent = "Olá, " + "Bem vindo(a), " + nomeUsuario
        
        console.log(elemento.textContent)
        // elemento.textContent = elemento.textContent + nomeUsuario
        elemento.innerHTML += "<b>" + nomeUsuario + "</b>"
    } else{
        //elemento.parentElement.style.display = "None"
        const elementoParaRemover = elemento.parentElement
        elementoParaRemover.parentElement.removeChild(elementoParaRemover)
    }
})()