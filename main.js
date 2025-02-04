"use strict"

const imagens = [
    'JK.jpg',
    'JK1.jpg',
    'JK2.jpg',
    'JK3.jpg',
    'JK4.jpg',
    'JK5.jpg',
    'JK6.jpg',
    'JK7.jpg'
]

let indiceAtual = 0;

document.getElementById('trocarImagem').addEventListener('click', function() {
    const imagemElement = document.getElementById('imagem')
    imagemElement.style.opacity = 0

    setTimeout(() => {
        indiceAtual = (indiceAtual + 1) % imagens.length
        imagemElement.src = imagens[indiceAtual]
        imagemElement.style.opacity = 1
    }, 1000)
})