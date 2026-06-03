// ============================================================
//   DESAFIOS – Vetor
// ============================================================

// ------------------------------------------------------------
// DESAFIO 1 – Histograma de notas
// ------------------------------------------------------------
// a) Utilizando o vetor:
// const notas = [4.5, 7.0, 8.5, 6.0, 9.2, 3.5, 7.8, 5.1, 8.0, 6.5, 9.5, 2.0];
// b) Conte e exiba quantas notas há em cada faixa:
//    (0, 5)   → Insuficiente
//    (5, 7)   → Regular
//    (7, 9)   → Bom
//    (9, 10)  → Excelente

// → Seu código aqui:
const notas = [4.5, 7.0, 8.5, 6.0, 9.2, 3.5, 7.8, 5.1, 8.0, 6.5, 9.5, 2.0]

let insuficiente = 0
let regular = 0
let bom = 0
let excelente = 0

for (let i = 0; i < notas.length; i++) {

    if (notas[i] < 5) {
        insuficiente++
    }
    else if (notas[i] < 7) {
        regular++
    }
    else if (notas[i] < 9) {
        bom++
    }
    else {
        excelente++
    }

}

console.log(`Insuficiente: ${insuficiente}`)
console.log(`Regular: ${regular}`)
console.log(`Bom: ${bom}`)
console.log(`Excelente: ${excelente}`)


// ------------------------------------------------------------
// DESAFIO 2 – Top 3 do ranking
// ------------------------------------------------------------
// a) Utilizando o vetor de jogadores:
// const jogadores = [
//   { nome: "Alice",   pontos: 1280 },
//   { nome: "Bento",   pontos: 950  },
//   { nome: "Cecília", pontos: 1750 },
//   { nome: "Davi",    pontos: 1100 },
//   { nome: "Elisa",   pontos: 2030 },
//   { nome: "Felipe",  pontos: 870  },
//   { nome: "Gabi",    pontos: 1620 },
// ];
// b) Sem usar .sort(), encontre os 3 jogadores com MAIS pontos.
// c) Exiba o pódio:
//    "1º lugar: <nome> – <pontos> pontos"
//    "2º lugar: <nome> – <pontos> pontos"
//    "3º lugar: <nome> – <pontos> pontos"

// → Seu código aqui:
const jogadores = [
    { nome: "Alice",   pontos: 1280 },
    { nome: "Bento",   pontos: 950  },
    { nome: "Cecília", pontos: 1750 },
    { nome: "Davi",    pontos: 1100 },
    { nome: "Elisa",   pontos: 2030 },
    { nome: "Felipe",  pontos: 870  },
    { nome: "Gabi",    pontos: 1620 },
  ]
  
  let primeiro = jogadores[0]
  let segundo = jogadores[0]
  let terceiro = jogadores[0]
  
  for (let i = 0; i < jogadores.length; i++) {
  
      if (jogadores[i].pontos > primeiro.pontos) {
          terceiro = segundo
          segundo = primeiro
          primeiro = jogadores[i]
      }
      else if (jogadores[i].pontos > segundo.pontos && jogadores[i] != primeiro) {
          terceiro = segundo
          segundo = jogadores[i]
      }
      else if (jogadores[i].pontos > terceiro.pontos &&
               jogadores[i] != primeiro &&
               jogadores[i] != segundo) {
          terceiro = jogadores[i]
      }
  }
  
  console.log(`1º lugar: ${primeiro.nome} - ${primeiro.pontos} pontos`)
  console.log(`2º lugar: ${segundo.nome} - ${segundo.pontos} pontos`)
  console.log(`3º lugar: ${terceiro.nome} - ${terceiro.pontos} pontos`)


