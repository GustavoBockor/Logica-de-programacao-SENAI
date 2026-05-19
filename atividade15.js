// ============================================================
//   ATIVIDADE 13 – Estruturas de Dados: Matriz
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo uma matriz
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [10, 20, 30],
//      [40, 50, 60],
//      [70, 80, 90],
//    ];
// b) Exiba: número de linhas e número de colunas.
// c) Exiba o elemento central (m[1][1]).
// d) Exiba o canto inferior direito (use .length).

// → Seu código aqui:
    // const m = [
    //   [10, 20, 30],
    //   [40, 50, 60],
    //   [70, 80, 90],
    // ];
    // console.log(`Linhas: ${m.length}`); 
    // console.log(`Colunas: ${m[0].length}`); 
    // console.log(m[1][1])
    // console.log(m[2][2])



// ------------------------------------------------------------
// EXERCÍCIO 2 – Percorrendo com for aninhado
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [1, 2, 3, 4],
//      [5, 6, 7, 8],
//      [9, 10, 11, 12],
//    ];
// b) Usando dois for aninhados, exiba cada elemento no formato:
//    "m[i][j] = <valor>"
// c) Calcule e exiba a SOMA de todos os elementos da matriz.

// → Seu código aqui:
// const m = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
// ]

// let soma = 0

// for(let i = 0; i < m.length; i++) {

//     for(let j = 0; j < m[i].length; j++) {

//         console.log(`m[${i}][${j}] = ${m[i][j]}`)

//         soma = soma + m[i][j]
//     }
// }
// console.log(`Soma:${soma}`)


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor valor
// ------------------------------------------------------------
// a) Utilizando a matriz:
//    const m = [
//      [12,  7, 25],
//      [ 3, 18,  9],
//      [31, 14, 22],
//    ];
// b) Usando for aninhado, encontre o MAIOR e o MENOR valor da matriz.
// c) Exiba também a posição (linha, coluna) onde cada um está.

// → Seu código aqui:
// const m = [
//     [12, 7, 25],
//     [3, 18, 9],
//     [31, 14, 22],
// ]

// let maior = m[0][0]
// let menor = m[0][0]

// let linhaMaior = 0
// let colunaMaior = 0

// let linhaMenor = 0
// let colunaMenor = 0

// for(let i = 0; i < m.length; i++) {

//     for(let j = 0; j < m[i].length; j++) {

//         if(m[i][j] > maior) {

//             maior = m[i][j]

//             linhaMaior = i
//             colunaMaior = j
//         }

//         if(m[i][j] < menor) {

//             menor = m[i][j]

//             linhaMenor = i
//             colunaMenor = j
//         }
//     }
// }

// console.log(`Maior valor: ${maior}`)
// console.log(`Posição do maior: [${linhaMaior}][${colunaMaior}]`)

// console.log(`Menor valor: ${menor}`)
// console.log(`Posição do menor: [${linhaMenor}][${colunaMenor}]`)



// ------------------------------------------------------------
// EXERCÍCIO 4 – Soma das linhas e das colunas
// ------------------------------------------------------------
// a) Use a mesma matriz do Exercício 3.
// b) Exiba a soma de cada LINHA: "Linha <i>: <soma>"
// c) Exiba a soma de cada COLUNA: "Coluna <j>: <soma>"
// d) Exiba a soma da DIAGONAL principal (m[i][i]).

// → Seu código aqui:
// const m = [
//     [12, 7, 25],
//     [3, 18, 9],
//     [31, 14, 22],
// ]
// for(let i = 0; i < matriz3.length; i++) {

//     let somaLinha = 0

//     for(let j = 0; j < matriz3[i].length; j++) {

//         somaLinha = somaLinha + matriz3[i][j]
//     }

//     console.log(`Linha ${i}: ${somaLinha}`)
// }

// for(let j = 0; j < matriz3[0].length; j++) {

//     let somaColuna = 0

//     for(let i = 0; i < matriz3.length; i++) {

//         somaColuna = somaColuna + matriz3[i][j]
//     }

//     console.log(`Coluna ${j}: ${somaColuna}`)
// }

// let somaDiagonal = 0

// for(let i = 0; i < matriz3.length; i++) {

//     somaDiagonal = somaDiagonal + matriz3[i][i]
// }

// console.log(`Soma da diagonal principal: ${somaDiagonal}`)



// ------------------------------------------------------------
// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente
// ------------------------------------------------------------
// a) Pergunte ao usuário quantas linhas e quantas colunas terá a matriz.
// b) Usando dois for aninhados, peça cada valor:
//    "Digite m[<i>][<j>]: "
// c) Exiba a matriz final com console.table().

// → Seu código aqui:
const ler = require('readline-sync')
let linhas = ler.questionInt("Quantas linhas tera a matriz? ")
let colunas = ler.questionInt("Quantas colunas tera a matriz? ")

let matriz= []


for(let i = 0; i < linhas; i++) {
matriz[i] = []
for(let j = 0; j < colunas; j++)
matriz[i][j] = ler.questionInt(`Digite[${i}}][${j}]: `)

}
console.table(matriz)