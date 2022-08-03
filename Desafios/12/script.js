function verificar(){
    let anterior= Number(prompt('Qual é o preço anterior do produto? '))
    let atual= Number(prompt('Qual é o preço atual do produto? '))

    let elemento= document.createElement('p')
    elemento.innerHTML= `<h4>Analisando os valores informados...</h4>`
    let res= document.getElementById('res')

    let diferenca= anterior -atual 
    let porcentagem= (atual*100)/anterior

    elemento.innerHTML+= `<br>O produto custava R$ ${anterior} e agora custa R$ ${atual}.`
    

    if(diferenca < 0){
       
        elemento.innerHTML+= `<br>Hoje o produto esta mais caro.`
       elemento.innerHtml+=`<br>O preço subiu R$ ${diferenca *-1} ao preço anterior.`
        elemento.innerHTML+=`<br>Uma variação de ${(porcentagem -100)}% pra cima.`  
             
    }else if(diferenca >0){
        elemento.innerHTML+= `<br>Hoje o produto esta mais barato.`
        elemento.innerHtml+=`<br>O preço caiu R$ ${diferenca} ao preço anterior.`
        elemento.innerHTML+=`<br>Uma variação de ${(100- porcentagem)}% pra baixo.`

    }else{
        elemento.innerHTML+=`<br>Não houve alteração no  preço do produto. `
    }        
       res.appendChild(elemento)
              
    }    

    
    
