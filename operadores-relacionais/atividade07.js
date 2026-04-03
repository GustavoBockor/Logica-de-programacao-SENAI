// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
// 
//  Pares de valores:
//   1) 10 e 10
//    2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

//  → Seu código aqui:
//  Lista de pares
//  Par 1
// console.log(`10 == 10 → ${10 == 10}`);
// console.log(`10 === 10 → ${10 === 10}`);
// console.log('---');

// console.log(`10 == "10" → ${10 == "10"}`);
// console.log(`10 === "10" → ${10 === "10"}`);
// console.log('---');

// console.log(`0 == false → ${0 == false}`);
// console.log(`0 === false → ${0 === false}`);
// console.log('---');

// console.log(`null == undefined → ${null == undefined}`);
// console.log(`null === undefined → ${null === undefined}`);
// console.log('---');

// console.log(`"JS" == "JS" → ${"JS" == "JS"}`);
// console.log(`"JS" === "JS" → ${"JS" === "JS"}`);


//  ------------------------------------------------------------
//  EXERCÍCIO 2 – Comparando com != e !==
//  ------------------------------------------------------------
//  Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
// 
// Pares de valores:
//   1) 5 e 5
//    2) 5 e "5"
//   3) 7 e 3
//    4) true e 1

//  → Seu código aqui:
// let resultado1 = 5 != 5;
// let resultado2 = 5 !== 5;
// console.log("5 != 5 →", resultado1);
// console.log("5 !== 5 →", resultado1);
// console.log("_______________________________");

// let resultado3 = 5 != '5';
// let resultado4 = 5 !== '5';
// console.log("5 != '5' →", resultado2);
// console.log("5 !== '5' →", resultado2);
// console.log("_______________________________");


// let resultado5 = 7 != 3;
// let resultado6 = 7 !== 3;
// console.log("7 != 3 →", resultado3);
// console.log("7 !== 3 →", resultado3);
// console.log("_______________________________");

// let resultado7= true != 1;
// let resultado8 = true !== 1;
// console.log("true != 1 →", resultado4);
// console.log("true !== 1 →", resultado4);



// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
//  ------------------------------------------------------------
//  a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
//  b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
//  c) Exiba cada resultado com template literal e verificação ternária no formato:
//     "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// // → Seu código aqui:
// let salarioA = 3500
// let salarioB = 4200
// let maior = (salarioA>salarioB)
// let menor = (salarioA<salarioB)
// let igualMaior = (salarioA>=salarioB)
// let igualMenor = (salarioA<=salarioB)
// let igual = (salarioA === salarioB)
// console.log(salarioA>salarioB)
// console.log(salarioA<salarioB)
// console.log(salarioA>=salarioB)
// console.log(salarioA<=salarioB)
// console.log(salarioA === salarioB)



// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:
// let estoque = 0
// let temEstoque = estoque>0
// let estoqueZerado = estoque === 0
// let temperatura = 36.5
// let febre = temperatura >=37.6
// console.log(`Estoque:${estoque}`)
// console.log(`Disponibilidade do estoque:${temEstoque}`)
// console.log(`Temperatura:${temperatura}`)
// console.log(`Febre:${febre}`)




// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:
// let num1 = 10
// let num2 = 20
// let maior = num1>num2
// let menor = num1<num2
// let igualMaior = num1===num2
// let igualMenor = num1>=num2
// console.log(`Maior:${maior}`)
// console.log(`Menor:${menor}`)
// console.log(`Igual:${igualMaior}`)
// console.log(`Igual Menor:${igualMenor}`)




// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:
// let ler = require('readline-sync')
// let preco = (ler.question("Qual o preco do produto?"))
// const precoMaximo = 100
// let estaDentroDoOrcamento = preco<=precoMaximo
// let esteItemEhCaro = preco>precoMaximo
// console.log(`Preço informado:${preco}`)
// console.log(`Dentro do orçamento (≤ R$ ${precoMaximo})? : ${estaDentroDoOrcamento ? "Sim" : "Não"}`)
// console.log(`Item caro (> R$ ${precoMaximo})? : ${esteItemEhCaro ? "Sim" : "Não"}`)

// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:
let ler = require('readline-sync');

let cadastro = [
    {
        nome: ler.question("Digite o nome da primeira pessoa: "),
        idade: Number(ler.question("Digite a idade da primeira pessoa: "))
    },
    {
        nome: ler.question("Digite o nome da segunda pessoa: "),
        idade: Number(ler.question("Digite a idade da segunda pessoa: "))
    }
];

let pessoa1 = cadastro[0];
let pessoa2 = cadastro[1];

let maioridade1 = ["menor de idade", "maior de idade"][+(pessoa1.idade >= 18)];
let maioridade2 = ["menor de idade", "maior de idade"][+(pessoa2.idade >= 18)];

let idadeMaisVelha = ["As duas pessoas têm a mesma idade.", pessoa1.nome + " é mais velho.", pessoa2.nome + " é mais velho."][
    pessoa1.idade === pessoa2.idade ? 0 : (pessoa1.idade > pessoa2.idade ? 1 : 2)
];
console.log("Idade de " + pessoa1.nome + " é " + pessoa1.idade + " e ele é " + maioridade1 + ".");
console.log("Idade de " + pessoa2.nome + " é " + pessoa2.idade + " e ele é " + maioridade2 + ".");
console.log(idadeMaisVelha);


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:
let ler = require('readline-sync');
let alunos = [
    {
    nome: ler.question("Digite o nome do primeiro aluno: "),
    notas: [ ler.question("Digite a primeira nota: ") * 1,
    ler.question("Digite a segunda nota: ") * 1,
     ler.question("Digite a terceira nota: ") * 1 ]
    },
    {
        nome: ler.question("Digite o nome do segundo aluno: "),
        notas: [ ler.question("Digite a primeira nota: ") * 1,
                 ler.question("Digite a segunda nota: ") * 1,
                 ler.question("Digite a terceira nota: ") * 1 ]
    }
];

let mediaAluno1 = (alunos[0].notas[0] + alunos[0].notas[1] + alunos[0].notas[2]) / 3;
let mediaAluno2 = (alunos[1].notas[0] + alunos[1].notas[1] + alunos[1].notas[2]) / 3;

console.log(`Aluno com maior média: ${mediaAluno1 > mediaAluno2 ? alunos[0].nome : (mediaAluno2 > mediaAluno1 ? alunos[1].nome : "Empate")}`);
console.log(`Aluno com primeira maior nota: ${alunos[0].notas[0] > alunos[1].notas[0] ? alunos[0].nome : (alunos[1].notas[0] > alunos[0].notas[0] ? alunos[1].nome : "Empate")}`);
console.log(`Aluno com segunda maior nota: ${alunos[0].notas[1] > alunos[1].notas[1] ? alunos[0].nome : (alunos[1].notas[1] > alunos[0].notas[1] ? alunos[1].nome : "Empate")}`);
console.log(`Aluno com terceira maior nota: ${alunos[0].notas[2] > alunos[1].notas[2] ? alunos[0].nome : (alunos[1].notas[2] > alunos[0].notas[2] ? alunos[1].nome : "Empate")}`);

console.log("_______________________________");
