// ============================================================
//   ATIVIDADE 04 – Operadores Aritméticos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-04.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Operações básicas
// ------------------------------------------------------------
// Declare duas variáveis: "num1" com valor 18 e "num2" com valor 5.
// Calcule e exiba no console, usando template literal, o cálculo e o resultado:
//    Exemplo: console.log(`Cálculo: ${num1} + ${num2} = ${num1 + num2}`);
// a) A soma dos dois números.
// b) A subtração (num1 - num2).
// c) A multiplicação.
// d) A divisão (use toFixed() para limitar o resultado a 2 casas decimais).
// e) O resto da divisão (módulo %).
// f) num1 elevado a num2 (potência).

// → Seu código aqui:
// const lerTeclado = require('readline-sync')   
// let num1 = 18
// let num2 = 5
// console.log(`Cálculo: ${num1} + ${num2} = ${num1 + num2}`);
// console.log(`Cálculo: ${num1} - ${num2} = ${num1 - num2}`);
// console.log(`Cálculo: ${num1} * ${num2} = ${num1 * num2}`);
// console.log(`Cálculo: ${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`);
// console.log(`Cálculo: ${num1}  % ${num2} = ${num1  % num2}`);
// console.log(`Cálculo: ${num1} **  ${num2} = ${num1  ** num2}`);


// ------------------------------------------------------------
// EXERCÍCIO 2 – Área e perímetro
// ------------------------------------------------------------
// a) Declare as variáveis "largura" (valor 8) e "altura" (valor 5).
// b) Calcule a área do retângulo (largura * altura) e armazene em "area".
// c) Calcule o perímetro (2 * largura + 2 * altura) e armazene em "perimetro".
// d) Exiba no console usando template literal:
//    "Retângulo | Largura: <largura> | Altura: <altura> | Área: <area> | Perímetro: <perimetro>"

// → Seu código aqui:
// const lerTeclado = require('readline-sync') 
// let largura = 8
// let altura = 5 
// console.log("Multiplicação:", largura * altura);
// let area = 40
// console.log(2 * largura + 2 * altura)
// let perimetro = 26
// console.log( `Retângulo | Largura: ${largura} | Altura: ${altura} | Área: ${area} | Perímetro: ${perimetro}`)

// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculando desconto
// ------------------------------------------------------------
// a) Declare a variável "precoOriginal" com o valor 250.
// b) Declare a variável "percentualDesconto" com o valor 15 (representa 15%).
// c) Calcule o valor do desconto e armazene em "valorDesconto".
//    Dica: valorDesconto = precoOriginal * (percentualDesconto / 100)
// d) Calcule o preço final (precoOriginal - valorDesconto) e armazene em "precoFinal".
// e) Exiba no console usando template literal:
//    "Preço original: R$ <precoOriginal> | Desconto: R$ <valorDesconto> | Preço final: R$ <precoFinal>"
//    Use toFixed(2) nos valores em reais.

// → Seu código aqui:
// let precoOriginal = 250
// let percentualDesconto = 15
// console.log(percentualDesconto = precoOriginal * percentualDesconto/100);
// let valorDesconto = 37.5
// console.log(valorDesconto = precoOriginal*(percentualDesconto/100))
// console.log(precoOriginal- valorDesconto)
// let precoFinal = 156.25
// console.log(`Preço original: ${precoOriginal.toFixed(2)} | Desconto: ${valorDesconto.toFixed(2)} | Preço final: ${precoFinal.toFixed(2)}`)


// ------------------------------------------------------------
// EXERCÍCIO 4 – Operadores de atribuição composta
// ------------------------------------------------------------
// a) Declare uma variável "pontos" com o valor 100.
// b) Some 50 pontos usando +=. Exiba o resultado.
// c) Subtraia 30 pontos usando -=. Exiba o resultado.
// d) Multiplique por 2 usando *=. Exiba o resultado.
// e) Divida por 4 usando /=. Exiba o resultado.
// f) Para cada operação, use template literal:
//    "Pontos após <tipo da operação>: <valor>"

