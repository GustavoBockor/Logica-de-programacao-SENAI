// ============================================================
//   DESAFIOS (para quem já terminou a atividade 04) – Operadores Aritméticos
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Carrinho de compras
// ------------------------------------------------------------
// a) Peça ao usuário o nome e preço de 3 produtos.
// b) Crie um objeto "carrinho" contendo:
//    - produtos (array com os 3 produtos)
// c) Cada produto deve ser um objeto com:
//    nome
//    preco
//
// d) Calcule:
//    - valorTotal
//    - valorMedio dos produtos
//
// e) Exiba o carrinho com console.table().
// f) Exiba também:
//
// "O carrinho possui < X > produtos.
// Valor total: X
// Valor médio dos produtos: X"

// → Seu código aqui:
// const ler = require('readline-sync')
// let nome = ler.question ("Qual seu nome? ")
// let nome1 = ler.question("Nome do produto 1? ")
// let preco1 = ler.questionInt("Preco do produto 1? ")
// let nome2 = ler.question("Nome do produto 2? ")
// let preco2 = ler.questionInt("Preco do produto 2? ")
// let nome3 = ler.question("Nome do produto 3? ")
// let preco3 = ler.questionInt("Preco do produto 3? ")
// let produto1 = {nome:nome1, preco:preco1}
// let produto2 = {nome:nome2, preco:preco2}
// let produto3 = {nome:nome3, preco:preco3}
// let carrinho = {
// produtos: [produto1,produto2,produto3]
// }
// let valorTotal = preco1+preco2+preco3
// let valorMedio = valorTotal/3
// console.table(carrinho.produtos)
// console.log("O carrinho possui 3 produtos.")
// console.log("Valor total:", valorTotal);
// console.log("Valor médio dos produtos:", valorMedio)



// ------------------------------------------------------------
// DESAFIO 2 – Controle de despesas
// ------------------------------------------------------------
// a) Peça ao usuário os valores de 4 despesas:
//    aluguel
//    internet
//    energia
//    alimentação
//
// b) Crie um objeto "despesas" com essas propriedades.
//
// c) Crie um array chamado "listaDespesas" contendo
//    todos os valores.
//
// d) Calcule:
//    - total de despesas
//    - média das despesas
//    - quanto sobra se o salário for 5000.
//
// e) Exiba:
//
// "Total de despesas: X"
// "Média de despesas: X"
// "Dinheiro restante: X"

// → Seu código aqui:
// const ler = require('readline-sync')
// let aluguel = ler.questionInt("Valor do aluguel? ")
// let internet = ler.questionInt("Valor da internet? ")
// let energia = ler.questionInt("Valor da energia? ")
// let alimentação = ler.questionInt("Valor da alimentacao? ")
// let despesas = {
// aluguel,
// internet,
// energia,
// alimentação,
// }
// let listaDespesas = [aluguel,internet,energia,alimentação]
// let total = aluguel+internet+energia+alimentação
// let media = total/4
// let restante = 5000 - total

// console.log(`Total de despesas: ${total}`)
// console.log(`Media de despesas: ${media}`)
// console.log(`Dinheiro restante: ${restante}`)



// ------------------------------------------------------------
// DESAFIO 3 – Estatísticas de jogador
// ------------------------------------------------------------
// a) Peça ao usuário:
//    nome do jogador
//    partidas jogadas
//    gols
//    assistências
//
// b) Crie um objeto "jogador".
//
// c) Crie um array "estatisticas" contendo:
//    [gols, assistencias]
//
// d) Calcule:
//    - participacoesEmGol = gols + assistencias
//    - mediaPorPartida = participacoesEmGol / partidas
//
// e) Exiba:
//
// "Jogador: X"
// "Participações em gol: X"
// "Média por partida: X"

// → Seu código aqui:
// const ler = require('readline-sync')
// let nomeJogador = ler.question("Nome do jogador? ")
// let partidasJogadas = ler.questionInt("Partidas jogadas? ")
// let gols = ler.questionInt("Quantos gols? ")
// let assistências = ler.questionInt("Quantas assistencias?")
// let estatisticas = [gols,assistências]
// let participacoesEmGol = gols+assistências
// let mediaPorPartida = participacoesEmGol/partidasJogadas
// console.log(`Jogador: ${nomeJogador}. Participacoes em gol: ${participacoesEmGol}. Media por partida:${mediaPorPartida}`)






