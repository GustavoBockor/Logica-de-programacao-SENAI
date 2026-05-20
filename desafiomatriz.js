// ============================================================
//   DESAFIOS – Matriz
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Jogo da velha simplificado
// ------------------------------------------------------------
// a) Declare um tabuleiro 3x3 vazio (preencha os espaços vazios com "-") e exiba-o.
// b) Faça 5 jogadas alternando entre "X" e "O":
//    - Peça a linha e a coluna.
//    - Se a posição já estiver ocupada, exiba aviso e peça novamente.
//    - Após cada jogada, exiba o tabuleiro com console.table().
// c) Não precisa verificar vencedor — apenas alternar X e O.

// → Seu código aqui:

const ler = require('readline-sync')

let tabuleiro = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
]

console.log("TABULEIRO INICIAL")
console.table(tabuleiro)

let jogador = "X"
let jogadas = 0

while (jogadas < 5) {

    console.log(`Jogador: ${jogador}`)

    let linha = ler.questionInt("Linha (0-2): ")
    let coluna = ler.questionInt("Coluna (0-2): ")

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

    tabuleiro[linha][coluna] = jogador

    console.table(tabuleiro)

    if (jogador === "X") {
        jogador = "O"
    } else {
        jogador = "X"
    }

    jogadas++
}



// ------------------------------------------------------------
// DESAFIO 2 – Batalha naval simplificada
// ------------------------------------------------------------
// a) Crie um tabuleiro 5x5 (matriz de objetos):
//    cada célula = { temNavio: false, atingida: false }
// b) Posicione 5 navios em coordenadas aleatórias utilizando Math.random()
//    Garanta que não haja repetição de posição.
// c) Usando while, peça ao usuário tiros (linha e coluna).
//    - Se acertar:  exiba "Acertou!" (e marque atingida = true).
//    - Se errar:    exiba "Água..."
//    - Não permita atirar 2x na mesma posição.
// d) Após cada tiro, mostre o "mapa":
//    "~" = água, "O" = navio não atingido, "X" = navio atingido.
// e) Pare quando todos os 5 navios forem atingidos.
// f) Exiba o número total de tiros usados.

// → Seu código aqui:
let batalha = []

for (let i = 0; i < 5; i++) {

    let linha = []

    for (let j = 0; j < 5; j++) {

        linha.push({
            temNavio: false,
            atingida: false
        })

    }

    batalha.push(linha)
}

let navios = 0

while (navios < 5) {

    let linha = Math.floor(Math.random() * 5)
    let coluna = Math.floor(Math.random() * 5)

    if (!batalha[linha][coluna].temNavio) {

        batalha[linha][coluna].temNavio = true
        navios++
    }
}

let naviosAtingidos = 0
let tiros = 0

while (naviosAtingidos < 5) {

    console.log("MAPA")

    let mapa = []

    for (let i = 0; i < 5; i++) {

        let linhaMapa = []

        for (let j = 0; j < 5; j++) {

            let celula = batalha[i][j]

            if (celula.temNavio && celula.atingida) {
                linhaMapa.push("X")
            }
            else if (celula.temNavio) {
                linhaMapa.push("O")
            }
            else {
                linhaMapa.push("~")
            }
        }

        mapa.push(linhaMapa)
    }

    console.table(mapa)

    let linha = ler.questionInt("Linha do tiro (0-4): ")
    let coluna = ler.questionInt("Coluna do tiro (0-4): ")

    if (
        linha < 0 || linha > 4 ||
        coluna < 0 || coluna > 4
    ) {
        console.log("Posicao invalida!")
        continue
    }

    if (batalha[linha][coluna].atingida) {
        console.log("Voce ja atirou nessa posicao!")
        continue
    }

    batalha[linha][coluna].atingida = true
    tiros++

    if (batalha[linha][coluna].temNavio) {

        console.log("Acertou!")
        naviosAtingidos++

    } else {

        console.log("Agua...")
    }
}

