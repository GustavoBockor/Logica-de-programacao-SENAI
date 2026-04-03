// ============================================================
//   ATIVIDADE 07 – Estruturas de Controle (If / Else)
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-07.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – If simples
// ------------------------------------------------------------
// a) Declare "pontos" com valor 120.
// b) Se "pontos" for maior que 100, exiba: "Nível alcançado!".
//    Mas se "pontos" for maior que 200, exiba somente: "Nível máximo alcançado!"

// → Seu código aqui:
// let pontos = 120;

// if (pontos > 200) {
//     console.log("Nível máximo alcançado!");
// } else if (pontos > 100) {
//     console.log("Nível alcançado!");
// }

// ------------------------------------------------------------
// EXERCÍCIO 2 – If / Else
// ------------------------------------------------------------
// a) Declare "hora" com o valor 14 (representando 14h).
// b) Se hora for menor que 12, exiba: "Bom dia!".
// c) Se hora for menor que 18, exiba: "Boa tarde!".
// d) Senão, exiba: "Boa noite!"

// → Seu código aqui:
// let hora = 14

// if (hora < 12) {
//     console.log("Bom dia!");
// } else if (hora > 18) {
//     console.log("Boa tarde!");
// }
// else {  
// console.log("Boa noite!");

// }




    // ------------------------------------------------------------
// EXERCÍCIO 3 – If / Else com input
// ------------------------------------------------------------
// a) Pergunte ao usuário sua idade usando questionInt().
// b) Se a idade for maior ou igual a 18, exiba: "Adulto".
//    Se a idade for menor que 12, exiba: "Criança".
//    Senão, exiba: "Jovem".

// → Seu código aqui:
// let lerTeclado = require('readline-sync');

// let idade = lerTeclado.questionInt("Digite sua idade: ");

// if (idade >= 18) {
//     console.log("Adulto");
// } else if (idade < 12) {
//     console.log("Criança");
// } else {
//     console.log("Jovem");
// }



// ------------------------------------------------------------
// EXERCÍCIO 4 – If / Else If / Else
// ------------------------------------------------------------
// a) Declare "notaAluno" com valor 6.8.
// b) Em uma variável "status", usando if/else if/else, armazene:
//    - nota >= 9     → "Aprovado com mérito"
//    - nota >= 7     → "Aprovado"
//    - nota >= 5     → "Recuperação"
//    - abaixo de 5   → "Reprovado"
// c) AO final, exiba a nota e a situação com template literal.

// → Seu código aqui:
// let notaAluno = 6.8
// let status;
// if(notaAluno>=9){
// status = "Aprovado com mérito"    
// }
// else if (notaAluno>=7) {
// status = "Aprovado"    
// }
// else if (notaAluno>=5) {
// status = "Recuperação"
// }
// else if  (notaAluno <5) {
// status  = "Reprovado"
// }
// console.log(`Nota:${notaAluno}  Status:${status}`)




// ------------------------------------------------------------
// EXERCÍCIO 5 – If / Else If / Else com input
// ------------------------------------------------------------
// a) Pergunte ao usuário a temperatura atual (questionFloat()).
// b) Classifique e exiba usando if/else if/else:
//    - temperatura < 10           → "Muito frio"
//    - temperatura >= 10 e < 18   → "Frio"
//    - temperatura >= 18 e <= 25  → "Agradável"
//    - temperatura > 25 e <= 35   → "Quente"
//    - temperatura > 35           → "Muito quente"

// → Seu código aqui:
// let lerTeclado = require ('readline-sync')
// let temperaturaAtual = lerTeclado.questionFloat("Qual a temperatura atual?") 
// if (temperaturaAtual<10) {
// console.log("Muito frio")
// }
// if (temperaturaAtual>=10)
// console.log("Frio")
// if (temperaturaAtual>=18) {
// console.log("Agradável")
// }
// if (temperaturaAtual>25) {
// console.log("Quente")    
// } 
// if (temperaturaAtual>35) {
// console.log("Muito quente")    
// }




// ------------------------------------------------------------
// EXERCÍCIO 6 – If aninhado
// ------------------------------------------------------------
// a) Pergunte ao usuário e armazene as informações em um objeto:
//    - Nome (question()).
//    - Se possui ingresso (keyInYN()).
//    - Sua idade (questionInt()).
// b) Se NÃO possui ingresso → exiba: "<Nome>, dirija-se à bilheteria."
//    Se possui ingresso:
//      - idade < 18  → "Meia-entrada: menor de idade."
//      - idade >= 60 → "Meia-entrada: melhor idade."
//      - caso contrário → "Entrada inteira."

// → Seu código aqui:
// let lerTeclado = require ('readline-sync')
// let pessoa = {
// nome: lerTeclado.question("Qual seu nome?"),
// ingresso: lerTeclado.keyInYN("Possui ingresso?"),
// idade: lerTeclado.questionInt("Qual sua idade?")
// }
// if (!pessoa.ingresso) {
// console.log(`${pessoa.nome},dirija-se à bilheteria.`)   
// }
// if (pessoa.idade<18) {
// console.log("Meia-entrada: menor de idade")
// }
//  if (pessoa.idade>=60) {
// console.log("Meia-entrada:melhor idade")    
// }
// if (pessoa.idade>18) {
// console.log("Entrada inteira")    
// }





