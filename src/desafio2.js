// Desafio 2

// Imagine que você está desenvolvendo um sistema de cadastro para uma empresa.
// Quando um usuário se cadastra, ele insere seu nome e sobrenome em campos separados.
// Você precisa juntar essas duas informações para formar o nome completo do
// usuário e exibir uma mensagem de boas-vindas.

// Resolução do Desafio 2
// O primeiro passo é solicitar que o usuário insira o seu nome e sobrenome

// Resolução do Desafio 2 - Segunda tentativa
const readline = require('readline');

// Criando uma interface para o código
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitando o primeiro nome do usuário
rl.question("Digite seu nome: ", function(nome) {
    // Solicitando o sobrenome do usuário
    rl.question("Digite seu sobrenome: ", function(sobrenome) {
        // Juntando o nome completo com a mensagem de boas-vindas
        var nomeCompleto = nome + " " + sobrenome;

        // Exibindo a mensagem no console
        console.log("Seja bem-vindo(a), " + nomeCompleto + "!");

        // Fechando a interface
        rl.close();
    });
});
