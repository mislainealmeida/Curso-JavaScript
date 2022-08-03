function reajustar(){
    let nome= prompt('Qual o nome do funcionário?')
    let sal= prompt(`Qual o salário de ${nome} ?`)
    let porc= prompt(`Qual será a porcentagem de reajuste do salário de ${nome} ?`)
    let salario=Number(sal)
    let porcentagem=Number(porc)


    if(porcentagem==0){
        alert('Não há reajuste.')
    }else{
        let aumento= (salario*porcentagem)/100
        let salarioFinal= salario +  aumento
        let elemento= document.createElement('p')
        let res= document.getElementById('res')
    
        elemento.innerHTML += `<br> O salário atual de ${nome} é R$ ${salario}.`    
        elemento.innerHTML += `<br>Com um aumento de ${porcentagem}%, o salário vai aumentar R$ ${aumento} no próximo mês.`
        elemento.innerHTML += `<br> E a partir daí, ${nome} vai passar a ganhar R$ ${salarioFinal}.`
    
        res.appendChild(elemento)
        
        

    }


}
