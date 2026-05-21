const ler = require('readline-sync')

let tabuleiro = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
]

let jogador = "X"
let jogadas = 0

let modo = ler.questionInt(`
[1] Jogador vs Jogador
[2] Jogador vs PC

Escolha: `)

while (jogadas < 9) {

    console.clear()
    console.table(tabuleiro)

    console.log(`Jogador: ${jogador}`)

    let linha
    let coluna

    if (modo === 2 && jogador === "O") {

        while (true) {

            linha = Math.floor(Math.random() * 3)
            coluna = Math.floor(Math.random() * 3)

            if (tabuleiro[linha][coluna] === "-") {
                break
            }
        }

        console.log("Computador jogou...")

    } else {


linha = ler.questionInt("Linha (0-2): ")
        coluna = ler.questionInt("Coluna (0-2): ")

        if (
            linha < 0 || linha > 2 ||
            coluna < 0 || coluna > 2
        ) {
            console.log("Posicao invalida!")
            continue
        }

        if (tabuleiro[linha][coluna] !== "-") {
            console.log("Posicao ocupada!")
            continue
        }
    }

    tabuleiro[linha][coluna] = jogador
    jogadas++


    if (

        (tabuleiro[0][0] === jogador &&
        tabuleiro[0][1] === jogador &&
        tabuleiro[0][2] === jogador)

        ||

        (tabuleiro[1][0] === jogador &&
        tabuleiro[1][1] === jogador &&
        tabuleiro[1][2] === jogador)

        ||

        (tabuleiro[2][0] === jogador &&
        tabuleiro[2][1] === jogador &&
        tabuleiro[2][2] === jogador)

        ||

        (tabuleiro[0][0] === jogador &&
        tabuleiro[1][0] === jogador &&
        tabuleiro[2][0] === jogador)

        ||

        (tabuleiro[0][1] === jogador &&
        tabuleiro[1][1] === jogador &&
        tabuleiro[2][1] === jogador)

        ||

        (tabuleiro[0][2] === jogador &&
        tabuleiro[1][2] === jogador &&
        tabuleiro[2][2] === jogador)

        ||

        (tabuleiro[0][0] === jogador &&
        tabuleiro[1][1] === jogador &&
        tabuleiro[2][2] === jogador)

        ||

        (tabuleiro[0][2] === jogador &&
        tabuleiro[1][1] === jogador &&
        tabuleiro[2][0] === jogador)

    ) {

        console.clear()
        console.table(tabuleiro)

        if (modo === 2 && jogador === "O") {
            console.log("Computador venceu!")
        } else {
            console.log(`Jogador ${jogador} venceu!`)
        }

        break
    }

    jogador = jogador === "X" ? "O" : "X"
}

if (jogadas === 9) {
    console.log("Empate!")
}