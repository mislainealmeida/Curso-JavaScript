
function comprar(){
    let produto= prompt ('Qual produto você está comprando?')
    let preco= prompt (`Qual o preco do ${produto} ?`)
    let dinheiro= prompt ('Qual o valor entregue para pagamento?')
    let troco = calcularTroco(dinheiro,preco)
    if(troco > 0){
        alert(`Você comprou ${produto}, que custou R$ ${preco}. \nDeu R$${dinheiro} em dinheiro e vai receber R$${troco} de troco`)
    } if(troco == 0)
        alert('O valor está exato, não há troco.')
}

function calcularTroco(dinheiro,preco){
    let calculo = Number(dinheiro) - Number(preco)
    if(calculo >= 0){
        return calculo
    }
     else{
        alert('Valor do produto não atingido. Digite um valor válido!')
        
    }

}    