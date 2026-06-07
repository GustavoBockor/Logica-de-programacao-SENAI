// ============================================================
//   DESAFIOS (para quem já terminou a atividade 10) – While
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Progressão de saldo bancário
// ------------------------------------------------------------
// Um investimento rende juros compostos mensais.
//
// a) Pergunte ao usuário:
//    - Saldo inicial
//    - Taxa de juros mensal em % — ex: 1.5
//    - Meta de saldo a atingir
// b) Usando while, calcule quantos meses são necessários para
//    atingir a meta. A fórmula de juros compostos é:
//    saldo = saldo * (1 + taxa / 100)
//    Exiba cada mês: "Mês <mes>: R$ <saldo>"
// c) Ao atingir a meta, exiba:
//    "Meta atingida em <mes> meses! Saldo final: R$ <saldo>"
// d) Armazene cada mês como objeto { mes, saldo } em um array
//    e exiba com console.table().
// e) Desafio extra: ao invés de exibir mês 1, mês 2, mês 3, etc.
//    exiba Janeiro, Fevereiro, Março, etc.
//    Atenção para casos que ultrapassem 12 meses...

// → Seu código aqui:
const ler = require('readline-sync')

let saldo = (ler.question("Saldo inicial? "))
let jurosMensal = (ler.question("Taxa de juros mensal (%)? "))
let metaSaldo = (ler.question("Saldo a atingir? "))

let mes = 0
let historico = []

let mesesNome = [
  "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
  "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
]

while (saldo < metaSaldo) {
  mes++
  saldo = saldo * (1 + jurosMensal / 100)

  let nomeMes = mesesNome[(mes - 1) % 12]

  console.log(`${nomeMes} (Mês ${mes}): R$ ${saldo.toFixed(2)}`)

  historico.push({ mes: mes, saldo: saldo.toFixed(2) })
}

console.log(`Meta atingida em ${mes} meses! Saldo final: R$ ${saldo.toFixed(2)}`)
console.table(historico)



// ------------------------------------------------------------
// DESAFIO 2 – Sequência de Fibonacci
// ------------------------------------------------------------
// A sequência de Fibonacci começa com 0 e 1.
// Cada número seguinte é a soma dos dois anteriores:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// a) Peça ao usuário um limite N.
// b) Usando while, gere e exiba todos os números da sequência
//    de Fibonacci menores ou iguais a N.
// c) Conte quantos números foram gerados.
// d) Exiba: "Total de números na sequência até <N>: <qtd>"
// e) Informe se o próprio N é um número de Fibonacci.

// → Seu código aqui:
const ler = require('readline-sync')
let N = (ler.question("Digite o limite N: "))

let a = 0
let b = 1
let contador = 0
let ehFibonacci = false

while (a <= N) {
  console.log(a)
  contador++

  if (a === N) {
    ehFibonacci = true
  }

  let proximo = a + b
  a = b
  b = proximo
}

console.log(`Total de números na sequência até ${N}: ${contador}`)

if (ehFibonacci) {
  console.log(`${N} pertence à sequência de Fibonacci.`)
} else {
  console.log(`${N} NÃO pertence à sequência de Fibonacci.`)
}


// ------------------------------------------------------------
// DESAFIO 3 – Caixa registradora
// ------------------------------------------------------------
// Simule o caixa de uma loja.
//
// a) Utilizando a lista de produtos:
let produtos = [
  { nome: "Caneta",  preco: 2.5,  estoque: 50 },
  { nome: "Caderno", preco: 18.9, estoque: 25 },
  { nome: "Mochila", preco: 89.0, estoque: 15 },
  { nome: "Régua",   preco: 4.75, estoque: 35 },
  { nome: "Estojo",  preco: 12.3, estoque: 10 }
]
// b) Usando do...while, repita o fluxo de compra:
//    - Exiba o menu de produtos com preços usando console.table().
//    - Pergunte qual produto deseja (número de 1 a 5).
//    - Pergunte a quantidade.
//    - Se possuir estoque necessário, adicione ao carrinho[] no seguinte formato: { produto, quantidade, subtotal } e atualize o estoque.
//    - Pergunte: "Continuar comprando?" (keyInYN()).
// c) Ao sair do loop, exiba o carrinho com console.table().
// d) Calcule e exiba o total da compra.
// e) Pergunte se vai pagar com desconto de funcionário (keyInYN()).
//    Se sim, aplique 15% de desconto.
// f) Exiba o valor final com e sem desconto.

