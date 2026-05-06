// ============================================================
//   ATIVIDADE 11 – Interrompendo Laços (break / continue / return)
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Break simples
// ------------------------------------------------------------
// a) Use um for de 1 a 100.
// b) Exiba cada número.
// c) Quando o número for divisível por 7 E maior que 30, exiba:
//    "Primeiro múltiplo de 7 acima de 30: <número>" e encerre o laço com break.

// → Seu código aqui:
for (let i = 1; i <= 100; i++) {
    console.log(i);
  
    if (i % 7 === 0 && i > 30) {
      console.log(`Primeiro múltiplo de 7 acima de 30: ${i}`);
      break;
    }
  }
  

// ------------------------------------------------------------
// EXERCÍCIO 2 – Continue: filtrando vogais
// ------------------------------------------------------------
// a) Utilizando o array:
    //   const letras = ['a', 'b', 'c', 'e', 'f', 'i', 'k', 'o', 'p', 'u'];
// b) Usando for e continue, exiba apenas as consoantes
//    (pule as vogais: a, e, i, o, u).
// c) Ao final, exiba: "Consoantes exibidas: <quantidade>"

// → Seu código aqui:
const letras = ['a', 'b', 'c', 'e', 'f', 'i', 'k', 'o', 'p', 'u'];
let consoantes = 0;

for (let i = 0; i < letras.length; i++) {
  let letra = letras[i];

  if (['a', 'e', 'i', 'o', 'u'].includes(letra)) {
    continue;
  }

  console.log(letra);
  consoantes++;
}

console.log(`Consoantes exibidas: ${consoantes}`);





// ------------------------------------------------------------
// EXERCÍCIO 3 – Return: verificar aprovação
// ------------------------------------------------------------
// a) Dado o array de notas:
// const notasAlunoA = [8, 7, 6.2, 9, 5, 7.5, 9, 8.9, 2.2, 10, 7.4];
// const notasAlunoB = [8, 4.5, 6.3, 9];

// b) Percorra ambos os array com for - um for para cada array.
//    Se encontrar uma nota menor que 5, retorne imediatamente a mensagem:
//    "Reprovado na nota <nota> (índice <i>)" e pare o loop
// c) Se nenhuma nota for menor que 5, retorne: "Aprovado!"
// d) Teste com dois arrays:

// → Seu código aqui:
const notasAlunoA = [8, 7, 6.2, 9, 5, 7.5, 9, 8.9, 2.2, 10, 7.4];
const notasAlunoB = [8, 4.5, 6.3, 9];

let resultadoA = "Aprovado!";

for (let i = 0; i < notasAlunoA.length; i++) {
  if (notasAlunoA[i] < 5) {
    resultadoA = `Reprovado na nota ${notasAlunoA[i]} (índice ${i})`;
    break;
  }
}

console.log("Aluno A:", resultadoA);

let resultadoB = "Aprovado!";

for (let i = 0; i < notasAlunoB.length; i++) {
  if (notasAlunoB[i] < 5) {
    resultadoB = `Reprovado na nota ${notasAlunoB[i]} (índice ${i})`;
    break;
  }
}

console.log("Aluno B:", resultadoB);



// ------------------------------------------------------------
// EXERCÍCIO 4 – Break com input: adivinhe a palavra
// ------------------------------------------------------------
// a) Defina uma palavra secreta (ex: "javascript").
// b) Usando while(true) e break, repita:
//    - Peça ao usuário uma tentativa.
//    - Se acertar: exiba "Parabéns! Você acertou!" e pare o loop.
//    - Se errar: exiba "Errou! Tente novamente."
// c) Conte as tentativas e exiba ao final:
//    "Você precisou de <tentativas> tentativa(s)."

// → Seu código aqui:
const lerTeclado = require('readline-sync')
const palavraSecreta = "javascript";
let tentativas = 0;

while (true) {
  let tentativa = lerTeclado.question("Digite a palavra: ");
  tentativas++;

  if (tentativa === palavraSecreta) {
    console.log("Parabéns! Você acertou!");
    break;
  } else {
    console.log("Errou! Tente novamente.");
  }
}

console.log(`Você precisou de ${tentativas} tentativa(s).`);



