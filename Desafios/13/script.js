function adicionar(){
    let nome = prompt('Qual é o nome do aluno? ')
    let nota1= Number(prompt(`Primeira nota de ${nome}`))
    let nota2= Number(prompt(`Primeira nota de ${nome}`))

    let elemento= document.createElement('p')
    let mark=document.createAttribute('mark')
    let res= document.getElementById('res')

    let media= (nota1+nota2)/2
    if(media<3.0){
        elemento.innerHTML+=`<br> Com as notas ${nota1} e ${nota2}, a <strong>média de ${nome} é ${media.toFixed(2)}</strong>`
        elemento.innerHTML+=`
        <br><mark style="background-color:rgba(250, 8, 8, 0.486)">REPROVADO ❌</mark>`
    } else if(media >3.0 && media < 6.0){
        elemento.innerHTML+=`<br> Com as notas ${nota1} e ${nota2}, a <strong>média de ${nome} é ${media}</strong>`
        elemento.innerHTML+=`<br> <mark style="background-color: rgba(255, 192, 203, 0.473)">RECUPERAÇÃO</mark>`
    }
    else{
        elemento.innerHTML+=`<br> Com as notas ${nota1} e ${nota2}, a <strong>média de ${nome} é ${media}</strong>`
        elemento.innerHTML+=`<br> <mark style="background-color:rgba(0, 128, 0, 0.521)">APROVADO ✔️</mark>`
    }
    res.appendChild(elemento)

}
