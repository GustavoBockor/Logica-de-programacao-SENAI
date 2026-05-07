// ============================================================
// JOGO: Corrida de Cavalos
// ============================================================
//
// Quatro cavalos correm em uma pista de 30 posições.
// A cada rodada, cada cavalo avança um número aleatório de posições (1 a 4). 
// O jogo continua com while até que algum cavalo cruze a linha de chegada (posição >= 30).
// O jogador aposta em um cavalo antes da corrida começar.
// Ao final, descobre se ganhou ou perdeu.
// Se mais de um chegar ao mesmo tempo, ambos são vencedores.
// ============================================================

let lerTeclado = require('readline-sync');

// ============================================================
// CAVALOS e PISTA (não altere)
// ============================================================

const cavalos = [
  { numero: 1, nome: "Trovão",    posicao: 0 },
  { numero: 2, nome: "Relâmpago", posicao: 0 },
  { numero: 3, nome: "Furacão",   posicao: 0 },
  { numero: 4, nome: "Meteoro",   posicao: 0 }
];

const TAMANHO_PISTA = 30;

// ============================================================
// INÍCIO DO JOGO
// ============================================================

console.log("╔══════════════════════════╗");
console.log("║    CORRIDA DE CAVALOS    ║");
console.log("╚══════════════════════════╝");

// PASSO 1 – Apresente os cavalos com console.table(cavalos).
//           Peça em qual cavalo o usuário deseja apostar.
//           Exiba: "Apostou no cavalo <numero> – <nomeCavalo>!"

// → Seu código aqui:


console.log("_______________________________");


// ============================================================
// CORRIDA (while)
// ============================================================
//
// PASSO 2 – Use while para rodar a corrida e, a cada rodada:
//
//   a) Exiba: "════ Rodada n. <rodada> ════"
//
//   b) Realize um sorteio de 1 a 4 para cada cavalo e atribua a nova posição.
//
//   c) Verifique se algum cavalo passou da linha de chegada e se sim, indique o ou os vencedores.
//
//   d) Se não houve vendedor(es), exiba uma lista com a nova posição de cada cavalo.
//
//   e) Após cada rodada, solicite uma confirmação do jogador para continuar (keyInYN()).
//
//   Extra opcional: Ao invés de exibir uma lista com a posição do cavalo (letra d)
//      Exiba a pista em forma de barra de progresso para cada cavalo.
//   Exemplo de saída:
//
//      [1] Trovão     ████░░░░░░░░░░░░░░░░░░░░░░░░░░ 4/30
//      [2] Relâmpago  ███░░░░░░░░░░░░░░░░░░░░░░░░░░ 3/30
//
//   Dica: use "█".repeat(posicao) e "░".repeat(TAMANHO_PISTA - posicao)
//   para montar a barra, e template strings para formatar a linha.
//

// → Seu código aqui:
let lerTeclado = require('readline-sync');

const cavalos = [
  { numero: 1, nome: "Trovão", posicao: 0 },
  { numero: 2, nome: "Relâmpago", posicao: 0 },
  { numero: 3, nome: "Furacão", posicao: 0 },
  { numero: 4, nome: "Meteoro", posicao: 0 }
];

const TAMANHO_PISTA = 30;

console.log("╔══════════════════════════╗");
console.log("║    CORRIDA DE CAVALOS    ║");
console.log("╚══════════════════════════╝");

console.table(cavalos);

let aposta = lerTeclado.questionInt(
  "\nEscolha um cavalo para apostar (1 a 4): "
);

let cavaloApostado = null;

for (let i = 0; i < cavalos.length; i++) {

  if (cavalos[i].numero === aposta) {

    cavaloApostado = cavalos[i];

  }

}

if (cavaloApostado !== null) {

  console.log(
    `\nApostou no cavalo ${cavaloApostado.numero} – ${cavaloApostado.nome}!`
  );

} else {

  console.log("\nCavalo inválido.");

}

console.log("_______________________________");

let rodada = 1;
let vencedores = [];

while (vencedores.length === 0) {

  console.log(`\n════ Rodada n. ${rodada} ════`);

  for (let i = 0; i < cavalos.length; i++) {

    let avanco = Math.floor(Math.random() * 4) + 1;

    cavalos[i].posicao += avanco;

  }

  for (let i = 0; i < cavalos.length; i++) {

    if (cavalos[i].posicao >= TAMANHO_PISTA) {

      vencedores.push(cavalos[i]);

    }

  }

  for (let i = 0; i < cavalos.length; i++) {

    let posicao = cavalos[i].posicao;

    if (posicao > TAMANHO_PISTA) {

      posicao = TAMANHO_PISTA;

    }

    let barra =
      "█".repeat(posicao) +
      "░".repeat(TAMANHO_PISTA - posicao);

    console.log(
      `[${cavalos[i].numero}] ${cavalos[i].nome} ${barra} ${cavalos[i].posicao}/${TAMANHO_PISTA}`
    );

  }

  if (vencedores.length > 0) {

    console.log("\n🏆 VENCEDOR(ES):");

    for (let i = 0; i < vencedores.length; i++) {

      console.log(
        `${vencedores[i].numero} - ${vencedores[i].nome}`
      );

    }

  } else {

    let continuar = lerTeclado.keyInYN(
      "\nContinuar corrida?"
    );

    if (!continuar) {

      console.log("\nCorrida encerrada.");
      break;

    }

  }

  rodada++;

}

if (vencedores.length > 0 && cavaloApostado !== null) {

  let ganhou = false;

  for (let i = 0; i < vencedores.length; i++) {

    if (vencedores[i].numero === cavaloApostado.numero) {

      ganhou = true;

    }

  }

  if (ganhou) {

    console.log("\n🎉 Você ganhou a aposta!");

  } else {

    console.log("\n❌ Você perdeu a aposta.");

  }

}