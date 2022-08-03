function gerar(){
    var numero= document.getElementById('txtn')
    var tabuada= document.getElementById('tab')
    if(numero.value.length == 0){
        alert('Número inválido. Tente novamente')        
    }else{
        var num= Number(numero.value)
        var c=1
        tab.innerHTML=''// para limpar a tabuada. 
        while(c<=10){
            var item=document.createElement('option')
            item.text= `${num} x ${c} = ${num*c}`
            item.value= `tabela ${c}` // usado para selecionar o item, pro JS não faz muito sentido, mas usa-se para outras linguagens
            tab.appendChild(item)
            c++
        }
    }  
}