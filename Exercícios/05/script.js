var numero= document.getElementById('txtn')
var lista=document.getElementById('lista')
var res= document.getElementById('res')
var valores=[]


function isNumero(n){       
    if(Number(n)>=1 && Number(n)<= 100){
        return true
    }else{        
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n))!=-1){// -1 -1 indica que o valor não foi encontrado na lista.
        return true
    }else{
        return false
    }

}

function adicionar(){
    if(isNumero(numero.value) && !inLista (numero.value,valores)){
        valores.push(Number(numero.value))
        var item= document.createElement('option') //para adicionar no select
        item.text= `valor ${numero.value} adicionando.`
        lista.appendChild(item)
        
    } else{
        alert('Valor inválido ou já encontrado na lista.')
    }
    numero.value=''// para apagar o valor após executar o comando
    numero.focus() // para o cursor voltar a piscar
    res.innerHTML='' 
}
function finalizar(){
    if(valores.length==0){
        alert('Adicione valores antes de finalizar')
    }else{
       var total= valores.length
       var maior = valores[0]
       var menor = valores[0]
       var soma = 0
       var media = 0
       for (var pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor)
            menor = valores[pos]
       }

       media = soma / total
       
       res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>` 
       res.innerHTML +=`<p>O maior valor informado foi ${maior}.</p>`
       res.innerHTML+= `<p>O menor valor informado foi ${menor}.</p>`   
       res.innerHTML +=`<p>Somando todos os valores temos ${soma}.</p>`   
       res.innerHTML +=`<p>A média dos valores digitados é ${media}.</p>`
       

    }
}