console.log(`Todos os navios foram atingidos!`)
console.log(`Total de tiros: ${tiros}`)



// ------------------------------------------------------------
// DESAFIO 3 – Boletim escolar com console.table
// ------------------------------------------------------------
// a) Utilizando:
// const turma = [
//   { nome: "Ana",    notas: [8.0, 7.5, 9.0, 6.5] },
//   { nome: "Bruno",  notas: [4.0, 5.5, 6.0, 5.0] },
//   { nome: "Carla",  notas: [9.5, 9.0, 9.5, 10]  },
//   { nome: "Diego",  notas: [7.0, 6.5, 7.0, 8.5] },
//   { nome: "Eva",    notas: [3.5, 4.0, 5.0, 4.5] },
// ];
// b) Construa um vetor 'boletim' onde cada item seja:
//    { nome, b1, b2, b3, b4, media, situacao }
//    - situacao: "Aprovado" (>=7), "Recuperação" (>=5 e <7), "Reprovado" (<5)
// c) Exiba o boletim com console.table().
// d) Exiba também:
//    - Aluno(a) com a maior média.
//    - Aluno(a) com a menor média.
//    - Média geral da turma.
//    - Quantidade de aprovados, recuperação e reprovados.

// → Seu código aqui:
const turma = [
    { nome: "Ana",    notas: [8.0, 7.5, 9.0, 6.5] },
    { nome: "Bruno",  notas: [4.0, 5.5, 6.0, 5.0] },
    { nome: "Carla",  notas: [9.5, 9.0, 9.5, 10]  },
    { nome: "Diego",  notas: [7.0, 6.5, 7.0, 8.5] },
    { nome: "Eva",    notas: [3.5, 4.0, 5.0, 4.5] },
  ]
  
  let boletim = []
  
  let maiorMedia = -1
  let menorMedia = 999
  
  let alunoMaior = ""
  let alunoMenor = ""
  
  let somaTurma = 0
  
  let aprovados = 0
  let recuperacao = 0
  let reprovados = 0
  
  for (let aluno of turma) {
  
      let soma = 0
  
      for (let nota of aluno.notas) {
          soma += nota
      }
  
      let media = soma / aluno.notas.length
  
      let situacao = ""
  
      if (media >= 7) {
          situacao = "Aprovado"
          aprovados++
      }
      else if (media >= 5) {
          situacao = "Recuperacao"
          recuperacao++
      }
      else {
          situacao = "Reprovado"
          reprovados++
      }
  
      boletim.push({
          nome: aluno.nome,
          b1: aluno.notas[0],
          b2: aluno.notas[1],
          b3: aluno.notas[2],
          b4: aluno.notas[3],
          media: media.toFixed(1),
          situacao: situacao
      })
  
      if (media > maiorMedia) {
          maiorMedia = media
          alunoMaior = aluno.nome
      }
  
      if (media < menorMedia) {
          menorMedia = media
          alunoMenor = aluno.nome
      }
  
      somaTurma += media
  }
  
  console.table(boletim)
  
  console.log(`Maior media: ${alunoMaior} (${maiorMedia.toFixed(1)})`)
  console.log(`Menor media: ${alunoMenor} (${menorMedia.toFixed(1)})`)
  console.log(`Media geral: ${(somaTurma / turma.length).toFixed(1)}`)
  
  console.log(`Aprovados: ${aprovados}`)
  console.log(`Recuperacao: ${recuperacao}`)
  console.log(`Reprovados: ${reprovados}`)


// ------------------------------------------------------------
// DESAFIO 4 – Cinema com sessões
// ------------------------------------------------------------
// Sistema simplificado de reserva para 3 SESSÕES diferentes,
// cada uma com sua matriz própria de poltronas (4 fileiras x 6 poltronas).
//
// a) Crie uma estrutura:
//    sessoes = [
//      { filme: "Ação X",   sala: matriz4x6 com "L" },
//      { filme: "Drama Y",  sala: matriz4x6 com "L" },
//      { filme: "Comédia Z", sala: matriz4x6 com "L" },
//    ]
// b) Usando do...while, exiba o menu:
//    1 – Listar sessões e ocupação (% ocupada de cada uma)
//    2 – Mostrar mapa de uma sessão (peça o índice 0..2)
//    3 – Reservar poltrona (peça sessão, fileira e poltrona)
//    4 – Cancelar reserva  (peça sessão, fileira e poltrona)
//    0 – Sair
// c) Valide TODOS os inputs e nunca quebre o programa.

