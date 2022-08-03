function converter(){    
    let real= prompt ("Quantos R$ você tem na sua carteira?")

    if( real <=0){
        alert("Valor inválido. Tente novamente.")
    }else{ 
    
        let elemento= document.createElement('p')
        res = document.getElementById('res') 
       


        let dolar= Number(real) * 5.20
        elemento.innerHTML+= `<br> R$ ${real} real(s), corresponde a US$ ${dolar} dolar(s) americano.`
        res.appendChild(elemento)
    }
    
}