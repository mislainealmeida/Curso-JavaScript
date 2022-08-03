function converter(){
    let celsius = prompt('Digite a temperatura em graus Celsius.')    
    let elemento= document.createElement('p')    
    res = document.getElementById('res')   
    elemento.innerHTML= `A temperatura de ${celsius}° Celsius,  corresponde a...` 

    let f= (Number(celsius)*1.8) +32
    let k= Number(celsius) + 273.15   

    elemento.innerHTML+= `<br>${f}° Fahrenheit (F)`    
    elemento.innerHTML += `<br>${k}° Kelvin (K)`
    
    res.appendChild(elemento)   
    
}
function limpar(){
    res.innerHTML=''
}