// ------------------------------------------------------------
// DESAFIO 4 – Pedido de mercado
// ------------------------------------------------------------
// a) Peça ao usuário os dados de 4 produtos:
//    nome e preço.
//
// b) Crie um objeto "mercado" contendo:
//    - produtos (array)
//
// c) Calcule:
//    - valor total da compra
//    - valor com desconto de 10%
//
// Fórmula:
// desconto = total * 0.10
// valorFinal = total - desconto
//
// d) Exiba:
//
// "Total da compra: X"
// "Desconto: X"
// "Valor final: X"

// → Seu código aqui:
// const ler = require('readline-sync')

// let nome1 = ler.question("Nome do produto 1: ")
// let preco1 = ler.questionInt("Preço do produto 1: ")

// let nome2 = ler.question("Nome do produto 2: ")
// let preco2 = ler.questionInt("Preço do produto 2: ")

// let nome3 = ler.question("Nome do produto 3: ")
// let preco3 = ler.questionInt("Preço do produto 3: ")

// let nome4 = ler.question("Nome do produto 4: ")
// let preco4 = ler.questionInt("Preço do produto 4: ")

// let produto1 = {nome:nome1, preco:preco1}
// let produto2 = {nome:nome2, preco:preco2}
// let produto3 = {nome:nome3, preco:preco3}
// let produto4 = {nome:nome4, preco:preco4}
// let mercado = [produto1,produto2,produto3,produto4]
// let total = preco1+preco2+preco3+preco4
// let desconto = total * 0.10
// let valorFinal = total-desconto
// console.log(`Total da compra: ${total}`)
// console.log(`Desconto: ${desconto}`)
// console.log(`Valor final: ${valorFinal}`)





// ------------------------------------------------------------
// DESAFIO 5 – Boletim escolar
// ------------------------------------------------------------
// a) Peça ao usuário 4 notas.
//
// b) Crie um objeto "boletim" contendo:
//    notas (array com as 4 notas)
//
// c) Calcule:
//    média das notas
//
// d) Calcule também:
//    pontosFaltantesPara10
//
// Fórmula:
// pontosFaltantes = 10 - media
//
// e) Exiba:
//
// "Notas: X"
// "Média: X"
// "Faltam X pontos para média 10."

// → Seu código aqui:
// const ler = require('readline-sync')
// let nota1 = ler.questionInt("Nota 1? ")
// let nota2 = ler.questionInt("Nota 2? ")
// let nota3 = ler.questionInt("Nota 3? ")
// let nota4 = ler.questionInt("Nota 4? ")
// let boletim = [nota1,nota2,nota3,nota4]
// let media = nota1+nota2+nota3+nota4/4
// let pontosFaltantesPara10 = 10-media
// console.log(`Notas:${boletim}. Média: ${media}. Faltam ${pontosFaltantesPara10} para média 10.`)




// ------------------------------------------------------------
// DESAFIO 6 – Restaurante (cálculo de conta)
// ------------------------------------------------------------
// a) Peça ao usuário o preço de:
//    entrada
//    prato principal
//    sobremesa
//    bebida
//
// b) Crie um objeto "pedido".
//
// c) Crie um array "itens".
//
// d) Calcule:
//    subtotal
//
// e) Calcule taxa de serviço de 10%
//
// f) Calcule valor total.
//
// g) Exiba:
//
// "Subtotal: X"
// "Taxa de serviço: X"
// "Total a pagar: X"

// → Seu código aqui:
// const ler = require ('readline-sync')
// let entrada = ler.questionInt("Preco da entrada? ")
// let pratoPrincipal = ler.questionInt("Preco do prato principal? ")
// let sobremesa = ler.questionInt("Preco da sobremesa? ")
// let bebida = ler.questionInt("Preco da bebida?")
// let pedido = {
// entrada,
// pratoPrincipal,
// sobremesa,
// bebida,
// }
// let itens = [entrada,pratoPrincipal,sobremesa,bebida]
// let subtotal = entrada + pratoPrincipal + sobremesa + bebida
// let taxadeServiço = subtotal *0.10
// let totalaPagar = subtotal+taxadeServiço
// console.log(`Subtotal: ${subtotal}. Taxa de serviço: ${taxadeServiço}. Total a pagar: ${totalaPagar}.`)



// ------------------------------------------------------------
// DESAFIO 7 – Análise de números
// ------------------------------------------------------------
// a) Peça 5 números ao usuário.
//
// b) Crie um objeto "analise".
//
// c) Crie um array "numeros".
//
// d) Calcule:
//    soma de todos
//    média
//    produto (multiplicação de todos)
//
// e) Exiba:
//
// "Soma: X"
// "Média: X"
// "Produto: X"

