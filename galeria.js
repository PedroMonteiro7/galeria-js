"use strict"

const limparElemento = (elemento) => {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.lastChild)
    }
}

const pegarImagens = (raca) => fetch(`https://dog.ceo/api/breed/${raca}/images`)

const pesquisarImagens = async (evento) => {

    if (evento.key === 'Enter') {
        const raca = evento.target.value
        // ou document.querySelector(".pesquisa-container input").value
        const imagensResponse = await pegarImagens(raca)
        const imagens = await imagensResponse.json()
        //await fala para esperar as informações vindas do servidor chegarem

        limparElemento(document.querySelector(".galeria-container"))
        limparElemento(document.querySelector(".slide-container"))

        carregarGaleria(imagens.message)
        carregarSlide(imagens.message)
    }

}

pesquisarImagens()

//map retorna um novo array. foreach apenas percorre
//innerHTML = innerHTML +   ==   innerHTML +=

//replace substitui " " por "-" e split separa por ponto e mantém apenas a 1ª parte
const limparId = (url) => {
    //index of encontra o índice do caractere desejado 
    const ultimaBarra = url.lastIndexOf("/")
    const ultimoPonto = url.lastIndexOf(".")
    //substring() retorna a parte da string entre os índices inicial e final, ou até o final da string.
    return url.substring(ultimaBarra + 1, ultimoPonto).replace(" ", "-")
    //-------------- +1 para começar após a barra
}

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = `#${limparId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`

    container.appendChild(novoLink)
}

const carregarGaleria = (imagens) => imagens.forEach(criarItem)

const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const novoDiv = document.createElement("div")
    novoDiv.classList.add("slide")
    novoDiv.id = limparId(urlImagem)

    const indiceAnterior = indice <=0 ? arr.length - 1 : indice - 1
    const idAnterior = limparId(arr[indiceAnterior]) 
    
    const indiceProximo = indice >= arr.length - 1 ? 0 : indice + 1
    const idProximo = limparId(arr[indiceProximo]) 

    novoDiv.innerHTML = `
        <div class="imagem-container">
            <a href="" class="icones fechar">&#128473;</a>
            <a href="#${idAnterior}" class="icones anterior">&#171;</a>
            <img src="${urlImagem}" alt="">
            <a href="#${idProximo}" class="icones proximo">&#187;</a>
        </div>
    `
    container.appendChild(novoDiv)
}

const carregarSlide = (imgs) => imgs.forEach(criarSlide)
// o forEacho manda o elemento, indice e o array


document.querySelector(".pesquisa-container input").addEventListener("keypress", pesquisarImagens)





// const imagens = {
//     "url" : [
//         "./img/flower.webp",
//         "./img/city.webp",
//         "./img/bank.jpg",
//         "./img/toucan.webp",
//         "./img/children.jpg",
//         "./img/lemon.webp",
//         "./img/fire.webp",
//         "./img/euryops.webp"
//     ]
// }