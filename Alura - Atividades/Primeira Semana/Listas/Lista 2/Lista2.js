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