let botao = document.querySelector('button[class="button3"]')
let span = document.querySelector('span[class="spanContent"]')

let texto = "Sou de Itaquera SP, atualmente estou me aprofundando profissionalmente na área de programação, tenho muitos objetivos e sonhos a ser conquistado, me considero um pouco tímido, sou focado, persistente e comprometido."


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