// → Seu código aqui:
// let pontos = 100
// pontos+=50
// let adicao = 150
// console.log(pontos);
// pontos-=30
// let subtracao = 120
// console.log(pontos);
// pontos*=2
// let  multiplicacao = 240
// console.log(pontos);
// pontos/=4
// let divisao = 60
// console.log(pontos);
// console.log(`Pontos após Adição: ${adicao}`)
// console.log(`Pontos após Subtração: ${subtracao}`)
// console.log(`Pontos após Multiplicação: ${multiplicacao}`)
// console.log(`Pontos após Divisão: ${divisao}`)


// ------------------------------------------------------------
// EXERCÍCIO 5 – Incremento e decremento
// ------------------------------------------------------------
// a) Declare uma variável "vidas" com valor 3.
// b) Exiba o valor atual com console.log().
// c) Use ++ para incrementar "vidas" duas vezes, exibindo após cada incremento.
// d) Use -- para decrementar "vidas" uma vez, exibindo o resultado.
// e) Declare uma variável "nivel" com valor 1.
// f) Incremente "nivel" três vezes usando ++nivel (prefixo) e exiba cada resultado.

// → Seu código aqui:
// let vidas = 3
// vidas++
// vidas++
// console.log(vidas)
// vidas--
// console.log(vidas)
// let nivel = 1
// nivel++
// console.log(nivel)
// nivel++
// console.log(nivel)
// nivel++
// console.log(nivel)



// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções matemáticas (Math)
// ------------------------------------------------------------
// a) Declare "nota" com o valor 7.3.
// b) Exiba o resultado de Math.round(nota), Math.floor(nota) e Math.ceil(nota).
//    Use template literal para identificar cada um.
// c) Declare "temperatura" com o valor -12.5.
// d) Exiba o valor absoluto usando Math.abs(temperatura).
// e) Use Math.max() para encontrar o maior entre: 42, 17, 89, 5, 63. Exiba o resultado.
// f) Use Math.min() para encontrar o menor entre 42, 17, 89, 5, 63. Exiba o resultado.

// → Seu código aqui:
// let nota = 7.3  
// console.log(`Math.round: ${Math.round(nota)}`)
// console.log(`Math.floor: ${Math.floor(nota)}`)
// console.log(`Math.ceil: ${Math.ceil(nota)}`)
// let temperatura = -12.5

// console.log(`Valor absoluto: ${Math.abs(temperatura)}`)

// console.log(`Maior valor: ${Math.max(42, 17, 89, 5, 63)}`)

// console.log(`Menor valor: ${Math.min(42, 17, 89, 5, 63)}`)



// ------------------------------------------------------------
// EXERCÍCIO 7 – Média de notas
// ------------------------------------------------------------
// a) Peça ao usuário 3 notas (use questionFloat()).
// b) Calcule a média aritmética das 3 notas.
// c) Exiba no console:
//    "Nota 1: <n1> | Nota 2: <n2> | Nota 3: <n3>"
//    "Média: <media>" (com 2 casas decimais usando toFixed(2))

// → Seu código aqui:
// let lerTeclado = require('readline-sync');

// let notas = {
//   nota1: lerTeclado.questionFloat("Primeira nota? "),
//   nota2: lerTeclado.questionFloat("Segunda nota? "),
//   nota3: lerTeclado.questionFloat("Terceira nota? ")
// };

// let media = (notas.nota1 + notas.nota2 + notas.nota3) / 3;

// console.log(`Nota 1: ${notas.nota1} | Nota 2: ${notas.nota2} | Nota 3: ${notas.nota3}`);
// console.log(`Média: ${media.toFixed(2)}`);





// ------------------------------------------------------------
// EXERCÍCIO 8 – Calculadora de troco
// ------------------------------------------------------------
// a) Peça ao usuário o valor total da compra (questionFloat()).
// b) Peça ao usuário o valor entregue pelo cliente (informando que deve ser maior que o valor da compra) (questionFloat()).
// c) Calcule o troco (valorEntregue - totalCompra).
// d) Exiba no console:
//    "Total da compra:  R$ <total>"
//    "Valor entregue:   R$ <entregue>"
//    "Troco:            R$ <troco>"
//    Use toFixed(2) em todos os valores.