// ------------------------------------------------------------
// DESAFIO 3 – Sorteio sem repetição (bingo)
// ------------------------------------------------------------
// a) Utilizando for(), crie um vetor 'bolas', que deve ser preenchido com os números de 1 a 75.
// b) Crie um vetor vazio chamado 'sorteadas'.
// c) Usando while, sorteie um índice aleatório do vetor 'bola' e:
//    - Adicione o valor ao 'sorteadas'.
//    - Remova esse índice do 'bola' (use splice — pesquise!).
//    - Exiba: "Bola sorteada: <n> | Restantes: <bola.length>"
// d) Pare quando 'sorteadas.length' chegar a 15.
// e) Exiba o resultado final. Ordene 'sorteadas' em ordem crescente.

// → Seu código aqui:
let bolas = []
let sorteadas = []

for (let i = 1; i <= 75; i++) {
    bolas.push(i)
}

while (sorteadas.length < 15) {

    let indice = Math.floor(Math.random() * bolas.length)

    sorteadas.push(bolas[indice])

    bolas.splice(indice, 1)

    console.log(`Bola sorteada: ${sorteadas[sorteadas.length - 1]} | Restantes: ${bolas.length}`)
}

sorteadas.sort((a, b) => a - b)

console.log("Resultado final:")
console.log(sorteadas)


// ------------------------------------------------------------
// DESAFIO 4 – Carrinho de compras inteligente
// ------------------------------------------------------------
// a) Utilizando o vetor de produtos:
const produtos = [
  { codigo: 1, nome: "Caneta",  preco: 2.5  },
  { codigo: 2, nome: "Caderno", preco: 18.9 },
  { codigo: 3, nome: "Mochila", preco: 89.0 },
  { codigo: 4, nome: "Régua",   preco: 4.75 },
  { codigo: 5, nome: "Estojo",  preco: 12.3 },
];
// b) Crie um vetor 'carrinho' vazio.
// c) Usando do...while, exiba os produtos (console.table) e:
//    - Peça o código e a quantidade desejada.
//    - Se o produto JÁ ESTIVER no carrinho, apenas SOME a
//      quantidade ao item existente (não duplique a linha).
//    - Caso contrário, adicione { codigo, nome, preco, quantidade, subtotal }.
//    - Pergunte se quer continuar comprando (keyInYN()).
// d) Ao final:
//    - Exiba o carrinho com console.table().
//    - Exiba o total geral.
//    - Se total > R$ 100, aplique 10% de desconto e mostre o valor final.

// → Seu código aqui:
const ler = require('readline-sync')

const produtos = [
  { codigo: 1, nome: "Caneta",  preco: 2.5  },
  { codigo: 2, nome: "Caderno", preco: 18.9 },
  { codigo: 3, nome: "Mochila", preco: 89.0 },
  { codigo: 4, nome: "Régua",   preco: 4.75 },
  { codigo: 5, nome: "Estojo",  preco: 12.3 },
]

let carrinho = []
let continuar

do {

    console.table(produtos)

    let codigo = ler.questionInt("Codigo do produto: ")
    let quantidade = ler.questionInt("Quantidade: ")

    let produto = null

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].codigo == codigo) {
            produto = produtos[i]
        }
    }

    if (produto != null) {

        let encontrado = false

        for (let i = 0; i < carrinho.length; i++) {

            if (carrinho[i].codigo == codigo) {

                carrinho[i].quantidade += quantidade
                carrinho[i].subtotal =
                    carrinho[i].quantidade * carrinho[i].preco

                encontrado = true
            }
        }

        if (!encontrado) {

            carrinho.push({
                codigo: produto.codigo,
                nome: produto.nome,
                preco: produto.preco,
                quantidade: quantidade,
                subtotal: produto.preco * quantidade
            })
        }
    }

    continuar = ler.keyInYN("Continuar comprando?")

} while (continuar)

console.table(carrinho)

let total = 0

for (let i = 0; i < carrinho.length; i++) {
    total += carrinho[i].subtotal
}

console.log(`Total: R$ ${total.toFixed(2)}`)

if (total > 100) {

    let desconto = total * 0.10
    let totalFinal = total - desconto

    console.log(`Desconto: R$ ${desconto.toFixed(2)}`)
    console.log(`Total com desconto: R$ ${totalFinal.toFixed(2)}`)
}