// → Seu código aqui:
const ler = require('readline-sync')
let carrinho = []
let continuar

do {
  console.table(produtos)

  let escolha = ler.questionInt("Escolha o produto (1 a 5): ") - 1
  let quantidade = ler.questionInt("Quantidade: ")

  if (produtos[escolha] && produtos[escolha].estoque >= quantidade) {
    let subtotal = produtos[escolha].preco * quantidade

    carrinho.push({
      produto: produtos[escolha].nome,
      quantidade: quantidade,
      subtotal: subtotal.toFixed(2)
    })

    produtos[escolha].estoque -= quantidade
  } else {
    console.log("Estoque insuficiente ou produto inválido.")
  }

  continuar = ler.keyInYN("Continuar comprando?")
} while (continuar)

console.table(carrinho)

let total = carrinho.reduce((acc, item) => acc + Number(item.subtotal), 0)

console.log(`Total da compra: R$ ${total.toFixed(2)}`)

let desconto = ler.keyInYN("Funcionário (15% desconto)?")

let totalFinal = desconto ? total * 0.85 : total

console.log(`Total sem desconto: R$ ${total.toFixed(2)}`)
console.log(`Total com desconto: R$ ${totalFinal.toFixed(2)}`)



// ------------------------------------------------------------
// DESAFIO 4 – Validador de senha
// ------------------------------------------------------------
// O usuário tem 3 tentativas para acertar a senha correta.
//
// a) Defina a senha correta como: "js2025"
// b) Usando while, peça a senha ao usuário e:
//    - Conte as tentativas.
//    - Se acertar: exiba "Acesso liberado!" e encerre.
//    - Se errar e ainda tiver tentativas: informe quantas restam.
//    - Se esgotar as 3 tentativas: exiba "Conta bloqueada!" e encerre.
// c) Ao final, exiba um objeto com console.table():
//    { tentativasUsadas, resultado: "Liberado" ou "Bloqueado" }

// → Seu código aqui:
const ler = require('readline-sync')
let senhaCorreta = "js2025"
let tentativas = 0
let maxTentativas = 3
let acesso = false

while (tentativas < maxTentativas) {
  let senha = ler.question("Digite a senha: ")
  tentativas++

  if (senha === senhaCorreta) {
    console.log("Acesso liberado!")
    acesso = true
    break
  } else {
    if (tentativas < maxTentativas) {
      console.log(`Senha incorreta. Restam ${maxTentativas - tentativas} tentativa(s).`)
    }
  }
}

if (!acesso) {
  console.log("Conta bloqueada!")
}

console.table([{
  tentativasUsadas: tentativas,
  resultado: acesso ? "Liberado" : "Bloqueado"
}])
// ------------------------------------------------------------
// DESAFIO 5 – Calculadora persistente
// ------------------------------------------------------------
// Uma calculadora que continua operando até o usuário sair.
//
// a) Inicialize 'resultado' com 0.
// b) Usando do...while, repita:
//    - Exiba o resultado atual.
//    - Exiba o menu de operações:
//      1 – Somar | 2 – Subtrair | 3 – Multiplicar | 4 – Dividir | 5 – Zerar | 0 – Sair
//    - Peça a operação.
//    - Para 1 a 4, peça um número e aplique ao resultado.
//      Na divisão, trate (não permita) divisão por zero.
//    - Para 5, zere o resultado.
//    - Para 0, encerre.
// c) Ao sair, exiba: "Resultado final: <resultado>"
// Observação: Realize os cálculos conforme solicitado, não se preocupando com a ordem/sequência lógica matemática

// → Seu código aqui:
const ler = require('readline-sync')
let resultado = 0
let opcao

do {
  console.log(`Resultado atual: ${resultado}`)
  console.log("1 – Somar")
  console.log("2 – Subtrair")
  console.log("3 – Multiplicar")
  console.log("4 – Dividir")
  console.log("5 – Zerar")
  console.log("0 – Sair")

  opcao = ler.questionInt("Escolha uma opção: ")

  if (opcao >= 1 && opcao <= 4) {
    let num = (ler.question("Digite um número: "))

    if (opcao === 1) resultado += num
    else if (opcao === 2) resultado -= num
    else if (opcao === 3) resultado *= num
    else if (opcao === 4) {
      if (num === 0) {
        console.log("Erro: divisão por zero!")
      } else {
        resultado /= num
      }
    }
  } else if (opcao === 5) {
    resultado = 0
  }

} while (opcao !== 0)

console.log(`Resultado final: ${resultado}`)
