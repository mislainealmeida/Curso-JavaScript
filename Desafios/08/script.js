function desconto(){
   
    let produto= prompt("Qual é o produto que você está comprando? ")
    let val= prompt (`´Qual o valor de ${produto}?`)
    let des= prompt(`Qual o desconto? `)
    let valor= Number(val)
    let desconto= Number(des)
    

    if(valor<=0 || desconto <0){
        alert('Valor inválido. Tente novamente!')
    }else{
        
        let elemento= document.createElement('p')
        let res = document.getElementById('res')
        

        let descontoFinal= (valor*desconto)/100
        let valorFinal= valor - descontoFinal
        
        
        elemento.innerHTML+= `<br> O preço original era de R$ ${valor}`
        
        elemento.innerHTML+= `<br> Você acaba de ganhar R$ ${descontoFinal} de desconto (-${desconto}%)`
        elemento.innerHTML+= `<br> No fim, você vai pagar R$ ${valorFinal}`
        
        res.appendChild(elemento)
        
    } 
    
    
   
}