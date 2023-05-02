function carregar() {
    var msg = document.querySelector('section#msg')
    var foto = document.querySelector('img#imagem')
    var data = new Date()
    var hora = 19 //data.getHours
    
    msg.innerHTML = `Agora sao ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        // BOM DIA
    foto.src = "img/fotomanha.png";   
    document.body.style.background = '#dca401'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
    foto.src = "img/fototarde.png";   
    document.body.style.background = '#ff4f00'
    } else {
        // BOA NOITE
    foto.src = "img/fotonoite.png";
    document.body.style.background = '#2d4776'
    }
}

document.onload = carregar()