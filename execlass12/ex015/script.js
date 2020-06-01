function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 13 ) {
                //Criança
                img.setAttribute('src','menino.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src','jovemhomem.png')
            }else if(idade < 50) {
                //Adulto
                img.setAttribute('src','homemadulto.png')
            }else {
                //Idoso
                img.setAttribute('src','homemidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 13) {
                //Criança
                img.setAttribute('src','menina.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src','jovemmulher.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src','mulheradulta.png')
            }else {
                //Idoso
                img.setAttribute('src','mulheridosa.png')
            }
                
        }

        res.style.textAlign = 'center'        
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        
    }

}