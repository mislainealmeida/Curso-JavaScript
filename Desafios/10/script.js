function calcular(){
    let A= prompt('Digite o valor de a')
    let B= prompt('Digite o valor de b')
    let C= prompt('Digite o valor de c')

    let a= Number(A)
    let b=Number(B)
    let c= Number(C)

    let delta= (b*b) - (4*a*c)
  
    let elemento= document.createElement('p')
    let res= document.getElementById('res')

    elemento.innerHTML += `<br> A equação atual é: <strong>${a}x&sup2  + ${b}x + ${c} = 0 </strong>`
    elemento.innerHTML += `<br>O cálculo realizado foi: <strong>&#916 = ${b}&sup2 - 4 . ${a} . ${c}</strong>`
    elemento.innerHTML+=`<br>O valor calculado foi: <mark><strong>&#916 = ${delta}</strong></mark>`
    
    
    res.appendChild(elemento)


}