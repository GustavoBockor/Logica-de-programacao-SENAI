// ============================================================
//   ATIVIDADE 10 – Estruturas de Controle (Repetição - While)
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – While simples
// ------------------------------------------------------------
// a) Declare uma variável 'n' com valor 1.
// b) Usando while, exiba os números de 1 a 7 no console.
// c) Ao final, exiba: "Fim da contagem!"

// → Seu código aqui:
let n = 1
while (n<= 7) {
  console.log(`Numero: ${n}`);
  n++; 
}
console.log("Fim da contagem");



// ------------------------------------------------------------
// EXERCÍCIO 2 – Contagem regressiva
// ------------------------------------------------------------
// a) Declare uma variável 'regressiva' com valor 10.
// b) Usando while, exiba a contagem de 10 até 1.
// c) Ao final, exiba: "Lançamento ON!"

// → Seu código aqui:
let regressiva = 10
while(regressiva>=0)   {
    
    console.log(`Numero:${regressiva}`)
regressiva--;
}
console.log("Lancamento ON!")



// ------------------------------------------------------------
// EXERCÍCIO 3 – Validação de entrada
// ------------------------------------------------------------
// a) Usando while, peça ao usuário um número entre 1 e 5 e repita enquanto o valor for inválido.
//    A cada entrada inválida, exiba: "Valor fora do intervalo. Tente novamente."
// b) Quando o valor for válido, exiba: "Você escolheu: <número>"

// → Seu código aqui:
// const ler = require('readline-sync')
// let numero = ler.questionInt("Escolha um numero de 1 a 5: ")
// while (numero < 1 || numero > 5) {
//     console.log("Valor fora do intervalo. Tente novamente.");
//     numero = ler.questionInt("Escolha um numero de 1 a 5: ");
//   }
  
//   console.log(`Você escolheu: ${numero}`);


// ------------------------------------------------------------
// EXERCÍCIO 4 – Acumulador com while
// ------------------------------------------------------------
// a) Usando while, peça ao usuário números até que ele digite 0.
// b) Acumule a soma de todos os números digitados.
// c) Conte quantos números foram digitados (exceto o 0).
// d) Ao final, exiba a soma, a quantidade de numeros digitados e quais foram os números digitados.

// → Seu código aqui:
// const ler = require('readline-sync')



// let numero = -1;
// let soma = 0;
// let contador = 0;
// let lista = "";

// while (numero !== 0) {
//     numero = ler.questionInt("Digite um numero (0 para parar): ");

//     if (numero !== 0) {
//         soma = soma + numero;
//         contador = contador + 1;
//         lista = lista + numero + " ";
//     }
// }

// console.log("_______________________________");
// console.log("Soma:", soma);
// console.log("Quantidade de numeros:", contador);
// console.log("Numeros digitados:", lista);


// ------------------------------------------------------------
// EXERCÍCIO 5 – Média com while e validação
// ------------------------------------------------------------
// a) Usando while, peça ao usuário notas de 0 a 10 até que ele digite -1 para encerrar.
//    Se a nota for inválida (< 0 e diferente de -1, ou > 10), exiba: "Nota inválida." e peça novamente.
// b) Calcule e exiba a média.

// → Seu código aqui:
const ler = require('readline-sync')
let nota = 0;
let soma = 0;
let contador = 0;

while (nota !== -1) {
    nota = ler.questionInt("Digite uma nota (ou -1 para encerrar):");

    if (nota < 0 && nota !== -1 || nota > 10) {
        console.log("Nota inválida.");
    } else if (nota !== -1) {
        soma += nota;
        contador++;
    }
}

if (contador > 0) {
    let media = soma / contador;
    console.log("Média:", media);
} else {
    console.log("Nenhuma nota válida foi inserida.");
}




// ------------------------------------------------------------
// EXERCÍCIO 6 – Do...while: menu simples
// ------------------------------------------------------------
// a) Usando do...while, exiba um menu repetitivo:
//    1 – Exibir hora atual  (use: new Date().toLocaleTimeString())
//    2 – Exibir data atual  (use: new Date().toLocaleDateString())
//    0 – Sair
// b) Processe a opção com switch/case.
// c) O menu deve repetir até o usuário escolher 0.

// → Seu código aqui:
const ler = require('readline-sync');

let opcao;

