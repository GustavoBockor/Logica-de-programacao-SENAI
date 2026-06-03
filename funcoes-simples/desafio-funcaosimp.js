// ============================================================
// DESAFIOS (para quem já terminou a atividade 14) – Funções Simples
// ============================================================
// Continue SEM usar parâmetros e SEM return.
// O foco é pensar em funções pequenas e bem nomeadas.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Relógio digital
// ------------------------------------------------------------
// a) Crie uma função 'mostrarHora' que:
//    - Pega a hora atual - busque por uma função pronta do Javascript para isso.
//    - Formata como "HH:MM:SS".
//    - Exibe: "Hora atual: <HH:MM:SS>"
// b) Crie uma função 'mostrarData' que exibe:
//    "Data atual: <DD/MM/AAAA>"
// c) Crie uma função 'agora' que chama mostrarData() e mostrarHora() em sequência.
// d) Chame agora() três vezes (com um intervalo de 5 segundos entre as chamadas).

// → Seu código aqui:
function mostrarHora() {
    console.log("Hora atual: 18:30:45")
}

function mostrarData() {
    console.log("Data atual: 03/06/2026")
}

function agora() {
    mostrarData()
    mostrarHora()
}

agora()
agora()
agora()


// ------------------------------------------------------------
// DESAFIO 2 – Gerador de cartões
// ------------------------------------------------------------
// Vamos imprimir vários "cartões" estilizados no console.
//
// a) Utilizando os arrays:
// const nomes  = ["Ana", "Bruno", "Carla", "Diego", "Eva"];
// const cargos = ["Dev Junior", "Dev Pleno", "Tech Lead", "QA", "Designer"];
//
// b) Crie a função 'imprimirCartao' que:
//    - Sorteia um índice para cada array.
//    - Exibe um "cartão" com os valores sorteados, no formato:
//      ═══════════════════════════════
//      |   <NOME>                     
//      |   <cargo>                    
//      ═══════════════════════════════
//      (não precisa alinhar caracteres com perfeição — apenas estilo)
// c) Chame imprimirCartao() 5 vezes.

// → Seu código aqui:
const nomes = ["Ana", "Bruno", "Carla", "Diego", "Eva"]
const cargos = ["Dev Junior", "Dev Pleno", "Tech Lead", "QA", "Designer"]

function imprimirCartao() {

    let indiceNome = Math.floor(Math.random() * nomes.length)
    let indiceCargo = Math.floor(Math.random() * cargos.length)

    console.log("═══════════════════════════════")
    console.log(`| ${nomes[indiceNome]}`)
    console.log(`| ${cargos[indiceCargo]}`)
    console.log("═══════════════════════════════")
}

for (let i = 0; i < 5; i++) {
    imprimirCartao()
}

// ------------------------------------------------------------
// DESAFIO 3 – Sistema de notícias
// ------------------------------------------------------------
// a) Utilizando o array:
// const noticias = [
//   { titulo: "Tecnologia X é lançada",  texto: "Empresa Y revoluciona o mercado..." },
//   { titulo: "Economia em alta",        texto: "Bolsa fecha o dia em alta de 2%..." },
//   { titulo: "Esporte: time campeão",   texto: "O time A conquistou o título..." },
//   { titulo: "Cultura: novo filme",     texto: "Estreia no cinema o longa Z..." },
// ];
// b) Crie 1 função 'manchete', que exibe:
//        |── MANCHETE ─────────────────
//        | <título>
//        |----------------------------
//        | <texto>
// c) Crie a função 'exibirJornal' que chama todas as manchetes em sequência,
//    com uma linha em branco entre cada uma.
// d) Chame exibirJornal().
// Observação: A função 'exibirJornal' deve sempre exibir todas as manchetes,
//    mesmo que mais manchetes forem adicionadas posteriormente

// → Seu código aqui:
const noticias = [
    { titulo: "Tecnologia X é lançada", texto: "Empresa Y revoluciona o mercado..." },
    { titulo: "Economia em alta", texto: "Bolsa fecha o dia em alta de 2%..." },
    { titulo: "Esporte: time campeão", texto: "O time A conquistou o título..." },
    { titulo: "Cultura: novo filme", texto: "Estreia no cinema o longa Z..." },
  ]
  
  function manchete() {
  
      for (let i = 0; i < noticias.length; i++) {
  
          console.log("|── MANCHETE ─────────────────")
          console.log(`| ${noticias[i].titulo}`)
          console.log("|----------------------------")
          console.log(`| ${noticias[i].texto}`)
          console.log("")
      }
  }
  
  function exibirJornal() {
      manchete()
  }
  
  exibirJornal()

// ------------------------------------------------------------
// DESAFIO 4 – Mini caixa eletrônico
// ------------------------------------------------------------
// Crie um caixa eletrônico
// O saldo deve ficar em uma variável global.
//
// a) Declare saldo = 1000;
// b) Crie as funções:
//    - 'verSaldo'     → exibe o saldo atual formatado como "R$ x,xx".
//    - 'depositar'    → pergunta o valor e SOMA ao saldo.
//                        Exibe o novo saldo.
//    - 'sacar'        → pergunta o valor; se houver saldo, SUBTRAI;
//                        senão, exibe "Saldo insuficiente!".
//    - 'extrato'      → exibe um cabeçalho estilizado com a data atual e chama verSaldo().
//    - 'exibirMenu'   → exibe as opções:
//                        1 – Ver saldo
//                        2 – Depositar
//                        3 – Sacar
//                        4 – Extrato
//                        0 – Sair
// c) Usando do...while e switch/case, ligue cada opção à sua função.
// d) Encerre quando o usuário escolher 0.
// e) Ao sair, exiba "Finalizando e Saindo... Obrigado por acessar!".

// → Seu código aqui:
const ler = require('readline-sync')

let saldo = 1000

function verSaldo() {
    console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`)
}

function depositar() {

    let valor = ler.questionFloat("Valor para deposito: ")

    saldo += valor

    verSaldo()
}

function sacar() {

    let valor = ler.questionFloat("Valor para saque: ")

    if (valor <= saldo) {

        saldo -= valor
        verSaldo()

    } else {

        console.log("Saldo insuficiente!")
    }
}

function extrato() {

    let hoje = new Date()

    console.log("======================")
    console.log(`Data: ${hoje.toLocaleDateString()}`)
    verSaldo()
    console.log("======================")
}

function exibirMenu() {

    console.log("\n===== CAIXA ELETRÔNICO =====")
    console.log("1 - Ver saldo")
    console.log("2 - Depositar")
    console.log("3 - Sacar")
    console.log("4 - Extrato")
    console.log("0 - Sair")
}

let opcao

do {

    exibirMenu()

    opcao = ler.questionInt("Escolha uma opcao: ")

    switch (opcao) {

        case 1:
            verSaldo()
            break

        case 2:
            depositar()
            break

        case 3:
            sacar()
            break

        case 4:
            extrato()
            break

        case 0:
            console.log("Finalizando e Saindo... Obrigado por acessar!")
            break

        default:
            console.log("Opcao invalida!")
    }

} while (opcao != 0)
