
// Desafio 1
//Você foi chamado para ajudar a pintar uma parede em uma casa.
// A parede tem formato retangular, e você precisa saber quantos metros quadrados de tinta serão necessários para cobri-la. Para isso, você deve calcular a área da parede.
// A parede tem 4 metros de altura e 5 metros de largura.

// Resolução do Desafio 1
// Para calcular a área de um retângulo, usamos a seguinte fórmula:
// area = largura * altura;

// Dimensões da parede (largura e altura em metros)
var larguraParede = 5;
var alturaParede = 4;

// Calculando a área da parede
var areaParede = larguraParede * alturaParede;

// Exibindo o resultado no console
console.log("A área da parede é de " + areaParede + " metros quadrados.");

//-------------------------------------------------------------------------------------------------

// Desafio 3

// Você está trabalhando no departamento de recursos humanos de uma empresa, e precisa
// calcular quantos dias um funcionário já viveu até agora, com base na idade informada.
// O funcionário informa sua idade em anos, e você deve converter esse valor para dias,
// considerando que todos os anos têm 365 dias.

// Resolução do Desafio 3
// Idade do funcionário em anos
var idadeEmAnos = 30;

// Calculando anos em dias
var idadeEmDias = idadeEmAnos * 365;

// Exibindo o resultado no console
console.log("O funcionário viveu aproximadamente " + idadeEmDias + " dias.");

//-------------------------------------------------------------------------------------------------


// Desafio 4

// Você trabalha em uma empresa de eventos, e foi solicitado a calcular quanto tempo
// um evento durou. Você recebeu o total de minutos que o evento durou, mas precisa
// converter esse valor em horas e minutos para gerar um relatório. Por exemplo,
//  se o evento durou 135 minutos, você deve dizer que ele durou 2 horas e 15 minutos.

// Resolução do Desafio 4
// Duração total do evento em minutos
var duracaoEmMinutos = 135;
  
// Calculando horas e minutos usando divisão simples
var horas = duracaoEmMinutos / 60; // Duração em horas
var minutos = duracaoEmMinutos % 60; // O que falta em minutos

// Arredondando as horas para o inteiro mais próximo
var horasInteiras = Math.floor(horas);

// Exibindo o resultado no console
console.log("O evento durou " + horasInteiras + " horas e " + minutos + " minutos.");