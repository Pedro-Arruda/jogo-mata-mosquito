var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var tempoMosquito = 1500

var dificuldade = window.location.search
dificuldade = dificuldade.replace('?', '')


if (dificuldade == 'facil') {
    tempoMosquito = 1500
}else if (dificuldade == 'medio'){
    tempoMosquito = 1000
}else if (dificuldade == 'dificil') {
    tempoMosquito = 750
}

function determinaDimensaoJogo() {

    // Define o tamanho do jogo de acordo com a tela do usuário
    altura = window.innerHeight
    largura = window.innerWidth
}

determinaDimensaoJogo()

var cronometro = setInterval(function(){
    tempo -= 1
    document.getElementById('cronometro').innerHTML = tempo

    if (tempo < 0 ) {
        window.location.href = 'vitoria.html'
    }else{

    }
}, 1000)


function posicaoAleatoria() {

    // Remove o elemento, se houver, e retira uma vida
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        }else {
            document.getElementById('v' + vidas).src = 'img/coracao_vazio.png'
            vidas ++
        }
    }

    // Gera uma posição aleatória para o elemento
    var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

    // Impede que o elemento saia da tela
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // Cria e customiza o elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
    console.log(tamanhoAleatorio())
    console.log(ladoAleatorio())
}

function tamanhoAleatorio() {

    // Gera um tamanho entre 3 opções para o elemento
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio () {

    // Escolhe o lado que o elemento estará virado
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

function iniciaJogo() {
    var dificuldade = document.getElementById('nivel').value

    if (dificuldade == '') {
        alert('Escolha uma dificuldade')
        return false
    }

    window.location.href = 'jogo.html?' + dificuldade
}