do {
    console.log("\n1 - Hora atual");
    console.log("2 - Data atual");
    console.log("0 - Sair");

    opcao = ler.questionInt("Escolha uma opção: ");

    switch (opcao) {
        case 1:
            console.log("Hora:", new Date().toLocaleTimeString());
            break;
        case 2:
            console.log("Data:", new Date().toLocaleDateString());
            break;
        case 0:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida!");
    }

} while (opcao !== 0);

// ------------------------------------------------------------
// EXERCÍCIO 7 – Adivinhe o número (while)
// ------------------------------------------------------------
// a) Gere um número secreto aleatório de 1 a 50 (Math.random())
// b) Peça o nome do jogador.
// c) Usando while, repita até o jogador acertar:
//    - Peça um palpite.
//    - Se muito alto, exiba: "Muito alto! Tente menor."
//    - Se muito baixo, exiba: "Muito baixo! Tente maior."
//    - Se acertou, saia do while.
// d) Ao acertar, exiba:
//    "<nome> acertou após <tentativas> tentativa(s)! O número era <secreto>."

// → Seu código aqui:
const ler = require('readline-sync');

let secreto = Math.floor(Math.random() * 50) + 1;
let nome = ler.question("Digite seu nome: ");
let palpite = 0;
let tentativas = 0;

while (palpite !== secreto) {
    palpite = ler.questionInt("Digite seu palpite (1 a 50): ");
    tentativas++;

    if (palpite > secreto) {
        console.log("Muito alto! Tente menor.");
    } else if (palpite < secreto) {
        console.log("Muito baixo! Tente maior.");
    }
}

console.log(`${nome} acertou após ${tentativas} tentativa(s)! O número era ${secreto}.`);


// ------------------------------------------------------------
// EXERCÍCIO 8 – Tabuada com while
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro.
// b) Usando while, exiba a tabuada desse número de 1 a 10:
//    Formato para exibição: "<número> x <i> = <resultado>"

// → Seu código aqui:
const ler = require('readline-sync');

let numero = ler.questionInt("Digite um número: ");
let i = 1;

while (i <= 10) {
    console.log(`${numero} x ${i} = ${numero * i}`);
    i++;
}

// ------------------------------------------------------------
// EXERCÍCIO 9 – Contador com condição composta
// ------------------------------------------------------------
// a) Declare 'saldo' com valor 1000 e 'rodada' com valor 0.
// b) Usando while, simule saques aleatórios enquanto o saldo for maior que 0 E a rodada for menor que 10:
//    - A cada rodada, gere um saque aleatório de 50 a 200:
//    - Se o saque for maior que o saldo, exiba: "Saldo insuficiente. Fim!" e encerre.
//    - Caso contrário, desconte do saldo e exiba:
//      "Rodada <rodada>: sacou R$ <saque> | Novo saldo: R$ <saldo>"
// c) Ao final, exiba o saldo restante e o total de rodadas.

// → Seu código aqui:
let saldo = 1000;
let rodada = 0;

while (saldo > 0 && rodada < 10) {
    let saque = Math.floor(Math.random() * 151) + 50; // 50 a 200
    rodada++;

    if (saque > saldo) {
        console.log("Saldo insuficiente. Fim!");
        break;
    }

    saldo -= saque;
    console.log(`Rodada ${rodada}: sacou R$ ${saque} | Novo saldo: R$ ${saldo}`);
}

console.log("Saldo final:", saldo);
console.log("Total de rodadas:", rodada);


// ------------------------------------------------------------
// EXERCÍCIO 10 – Do...while: cadastro em loop
// ------------------------------------------------------------
// a) Crie um array vazio 'contatos'.
// b) Usando do...while, repita:
//    - Peça nome e telefone do contato.
//    - Adicione um objeto { nome, telefone } ao array.
//    - Pergunte: "Adicionar outro contato?" (keyInYN()).
//    - Repita enquanto o usuário responder que sim.
// c) Ao sair do loop, exiba todos os contatos com console.table().
// d) Exiba: "Total de contatos cadastrados: <qtd>"

// → Seu código aqui:
const ler = require('readline-sync');

let contatos = [];
let continuar;

do {
    let nome = ler.question("Nome: ");
    let telefone = ler.question("Telefone: ");

    contatos.push({ nome, telefone });

    continuar = ler.keyInYN("Adicionar outro contato?");
} while (continuar);

console.table(contatos);
console.log("Total de contatos cadastrados:", contatos.length);