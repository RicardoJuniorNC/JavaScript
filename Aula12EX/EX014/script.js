
function carregar() {
    console.log('function carregar() foi carregada');
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora sao ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        // BOM DIA
    img.src = 'img/fotomanha.png'  
    document.body.style.background = '#dca401'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
    img.src = 'img/fototarde.png'
    document.body.style.background = '#ff4f00'
    } else {
        // BOA NOITE
    img.src = 'img/fotonoite.png'
    document.body.style.background = '#2d4776'
    }
}