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

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = urlImagem
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`

    container.appendChild(novoLink)
}

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()