// ------------------------------------------------------------
// EXERCÍCIO 7 – If com operadores lógicos (&&)
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome (question()).
//    - Idade (questionInt()).
//    - Se possui habilitação (keyInYN()).
// b) Armazene os dados em um objeto chamado "motorista".
// c) Para alugar um carro, o motorista precisa ter 21 anos ou mais E possuir habilitação.
//    - Se pode alugar → exiba: "<nome>, você pode alugar o veículo."
//    - Senão          → exiba: "<nome>, você não atende aos requisitos."

// → Seu código aqui:
// let lerTeclado = require ('readline-sync')
// let motorista = {
// nome: lerTeclado.question("Qual seu nome?"),
// idade: lerTeclado.questionInt("Qual sua idade?"),
// habilitação: lerTeclado.keyInYN("Possui habilitação?")
// }
// if (motorista.idade>21) {
// console.log(`${motorista.nome} você pode alugar o veículo`)   
// }
// if (motorista.idade<21) {
// console.log(`${motorista.nome} você não atende aos requisitos`)    
// }




// ------------------------------------------------------------
// EXERCÍCIO 8 – If com operadores lógicos (||)
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se é estudante.
//    - Se é idoso, com 60 anos ou mais.
// b) Se é estudante OU idoso → exiba: "Desconto de 50% aplicado!"
//    Senão → exiba: "Sem desconto. Preço cheio."

// → Seu código aqui:
// let lerTeclado = require ('readline-sync')
// let perguntas = {
// estudante: lerTeclado.keyInYN("Voce é estudante?"),
// idoso: lerTeclado.keyInYN("Tem 60 anos ou mais")
// }
// if (perguntas.estudante || perguntas.idoso) {
// console.log("Desconto de 50% aplicado!")
// }
// else {
// console.log("Sem desconto.Preço cheio.")    
// }


// ------------------------------------------------------------
// EXERCÍCIO 9 – Sistema de notas completo
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do aluno.
//    - Nota da prova 1.
//    - Nota da prova 2.
// b) Armazene os dados em um objeto "aluno" e calcule a média
//    (média = (prova1 + prova2) / 2). Adicione a média ao objeto.
// c) Classifique e exiba com if/else if/else:
//    - média >= 7  → "Aprovado"
//    - média >= 5  → "Em recuperação"
//    - abaixo de 5 → "Reprovado"
// d) Exiba o objeto "aluno" com console.table().
// e) Exiba uma mensagem final: "<nome>: <situação> (média: <média>)"

// → Seu código aqui:
// let lerTeclado = require('readline-sync');

// let aluno = {
//     nome: lerTeclado.question("Nome do aluno? "),
//     prova1: lerTeclado.questionFloat("Nota 1? "),
//     prova2: lerTeclado.questionFloat("Nota 2? ")
// };
// aluno.media = (aluno.prova1 + aluno.prova2) / 2;

// let status;

// if (aluno.media >= 7) {
//     status = "Aprovado";
// } else if (aluno.media >= 5) {
//     status = "Em recuperação";
// } else {
//     status = "Reprovado";
// }
// console.table(aluno);
// console.log(`${aluno.nome}: ${status} (média: ${aluno.media})`);



// ------------------------------------------------------------
// EXERCÍCIO 10 – Calculadora interativa
// ------------------------------------------------------------
// a) Peça ao usuário dois números usando questionFloat().
// b) Peça ao usuário que escolha uma operação digitando um número:
//    1 – Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão
//    Use questionInt() para capturar a escolha.
// c) Armazene os dois números, o número referente à escolha e o símbolo referente à escolha
//    em um objeto 'calculo' com as propriedades:
//    numeroA, numeroB, operacao, simbolo.
// d) Com base na escolha, calcule o resultado usando if/else if, else.
//    Dica: se a operação for divisão e o segundo número for 0, exiba um aviso de erro.
// e) Exiba no console o resultado no formato:
//    "<numeroA> <símbolo> <numeroB> = <resultado>"
//    Exemplo: "10 + 3 = 13"
// f) Realize testes para verificar se a calculadora está funcionando corretamente.
// g) Chame o professor para realizar alguns testes 🫡

// → Seu código aqui:
const lerTeclado = require('readline-sync');


let numeroA = lerTeclado.questionFloat("Digite o primeiro número: ");
let numeroB = lerTeclado.questionFloat("Digite o segundo número: ");

console.log("\nEscolha a operação:");
console.log("1 – Soma");
console.log("2 – Subtração");
console.log("3 – Multiplicação");
console.log("4 – Divisão");
let operacao = lerTeclado.questionInt("Digite o número da operação: ");

let simbolo;

if (operacao === 1) {
    simbolo = "+";
} else if (operacao === 2) {
    simbolo = "-";
} else if (operacao === 3) {
    simbolo = "*";
} else if (operacao === 4) {
    simbolo = "/";
} else {
    simbolo = "?";
}

let calculo = {
    numeroA: numeroA,
    numeroB: numeroB,
    operacao: operacao,
    simbolo: simbolo
};

let resultado;

if (operacao === 1) {
    resultado = numeroA + numeroB;
} else if (operacao === 2) {
    resultado = numeroA - numeroB;
} else if (operacao === 3) {
    resultado = numeroA * numeroB;
} else if (operacao === 4) {
    if (numeroB === 0) {
        console.log("Erro: divisão por zero não é permitida.");
    } else {
        resultado = numeroA / numeroB;
    }
} else {
    console.log("Operação inválida.");
}

if (resultado !== undefined) {
    console.log(`${calculo.numeroA} ${calculo.simbolo} ${calculo.numeroB} = ${resultado}`);
}