// → Seu código aqui:
let sessoes = []

for (let s = 0; s < 3; s++) {

    let sala = []

    for (let i = 0; i < 4; i++) {

        let fileira = []

        for (let j = 0; j < 6; j++) {

            fileira.push("L")
        }

        sala.push(fileira)
    }

    if (s === 0) {
        sessoes.push({
            filme: "Acao X",
            sala: sala
        })
    }

    if (s === 1) {
        sessoes.push({
            filme: "Drama Y",
            sala: sala
        })
    }

    if (s === 2) {
        sessoes.push({
            filme: "Comedia Z",
            sala: sala
        })
    }
}

let opcao

do {

    console.log("\n===== CINEMA =====")
    console.log("1 - Listar sessoes")
    console.log("2 - Mostrar mapa")
    console.log("3 - Reservar poltrona")
    console.log("4 - Cancelar reserva")
    console.log("0 - Sair")

    opcao = ler.questionInt("Opcao: ")

    switch (opcao) {

        case 1:

            for (let i = 0; i < sessoes.length; i++) {

                let ocupadas = 0
                let total = 24

                for (let linha of sessoes[i].sala) {

                    for (let poltrona of linha) {

                        if (poltrona === "O") {
                            ocupadas++
                        }
                    }
                }

                let porcentagem = (ocupadas / total) * 100

                console.log(
                    `${i} - ${sessoes[i].filme} -> ${porcentagem.toFixed(1)}% ocupada`
                )
            }

            break

        case 2:

            let sessaoMapa = ler.questionInt("Sessao (0-2): ")

            if (sessaoMapa >= 0 && sessaoMapa <= 2) {

                console.table(sessoes[sessaoMapa].sala)

            } else {

                console.log("Sessao invalida!")
            }

            break

        case 3:

            let sessaoReserva = ler.questionInt("Sessao (0-2): ")
            let fileira = ler.questionInt("Fileira (0-3): ")
            let poltrona = ler.questionInt("Poltrona (0-5): ")

            if (
                sessaoReserva < 0 || sessaoReserva > 2 ||
                fileira < 0 || fileira > 3 ||
                poltrona < 0 || poltrona > 5
            ) {

                console.log("Dados invalidos!")
                break
            }

            if (sessoes[sessaoReserva].sala[fileira][poltrona] === "L") {

                sessoes[sessaoReserva].sala[fileira][poltrona] = "O"

                console.log("Reserva realizada!")

            } else {

                console.log("Poltrona ja ocupada!")
            }

            break

        case 4:

            let sessaoCancela = ler.questionInt("Sessao (0-2): ")
            let fileiraCancela = ler.questionInt("Fileira (0-3): ")
            let poltronaCancela = ler.questionInt("Poltrona (0-5): ")

            if (
                sessaoCancela < 0 || sessaoCancela > 2 ||
                fileiraCancela < 0 || fileiraCancela > 3 ||
                poltronaCancela < 0 || poltronaCancela > 5
            ) {

                console.log("Dados invalidos!")
                break
            }

            if (
                sessoes[sessaoCancela]
                .sala[fileiraCancela][poltronaCancela] === "O"
            ) {

                sessoes[sessaoCancela]
                .sala[fileiraCancela][poltronaCancela] = "L"

                console.log("Reserva cancelada!")

            } else {

                console.log("Poltrona ja esta livre!")
            }

            break

        case 0:

            console.log("Programa encerrado.")
            break

        default:

            console.log("Opcao invalida!")
    }

} while (opcao !== 0)