// → Seu código aqui:
// const ler = require('readline-sync')
// let numero1 = ler.questionInt("Numero 1? ")
// let numero2 = ler.questionInt("Numero 2? ")
// let numero3 = ler.questionInt("Numero 3? ")
// let numero4 = ler.questionInt("Numero 4? ")
// let numero5 = ler.questionInt("Numero 5? ")
// let analise = {
// numero1,
// numero2,
// numero3,
// numero4,
// numero5
// }
// let numeros = [numero1,numero2,numero3,numero4,numero5]
// let soma = numero1+numero2+numero3+numero4+numero5
// let media = numero1+numero2+numero3+numero4+numero5/5
// let produto = numero1 * numero2 * numero3 * numero4 * numero5
// console.log(`Soma: ${soma}. Media: ${media}. Produto: ${produto}.`)



// ------------------------------------------------------------
// DESAFIO 8 – Perfil financeiro
// ------------------------------------------------------------
// a) Peça ao usuário:
//    salário
//    renda extra
//    gastos fixos
//    gastos variáveis
//
// b) Crie um objeto "financeiro".
//
// c) Crie arrays:
//    receitas
//    despesas
//
// d) Calcule:
//    rendaTotal
//    gastoTotal
//    saldoFinal
//
// Fórmulas:
// rendaTotal = salario + rendaExtra
// gastoTotal = gastosFixos + gastosVariaveis
// saldoFinal = rendaTotal - gastoTotal
//
// e) Exiba:
//
// "Renda total: X"
// "Gastos totais: X"
// "Saldo final: X"

// → Seu código aqui:
// const ler = require('readline-sync')
// let salario  = ler.questionInt("Qual seu salario? ")
// let rendaExtra = ler.questionInt("Renda extra? ")
// let gastosFixos = ler.questionInt("Gastos fixos? ")
// let gastosVariaveis = ler.questionInt("Gastos variaveis?")
// let receitas = {
// salario,
// rendaExtra
// }
// let despesas = {
// gastosFixos,
// gastosVariaveis
// }
// let rendaTotal = salario+rendaExtra
// let gastoTotal = gastosFixos+gastosVariaveis
// let saldoFinal = rendaTotal-gastoTotal
// console.log(`Renda total: ${rendaTotal}. Gastos totais: ${gastoTotal}. Saldo final: ${saldoFinal}`)



// ------------------------------------------------------------
// DESAFIO 9 – Compra no mercado
// ------------------------------------------------------------
// a) Peça ao usuário o nome, preço e quantidade de 3 produtos, armazenando-os em três objetos (cada produto um objeto).
//    Use question() para o nome, questionInt() para a quantidade e questionFloat() para o preço.
// b) Crie um array "carrinho" com os 3 objetos.
// c) Calcule o total da compra.
// d) Peça ao usuário o percentual de desconto.
// e) Calcule o valor do desconto e o total com desconto.
// f) Exiba o carrinho com console.table().
// g) Exiba no console:
//    "Total sem desconto: R$ <total>"
//    "Desconto:  R$ <desconto>"
//    "Total com desconto: R$ <totalComDesconto>"
//    Use toFixed(2) em todos os valores.

// → Seu código aqui:
// const ler = require('readline-sync')

// let nome1 = ler.question("Nome do produto 1: ")
// let preco1 = ler.questionFloat("Preço do produto 1: ")
// let quantidade1 = ler.questionInt("Quantidade do produto 1: ")

// let produto1 = {
//     nome: nome1,
//     preco: preco1,
//     quantidade: quantidade1
// }

// let nome2 = ler.question("Nome do produto 2: ")
// let preco2 = ler.questionFloat("Preço do produto 2: ")
// let quantidade2 = ler.questionInt("Quantidade do produto 2: ")

// let produto2 = {
//     nome: nome2,
//     preco: preco2,
//     quantidade: quantidade2
// }

// let nome3 = ler.question("Nome do produto 3: ")
// let preco3 = ler.questionFloat("Preço do produto 3: ")
// let quantidade3 = ler.questionInt("Quantidade do produto 3: ")

// let produto3 = {
//     nome: nome3,
//     preco: preco3,
//     quantidade: quantidade3
// }

// let carrinho = [produto1, produto2, produto3]

// let total = 0

// for (let produto of carrinho) {
//     total += produto.preco * produto.quantidade
// }

// let percentual = ler.questionFloat("Percentual de desconto (%): ")
// let desconto = total * (percentual / 100)
// let totalComDesconto = total - desconto