// ------------------------------------------------------------
// EXERCÍCIO 5 – Continue com input: somando positivos
// ------------------------------------------------------------
// a) Usando while, peça números ao usuário até que ele digite 0.
// b) Se o número for negativo, exiba "Ignorando número negativo."
//    e ignore esse número para qualquer cálculo.
// c) Acumule e também some os números positivos.
// d) Ao digitar 0, saia do laço e exiba:
//    "Soma dos positivos: <soma>"
//    "Quantidade de positivos: <quantidade>"

// → Seu código aqui:
let soma = 0;
let quantidade = 0;

while (true) {
  let numero = Number(prompt("Digite um número (0 para sair): "));

  if (numero === 0) {
    break;
  }

  if (numero < 0) {
    console.log("Ignorando número negativo.");
    continue;
  }

  soma += numero;
  quantidade++;
}

console.log(`Soma dos positivos: ${soma}`);
console.log(`Quantidade de positivos: ${quantidade}`);



// ------------------------------------------------------------
// EXERCÍCIO 6 – Return: busca em array de objetos
// ------------------------------------------------------------
// a) Dado o array de alunos:
//    const alunos = [
//      { nome: "Ana", nota: 8.5 },
//      { nome: "Bruno", nota: 6.0 },
//      { nome: "Carlos", nota: 9.2 },
//      { nome: "Diana", nota: 4.8 },
//      { nome: "Eva", nota: 7.1 },
//      { nome: "Fernando", nota: 3.8 }
//    ];
// b) Crie um array que retorna o primeiro aluno com nota < 5.
//    Se não houver, retorna null.

// → Seu código aqui:
const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 6.0 },
    { nome: "Carlos", nota: 9.2 },
    { nome: "Diana", nota: 4.8 },
    { nome: "Eva", nota: 7.1 },
    { nome: "Fernando", nota: 3.8 }
  ];
  
  let reprovado = null;
  
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota < 5) {
      reprovado = alunos[i];
      break;
    }
  }
  
  console.log(reprovado);


// ------------------------------------------------------------
// EXERCÍCIO 7 – Continue: relatório de vendas
// ------------------------------------------------------------
// a) Dado o array:
    //   const vendas = [320, -1, 150, -1, 80, 410, -1, 200];
//    (valores -1 representam vendas canceladas)
// b) Usando for e continue, ignore as vendas canceladas (-1).
// c) Acumule o total das vendas válidas e conte quantas há.
// d) Exiba ao final:
//    "Vendas válidas: <quantidade>"
//    "Total arrecadado: R$ <total>"
//    "Ticket médio: R$ <média>"

// → Seu código aqui:

const vendas = [320, -1, 150, -1, 80, 410, -1, 200];
let total = 0;
let qtd = 0;

for (let i = 0; i < vendas.length; i++) {
  if (vendas[i] === -1) {
    continue;
  }

  total += vendas[i];
  qtd++;
}

let media = total / qtd;

console.log(`Vendas válidas: ${qtd}`);
console.log(`Total arrecadado: R$ ${total}`);
console.log(`Ticket médio: R$ ${media.toFixed(2)}`);

console.log("_______________________________");



// ------------------------------------------------------------
// EXERCÍCIO 8 – Break + continue juntos
// ------------------------------------------------------------
// a) Use um for de 1 a 50.
// b) Pule os múltiplos de 5 com continue.
// c) Pare o laço completamente quando a soma acumulada
//    dos números NÃO-múltiplos de 5 ultrapassar 200.
// d) Exiba cada número somado: "Somando: <i> | Acumulado: <soma>"
// e) Ao final: "Laço encerrado em i = <i> | Soma final: <soma>"

// → Seu código aqui:
let somaFinal = 0;
let ultimoI = 0;

for (let i = 1; i <= 50; i++) {

  if (i % 5 === 0) {
    continue;
  }

  somaFinal += i;
  console.log(`Somando: ${i} | Acumulado: ${somaFinal}`);

  if (somaFinal > 200) {
    ultimoI = i;
    break;
  }
}

console.log(`Laço encerrado em i = ${ultimoI} | Soma final: ${somaFinal}`);
