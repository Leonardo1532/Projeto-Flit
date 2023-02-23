let span1 = document.querySelector('span[class="span1"]')
let span2 = document.querySelector('span[class="span2"]')
let link = document.getElementsByClassName("linkImagem")
let imagem = document.getElementsByClassName("imagem")
let nome = document.querySelector('span[class="name"]')

span1.addEventListener("click", (event) => {
    switch (true) {
        case nome.textContent == "Leonardo":
            link[0].href = "./PageArthur.html"
            imagem[0].src = "./Arthur.jpeg"
            nome.innerHTML = "Arthur"
            break;
        case nome.textContent == "Arthur":
            link[0].href = "./MyPage.html"
            imagem[0].src = "./foto.jpeg"
            nome.innerHTML = "Leonardo"
            break;
    }
})

span2.addEventListener("click", (event) => {
    switch (true) {
        case nome.textContent == "Leonardo":
            link[0].href = "./PageArthur.html"
            imagem[0].src = "./Arthur.jpeg"
            nome.innerHTML = "Arthur"
            break;
        case nome.textContent == "Arthur":
            link[0].href = "./MyPage.html"
            imagem[0].src = "./foto.jpeg"
            nome.innerHTML = "Leonardo"
            break;
    }
})