function carregar () {
    var msg = document.getElementById('msg')
    var twoMsg = document.getElementById('twoMsg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        twoMsg.innerHTML = `Bom dia!`
        document.body.style.background = '#ef9c7c'
    } 
    else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        twoMsg.innerHTML = `Boa tarde!`
        document.body.style.background = '#f38627'
    } 
    else {
        img.src = 'noite.png'
        twoMsg.innerHTML = `Boa noite!`
        document.body.style.background = '#111224'
    }
    
}


