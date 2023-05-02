function verificar() {
        var data = new Date()
        var ano = data.getFullYear
        var fano = document.getElementById('txtano')
        var res = document.querySelector('div#res')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    
        if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
        } else 
        
        var fsex = document.getElementById('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        
    if (fsex[0].checked) {
    genero = 'Homem'
        if (idade > 0 && idade < 14){
            //crianca
        img.setAttribute('src', 'img/crianca-m.jpg')
            //adolescente
        }else if (idade < 21){
        img.setAttribute('src', 'img/adolescente-m.jpeg')
            // adulto
        }else if (idade < 50){
        img.setAttribute('src', 'img/adulto-m.jpg')
            // senhor(a)
        }else {
        img.setAttribute('src', 'img/senhor.webp')
        }
    if (fsex[1].checked) {
    genero = 'Mulher'
        if (idade > 0 && idade < 14){
            //crianca
        img.setAttribute('src', 'img/crianca-f.jpeg')
            //adolescente
        }else if (idade < 21){
        img.setAttribute('src', 'img/adolescente-f.jpg')
            // adulto
        }else if (idade < 50){
        img.setAttribute('src', 'img/adulto-f.jpeg')
            // senhor(a)
        }else {
        img.setAttribute('src', 'img/senhora.webp')
        }
    }
        
        
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos` 
        res.appendChild(img)
}