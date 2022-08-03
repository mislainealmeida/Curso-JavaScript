function converter(){
    let metros= prompt('Digite uma distância em metros (m).')     

    if(metros >0){
        let elemento= document.createElement('p')
        elemento.innerHTML= `A distância de ${metros} metros,  corresponde a...`
        let res= document.getElementById('res')
        
        let km=  Number(metros) /1000
        let hm= Number(metros) / 100
        let dam=Number(metros) / 10
        let dm=Number(metros) * 10
        let cm=Number(metros) * 100
        let mm=Number(metros) *1000

         
        elemento.innerHTML+=`<br>${km} quilômetros (Km)`
        elemento.innerHTML+= `<br>${hm} hectômetros (Hm)`
        elemento.innerHTML+= `<br>${dam} decâmetros (Dam)`
        elemento.innerHTML+= `<br>${dm} decímetros (dm)`
        elemento.innerHTML+= `<br>${cm} centímetros (cm)`
        elemento.innerHTML+= `<br>${mm} milímetros (mm)` 
        res.appendChild(elemento)
        
     
        
        
    }else{
        alert('Valor inválido. Tente novamente.')
        
        

    }
    
}

