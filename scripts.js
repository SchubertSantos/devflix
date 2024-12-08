/*
Botão -> For Clicado -> chamar a minha função -> Ligar o SOM
Document = HTML
querySelector (Selecionar ou pegar um item do HTML)
addEventListener - Sua vizinha fofoqueira (Ouvindo alguém e te contar quando algo aconteceu)
*/

let botaoSom = document.querySelector(".botao-som") 
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

//Ligar o SOM
botaoSom.addEventListener("click", ligaSom)

function ligaSom() {
    video.muted = !video.muted
}

//Mostrar o MODAL
botao.addEventListener("click", mostrarModal) 
modal.addEventListener("click", esconderModal)

function mostrarModal() {
    modal.style.display = "block"
}

function esconderModal() {
    modal.style.display = "none"
}

//Tocar TUDUM
//Window -> Siste / HTML -> document
window.addEventListener("load", tocarAudio)

function tocarAudio() {
    audio.play()
}


