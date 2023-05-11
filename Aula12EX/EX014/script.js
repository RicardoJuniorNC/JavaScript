function carregar() {
    var msg = document.querySelector('div#msg')
    var foto = document.querySelector('img#imagem')
    var data = new Date()
    var hora = 19//data.getHours()
    
    msg.innerHTML = `Agora sao ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        // BOM DIA
    foto.src = "fotomanha.png";  
    document.body.style.background = '#dca401'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
    foto.src = "fototarde.png";
    document.body.style.background = '#ff4f00'
    } else {
        // BOA NOITE
    foto.src ="fotonoite.png";
    document.body.style.background = '#2d4776'
    }
}

document.onload = carregar()