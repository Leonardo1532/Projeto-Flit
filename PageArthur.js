let botao = document.querySelector('button[class="button3"]')
let span = document.querySelector('span[class="spanContent"]')

let texto = "Sou de Maringa PR, gosto muito de passar o tempo com a minha namorada e de jogar futebol, estou estudando direito na UEM e programacao na flit, tenho o objetivo de me tornar um programador bem sucedido e trabalhar fora do pais."


botao.addEventListener('click', (event) => {
    let newText = span.innerHTML = prompt("Insira um novo texto")
    if (newText === "") {
        span.innerHTML = texto
    } else if (newText) {
        newText
        span.value = newText
        window.localStorage.setItem("novoTexto", newText)
    } else {
        span.innerHTML = texto
    }
})

if (window.localStorage.getItem("novoTexto") != undefined) {
    window.addEventListener("load", ValorLocalStorage)
}


function ValorLocalStorage() {
    span.innerHTML = window.localStorage.getItem("novoTexto")
}