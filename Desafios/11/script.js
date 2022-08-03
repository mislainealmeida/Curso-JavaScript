function verificar(){
    let ano= Number(prompt('Qual é o ano que você deseja verificar? '))
    

    if(ano<0){
        alert('Ano inválido. Digite novamente.')
    }else{
        let elemento= document.createElement('p')
        elemento.innerHTML= `<h4>Analisando o ano de ${ano}...</h4>`
        let res= document.getElementById('res')

        if(ano %4 !=0){
            elemento.innerHTML += `<br> O ano ${ano} <mark style="background-color:rgba(250, 8, 8, 0.486)>NÃO É BISSEXTO ❌</mark>`
        }else{
            if(ano % 100 != 0 && ano %400 == 0){
                elemento.innerHTML += `<br> O ano ${ano} <mark style="background-color:rgba(250, 8, 8, 0.486)>NÃO É BISSEXTO ✔️</mark>`
            }else{
                elemento.innerHTML += `<br> O ano ${ano}  <mark style="background-color:rgba(0, 128, 0, 0.521)>É BISSEXTO ❌</mark>`
            }
    
        }
       res.appendChild(elemento)        
    }    

    
    
}