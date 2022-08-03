function verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.getElementById('res')
    if(fano.value.legth==0 || Number(fano.value) > ano){
        alert('[ERRO] Tente novamente')
    } else{
        var fsex=document.getElementsByName('radsex')
        var idade=ano-Number(fano.value)
        var genero=''
       var img= document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <12){
               img.setAttribute('src', 'foto-criancaH.jpg')
            }
            else if(idade <22){
                img.setAttribute('src', 'foto-jovemH.jpg')
            }
            else  if(idade <60){
                img.setAttribute('src', 'foto-adultoH.jpg')
            }
            else {
                img.setAttribute('src', 'foto-idosoH.jpg')
            }
         } else if(fsex[1].checked){
            genero= 'Mulher'
            if(idade >=0 && idade <12){
                img.setAttribute('src', 'foto-criancaF.jpg')
            }
            else if(idade <22){
                img.setAttribute('src', 'foto-jovemF.jpg')                
            }
            else if(idade<60){
                img.setAttribute('src', 'foto-adultoF.jpg')                
            }
            else {
                img.setAttribute('src', 'foto-idosoF.jpg')  
            }  
        }   
            
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