// → Seu código aqui:
// let lerTeclado = require('readline-sync')
// let totalCompra = lerTeclado.questionFloat("Valor total da compra? ")
// let valorEntregue = lerTeclado.questionFloat("Valor entregue pelo cliente? ")
// let troco = valorEntregue - totalCompra
// console.log("Total da compra:  R$ " + totalCompra.toFixed(2))
// console.log("Valor entregue:   R$ " + valorEntregue.toFixed(2))
// console.log("Troco:            R$ " + troco.toFixed(2))




// ------------------------------------------------------------
// EXERCÍCIO 9 – Valor total de listas
// ------------------------------------------------------------
// ------------------------------------------------------------
// EXERCÍCIO 9 – Valor total de listas
// ------------------------------------------------------------
// a) Dada uma lista de preços, calcule e exiba o total.
// let precos = [29.90, 49.99, 15.75, 99.90];
// // b) Dada uma lista de notas, calcule e exiba a média.
// let notas = [7.5, 8.2, 6.5, 9.0];
// // c) Dada uma lista de idades, exiba a maior e a menor idade utilizando das funções Math().
// let idades = [15, 22, 30, 18, 25];

// → Seu código aqui:
// let precos = [29.90, 49.99, 15.75, 99.90]
// let total = precos.reduce((soma, p) => soma + p, 0)
// console.log("Total dos preços: R$ " + total.toFixed(2))
// let notas = [7.5, 8.2, 6.5, 9.0]

// let media = notas.reduce((soma, n) => soma + n, 0) / notas.length
// console.log("Média das notas: " + media.toFixed(2))

// let idades = [15, 22, 30, 18, 25]

// console.log("Maior idade: " + Math.max(...idades))
// console.log("Menor idade: " + Math.min(...idades))







// ------------------------------------------------------------
// EXERCÍCIO 10 – Trabalhando com objetos
// ------------------------------------------------------------
// Dado o objeto turma:
// let turma = {
//   aluno1: {
//     nome: "João",
//     notas: []
//   },
//   aluno2: {
//     nome: "Maria",
//     notas: []
//   },
//   aluno3: {
//     nome: "Pedro",
//     notas: []
//   }
// }
// a) Sem alterar o objeto (utilize somente push), peça para o usuário 3 notas para cada aluno, indicando a quem pertencerá cada nota
// b) Calcule a média de notas de cada aluno e exiba no console, indicando a quem pertence cada média
// c) Exiba a média geral da turma
// d) Exiba a nota mais alta e a mais baixa de cada aluno
// e) Exiba a nota mais alta e a mais baixa da turma

// → Seu código aqui:
// let ler = require('readline-sync')

// let joao = [ler.questionFloat("João N1: "), ler.questionFloat("João N2: "), ler.questionFloat("João N3: ")]
// let maria = [ler.questionFloat("Maria N1: "), ler.questionFloat("Maria N2: "), ler.questionFloat("Maria N3: ")]
// let pedro = [ler.questionFloat("Pedro N1: "), ler.questionFloat("Pedro N2: "), ler.questionFloat("Pedro N3: ")]

// let mJoao = (joao[0]+joao[1]+joao[2])/3
// let mMaria = (maria[0]+maria[1]+maria[2])/3
// let mPedro = (pedro[0]+pedro[1]+pedro[2])/3

// console.log(mJoao.toFixed(2))
// console.log(mMaria.toFixed(2))
// console.log(mPedro.toFixed(2))

// let todas = [joao[0],joao[1],joao[2],maria[0],maria[1],maria[2],pedro[0],pedro[1],pedro[2]]
// let soma = todas[0]+todas[1]+todas[2]+todas[3]+todas[4]+todas[5]+todas[6]+todas[7]+todas[8]

// console.log((soma/9).toFixed(2))
// console.log(Math.max(...joao), Math.min(...joao))
// console.log(Math.max(...maria), Math.min(...maria))
// console.log(Math.max(...pedro), Math.min(...pedro))
// console.log(Math.max(...todas), Math.min(...todas))
