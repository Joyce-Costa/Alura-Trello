let idade = parseInt(prompt('Mas antes de tudo, digite sua idade:'))

if(idade<18) {
    let anos = 18 - idade
    alert('Você infelizmente não pode abrir uma conta em nosso banco, você não atingiu a idade média')
    alert(`Porém fique tranquilo(a)! daqui ${anos} anos, você poderá abrir sua conta, e nós esperaremos ansiosos por esse dia!`)
} else {
    alert(`Tudo certinho ${nome}! Aguarde um momento.`)
}
