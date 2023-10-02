var idade = parseInt(prompt("Digite sua idade:"));

if (idade < 16) {
    console.log("Você não pode votar, pois é menor de 16 anos.");
} else if (idade >= 16 && idade <= 17) {
    console.log("Seu voto é opcional, pois você tem entre 16 e 17 anos.");
} else if (idade >= 18 && idade <= 70) {
    console.log("Você é obrigado(a) a votar, pois tem entre 18 e 60 anos.");
} else if (idade > 70) {
    console.log("Seu voto é opcional, pois você tem mais de 60 anos.");
} else {
    console.log("Idade inválida. Por favor, insira uma idade válida.");
}
