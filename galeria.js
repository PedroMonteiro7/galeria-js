"use strict"

const imagens = [
    "./img/flower.webp",
    "./img/city.webp",
    "./img/bank.jpg",
    "./img/toucan.webp",
    "./img/children.jpg",
    "./img/lemon.webp",
    "./img/fire.webp",
    "./img/euryops.webp"
]

//map retorna um novo array. foreach apenas percorre
//innerHTML = innerHTML +   ==   innerHTML +=

//replace substitui "./img/" por "" e split separa por ponto e mantém apenas a 1ª parte
const limparId = (url) => url.replace("./img/", "").split(".")[0]

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = `#${limparId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`

    container.appendChild(novoLink)
}

const carregarGaleria = () => imagens.forEach(criarItem)

const criarSlide = (urlImagem) => {
    const container = document.querySelector(".slide-container")
    const novoDiv = document.createElement("div")
    novoDiv.classList.add("slide")
    novoDiv.id = limparId(urlImagem)
    novoDiv.innerHTML = `
        <div class="imagem-container">
            <a href="" class="icones fechar">&#128473;</a>
            <a href="#zenitsu-agatsuma" class="icones anterior">&#171;</a>
            <img src="${urlImagem}" alt="">
            <a href="#giyu-tomioka" class="icones proximo">&#187;</a>
        </div>
    `
    container.appendChild(novoDiv)
}

const carregarSlide = (imagens) => imagens.forEach(criarSlide)

carregarGaleria(imagens)
carregarSlide(imagens)