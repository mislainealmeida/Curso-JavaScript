function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   var minuto = data.getMinutes()
   msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
   
   
    if(hora >=0 && hora < 12){
        //Bom dia
        img.src='imagens/manha.png'
        document.body.style.background=
        '#e2cd9f' 
        
       
    }else if (hora >=12 && hora < 18){
        //Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background=
        '#f9a04e'
        
    }else{
        //boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background='#354956'
    }
}
