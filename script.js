let carta = []
let somatorio = 0
let texto = ""
let blackjack = false
let vivo = true
let mensagem = document.getElementById("mensagem")
let soma = document.getElementById("soma")
let cartas = document.getElementById("cartas")
let player = {
    name: "iglu",
    coins: 199
}

let creditos = document.getElementById("credito")
credito.textContent = player.name + ": R$" + player.coins

function comecar(){
vivo = true
blackjack = false
let firstCard = compreUmaCartaAleatoria()  
let secondCard = compreUmaCartaAleatoria()
    carta = [firstCard, secondCard] 
    somatorio = firstCard + secondCard
    renderizar()
}

function renderizar(){
    cartas.textContent = "cartas:"
    for(i=0;i<carta.length;i++){
        cartas.textContent += " "+carta[i]+" " + "-"
    }
    soma.textContent =  somatorio

    if(somatorio <= 20){
        texto = "Gostaria de pegar uma nova carta?"
    }
    else if(somatorio === 21) {
        texto = "BLACKJACK!!!"
        blackjack = true
    }
    else{
        texto= "Você perdeu"
        vivo= false
    }
    
    mensagem.textContent = texto
}
function novaCarta(){
    if(vivo === true && blackjack === false){
    let Ncarta = compreUmaCartaAleatoria()
    somatorio += Ncarta
    carta.push(Ncarta)
    renderizar()}
}
function compreUmaCartaAleatoria(){
    let numeroaleatorio = Math.floor( Math.random()*13 ) +1
    if (numeroaleatorio === 1){
        return 11
    }else if (numeroaleatorio>10){
        return 10
    }else{
        return numeroaleatorio
    }
}