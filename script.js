function atualizarTempo() {
    let display = document.querySelector('.display')
    let agora = new Date()

    let horario = corrigirHorario(agora.getHours()) 
    + ':' + corrigirHorario(agora.getMinutes()) 
    + ':' + corrigirHorario(agora.getSeconds())

    display.textContent = horario

}

function corrigirHorario(n){
    if(n < 10){
        n = '0' + n
    }

    return n
}

atualizarTempo()

setInterval(atualizarTempo, 1000)