// console.table(carrinho)

// console.log("Total sem desconto: R$ " + total.toFixed(2))
// console.log("Desconto: R$ " + desconto.toFixed(2))
// console.log("Total com desconto: R$ " + totalComDesconto.toFixed(2))



// ------------------------------------------------------------
// DESAFIO 10 – Calculadora de IMC
// ------------------------------------------------------------
// IMC = peso (kg) / (altura (m) ** 2)
// a) Peça ao usuário seu nome, peso em kg e altura em metros.
// b) Calcule o IMC usando a fórmula acima.
// c) Crie um objeto "resultado" com as propriedades:
//    nome, peso, altura e imc (use toFixed(2) no imc).
// d) Exiba o objeto com console.table().
// e) Exiba no console:
//    "Olá, <nome>! Seu IMC é: <imc>"

// → Seu código aqui:
// const ler = require('readline-sync')
// let nome = ler.question("Qual seu nome? ")
// let peso = ler.questionInt("Qual seu peso? ")
// let altura = ler.questionInt("Qual sua altura? ")
// let IMC = peso/altura **2
// let resultado = {
// nome,
// peso,
// altura,
// IMC
// }
// console.table(resultado)
// console.log(`Olá, ${nome}! Seu IMC e ${IMC} `)



// ------------------------------------------------------------
// DESAFIO 11 – Custo de viagem
// ------------------------------------------------------------
// a) Peça ao usuário:
//    - A distância total da viagem em km.
//    - O consumo médio do carro em km/litro.
//    - O preço do combustível por litro.
//    - Quantas pessoas vão dividir o custo.
// b) Calcule a quantidade de litros necessários:
//    litros = distancia / consumo
// c) Calcule o custo total: custoTotal = litros * precoCombustivel
// d) Calcule o custo por pessoa: custoPorPessoa = custoTotal / numPessoas
// e) Exiba no console:
//    "Distância:          <distancia> km"
//    "Litros necessários: <litros> L"
//    "Custo total:        R$ <custoTotal>"
//    "Custo por pessoa:   R$ <custoPorPessoa>"

// → Seu código aqui:
// const ler = require('readline-sync')
// let distancia = ler.questionInt("Distancia total da viagem em km? ")
// let consumoMedio = ler.questionInt("Qual o consumo medio do carro? ")
// let precoCombustível = ler.questionInt("Qual o preco do combustivel por litro? ")
// let numPessoas = ler.questionInt("Quantas pessoas vao dividir o custo?")
// let litros = distancia/consumoMedio
// let custoTotal = litros*precoCombustível
// let custoPorPessoa = custoTotal/numPessoas
// console.log(`Distancia: ${distancia}km. Litros necessarios:${consumoMedio}L. Custo total:R$ ${custoTotal}. Custo por pessoa:R$${custoPorPessoa}`)




// ------------------------------------------------------------
// DESAFIO 12 – Contracheque
// ------------------------------------------------------------
// a) Peça ao usuário:
//    - O nome do funcionário.
//    - O salário bruto.
//    - O percentual de desconto do INSS.
//    - O percentual de desconto do IR.
// b) Calcule:
//    - Desconto do INSS: salarioBruto * (inss / 100)
//    - Desconto do IR:   salarioBruto * (ir / 100)
//    - Salário líquido:  salarioBruto - descontoINSS - descontoIR
// c) Crie um objeto "contracheque" com todas as informações.
// d) Exiba o objeto com console.table().
// e) Exiba no console uma mensagem com template literal resumindo o contracheque.

// → Seu código aqui:
const ler = require('readline-sync')
let nome = ler.question("Nome do funcionario?")
let salarioBruto = ler.questionInt("Salario bruto?")
let percentualINSS = ler.questionInt("Percentual de desconto do INSS?")
let percentualIR = ler.questionInt("Percentual de desconto do IR?")
let descontoINSS = salarioBruto*(percentualINSS/100)
let descontoIR = salarioBruto*(percentualIR/100)
let salarioLiquido = salarioBruto-descontoINSS-descontoIR
let contracheque = {
nome:nome,
salarioBruto:salarioBruto,
percentualINSS:percentualINSS,
descontoINSS:descontoINSS,
descontoIR:descontoIR,
salarioLiquido:salarioLiquido,
}
console.table(contracheque)
console.log(`Nome:${nome}. Salario Bruto: ${salarioBruto}. Desconto INSS:${descontoINSS}. Desconto IR:${descontoIR}.Salario liquido:${salarioLiquido}`)
