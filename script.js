const botao = document.querySelector("buttun")

const form = document.querySelector(".formulario-fale-conosco")
const background = document.querySelector(".mascara-formulario")


function showForm(){
    form.style.left = "50%"
    form.style.transform = "traslatX(-50%)"
    background.style.visibility = "visible"
    form.style.Zindex = "2"
}

function esconderForm() {
    form.style.left = "-330px"
    form.style.transform = "translateX(0)"
    background.style.visibility = "hidden"
}
