for (var i = 0; i < 10; i++) {
    var letra = prompt('Digite uma letra:');
    
    if (letra === null || letra === "") {
        break;
    }
    
    if (letra.length === 1 && letra.match(/[a-zA-Z]/)) {
        letras.push(letra);
    } else {
        alert('Por favor, digite uma única letra.');
        i--; 
    }
}

console.log('a) A primeira letra digitada: ' + letras[0]);
console.log('b) A quarta letra digitada: ' + letras[3]);
console.log('c) A quinta letra digitada: ' + letras[4]);
console.log('d) A última letra digitada: ' + letras[letras.length - 1]);
console.log('e) O tamanho da lista: ' + letras.length);
