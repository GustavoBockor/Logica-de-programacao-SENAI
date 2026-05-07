// ============================================================
//   DESAFIOS (para quem já terminou a atividade 08) – Switch / Case
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Simulador de caixa de restaurante
// ------------------------------------------------------------
// Crie uma lista de objetos para o Cardápio:
//   1 – Frango Grelhado  R$ 32,00
//   2 – Filé ao Molho    R$ 45,00
//   3 – Massa Italiana   R$ 28,00
//   4 – Salada Caesar    R$ 22,00
//   5 – Sopa do Dia      R$ 18,00
//
// Crie uma lista de objetos para as Bebidas:
//   1 – Suco Natural     R$ 9,00
//   2 – Refrigerante     R$ 7,00
//   3 – Água             R$ 4,00
//   4 – Sem bebida       R$ 0,00
//
// a) Pergunte ao usuário:
//    - Nome pessoal.
//    - Número do prato desejado.
//    - Número da bebida desejada.
// b) Com switch/case, determine o prato e o preço do prato,
//    e outro switch para a bebida e seu preço.
//    Para opções inválidas, exiba "Item inválido." e use preço 0.
// c) Armazene os dados em um objeto "pedido":
//    nomeCliente, nomePrato, precoPrato, nomeBebida, precoBebida, total.
// d) Pergunte se vai pagar no pix (keyInYN()).
//    Se sim, aplique 10% de desconto no total.
//    Atualize o total no objeto.
// e) Exiba o objeto com console.table().
// f) Exiba o recibo final com template literal.

// → Seu código aqui:
const ler = require("readline-sync");

let nomeCliente = ler.question("Nome: ");
let prato = ler.questionInt("Prato: ");
let bebida = ler.questionInt("Bebida: ");

let nomePrato = "";
let precoPrato = 0;

let nomeBebida = "";
let precoBebida = 0;

switch (prato) {

    case 1:
        nomePrato = "Frango Grelhado";
        precoPrato = 32;
        break;

    case 2:
        nomePrato = "File ao Molho";
        precoPrato = 45;
        break;

    case 3:
        nomePrato = "Massa Italiana";
        precoPrato = 28;
        break;

    case 4:
        nomePrato = "Salada Caesar";
        precoPrato = 22;
        break;

    case 5:
        nomePrato = "Sopa do Dia";
        precoPrato = 18;
        break;

    default:
        console.log("Item invalido.");
}

switch (bebida) {

    case 1:
        nomeBebida = "Suco Natural";
        precoBebida = 9;
        break;

    case 2:
        nomeBebida = "Refrigerante";
        precoBebida = 7;
        break;

    case 3:
        nomeBebida = "Agua";
        precoBebida = 4;
        break;

    case 4:
        nomeBebida = "Sem bebida";
        precoBebida = 0;
        break;

    default:
        console.log("Item invalido.");
}

let total = precoPrato + precoBebida;

let pix = ler.keyInYN("Vai pagar no pix? ");

if (pix) {
    total = total - (total * 0.10);
}

let pedido = {
    nomeCliente,
    nomePrato,
    precoPrato,
    nomeBebida,
    precoBebida,
    total
};

console.table([pedido]);

console.log(
    `Cliente: ${pedido.nomeCliente}
Prato: ${pedido.nomePrato}
Bebida: ${pedido.nomeBebida}
Total: R$ ${pedido.total.toFixed(2)}`
);



// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - O valor a converter (questionFloat()).
//    - O tipo de conversão (questionInt()):
//      1 – Km para Milhas
//      2 – Milhas para Km
//      3 – Celsius para Fahrenheit
//      4 – Fahrenheit para Celsius
//      5 – Kg para Libras
//      6 – Libras para Kg
// b) Com switch/case, aplique a fórmula correta:
//    - Km → Milhas:         valor * 0.621371
//    - Milhas → Km:         valor * 1.60934
//    - Celsius → Fahrenheit: (valor * 9/5) + 32
//    - Fahrenheit → Celsius: (valor - 32) * 5/9
//    - Kg → Libras:         valor * 2.20462
//    - Libras → Kg:         valor / 2.20462
//    - default: "Tipo de conversão inválido."
// c) Armazene a conversão em um objeto:
//    tipo, valorOriginal, unidadeOriginal, resultado, unidadeResultado.
// d) Exiba o objeto com console.table().
// e) Exiba: "<valorOriginal> <unidadeOriginal> = <resultado> <unidadeResultado>"

// → Seu código aqui:
const ler = require("readline-sync");

let valor =
    ler.questionFloat("Valor: ");

let tipo =
    ler.questionInt("Conversao: ");

let conversao = {
    tipo: "",
    valorOriginal: valor,
    unidadeOriginal: "",
    resultado: 0,
    unidadeResultado: ""
};

switch (tipo) {

    case 1:
        conversao.tipo = "Km para Milhas";
        conversao.unidadeOriginal = "Km";
        conversao.resultado =
            valor * 0.621371;
        conversao.unidadeResultado =
            "Milhas";
        break;

    case 2:
        conversao.tipo = "Milhas para Km";
        conversao.unidadeOriginal =
            "Milhas";
        conversao.resultado =
            valor * 1.60934;
        conversao.unidadeResultado =
            "Km";
        break;

    case 3:
        conversao.tipo =
            "Celsius para Fahrenheit";
        conversao.unidadeOriginal =
            "C";
        conversao.resultado =
            (valor * 9 / 5) + 32;
        conversao.unidadeResultado =
            "F";
        break;

    case 4:
        conversao.tipo =
            "Fahrenheit para Celsius";
        conversao.unidadeOriginal =
            "F";
        conversao.resultado =
            (valor - 32) * 5 / 9;
        conversao.unidadeResultado =
            "C";
        break;

    case 5:
        conversao.tipo =
            "Kg para Libras";
        conversao.unidadeOriginal =
            "Kg";
        conversao.resultado =
            valor * 2.20462;
        conversao.unidadeResultado =
            "Lb";
        break;

    case 6:
        conversao.tipo =
            "Libras para Kg";
        conversao.unidadeOriginal =
            "Lb";
        conversao.resultado =
            valor / 2.20462;
        conversao.unidadeResultado =
            "Kg";
        break;

    default:
        console.log(
            "Tipo de conversao invalido."
        );
}

console.table([conversao]);

console.log(
    `${conversao.valorOriginal} ${conversao.unidadeOriginal} = ${conversao.resultado.toFixed(2)} ${conversao.unidadeResultado}`
);



// ------------------------------------------------------------
// DESAFIO 3 – Jogo de pedra, papel e tesoura
// ------------------------------------------------------------
// a) Gere a jogada do computador aleatoriamente:
//    const jogada = ["pedra", "papel", "tesoura"];
//    const computador = jogada[Math.floor(Math.random() * 3)];
// b) Pergunte ao usuário sua jogada - questionInt():
//    1 – Pedra | 2 – Papel | 3 – Tesoura
//    Para opções inválidas, exiba "Jogada inválida." e encerre.
// c) Exiba as jogadas: "Você: <jogada> | Computador: <computador>"
// d) Determine o vencedor ou empate com switch/case aninhado ou combinando
//    switch com if/else
// e) Exiba o resultado final.

// → Seu código aqui:
const ler = require("readline-sync");

const jogada = [
    "pedra",
    "papel",
    "tesoura"
];

const computador =
    jogada[
        parseInt(Math.random() * 3)
    ];

let opcao =
    ler.questionInt(
        "1-Pedra | 2-Papel | 3-Tesoura: "
    );

let jogador = "";

switch (opcao) {

    case 1:
        jogador = "pedra";
        break;

    case 2:
        jogador = "papel";
        break;

    case 3:
        jogador = "tesoura";
        break;

    default:
        console.log("Jogada invalida.");
}

if (
    jogador !== ""
) {

    console.log(
        `Voce: ${jogador} | Computador: ${computador}`
    );

    if (
        jogador === computador
    ) {

        console.log("Empate!");

    } else {

        switch (jogador) {

            case "pedra":

                if (
                    computador === "tesoura"
                ) {
                    console.log(
                        "Voce venceu!"
                    );
                } else {
                    console.log(
                        "Computador venceu!"
                    );
                }

                break;

            case "papel":

                if (
                    computador === "pedra"
                ) {
                    console.log(
                        "Voce venceu!"
                    );
                } else {
                    console.log(
                        "Computador venceu!"
                    );
                }

                break;

            case "tesoura":

                if (
                    computador === "papel"
                ) {
                    console.log(
                        "Voce venceu!"
                    );
                } else {
                    console.log(
                        "Computador venceu!"
                    );
                }

                break;
        }
    }
}

// ------------------------------------------------------------
// DESAFIO 4 – Sistema de suporte técnico
// ------------------------------------------------------------
// Um sistema de atendimento automatizado funciona por menus.
//
// Menu principal (questionInt()):
//   1 – Internet | 2 – TV | 3 – Telefone | 4 – Falar com atendente | 0 – Encerrar
//
// Se o usuário escolher 1 (Internet), exiba um sub-menu (questionInt()):
//   1 – Sem conexão
//   2 – Conexão lenta
//   3 – Wi-Fi não aparece
//
// Se o usuário escolher 2 (TV), exiba um sub-menu (questionInt()):
//   1 – Sem sinal
//   2 – Imagem ruim
//   3 – Canais sumidos
//
// Para cada sub-opção, exiba uma mensagem de orientação específica.
// Para as opções 3 (Telefone) e 4 (Falar com atendente), exiba "Por favor, aguarde na linha.".
// Para a opção 0, exiba "Atendimento encerrado."
// No default, exiba "Opção inválida."
//
// a) Implemente o fluxo acima usando switch/case no menu principal
//    e switch/case nos sub-menus, com if/else se necessário.
// b) Exiba todas as mensagens com template literal.

// → Seu código aqui:
const ler = require("readline-sync");

let menu =
    ler.questionInt(
        "1-Internet | 2-TV | 3-Telefone | 4-Atendente | 0-Encerrar: "
    );

switch (menu) {

    case 1:

        let internet =
            ler.questionInt(
                "1-Sem conexao | 2-Conexao lenta | 3-WiFi nao aparece: "
            );

        switch (internet) {

            case 1:
                console.log(
                    "Reinicie o modem."
                );
                break;

            case 2:
                console.log(
                    "Aproxime-se do roteador."
                );
                break;

            case 3:
                console.log(
                    "Verifique as configuracoes do Wi-Fi."
                );
                break;

            default:
                console.log(
                    "Opcao invalida."
                );
        }

        break;

    case 2:

        let tv =
            ler.questionInt(
                "1-Sem sinal | 2-Imagem ruim | 3-Canais sumidos: "
            );

        switch (tv) {

            case 1:
                console.log(
                    "Verifique os cabos."
                );
                break;

            case 2:
                console.log(
                    "Reinicie o aparelho."
                );
                break;

            case 3:
                console.log(
                    "Atualize a lista de canais."
                );
                break;

            default:
                console.log(
                    "Opcao invalida."
                );
        }

        break;

    case 3:
        console.log(
            "Por favor, aguarde na linha."
        );
        break;

    case 4:
        console.log(
            "Por favor, aguarde na linha."
        );
        break;

    case 0:
        console.log(
            "Atendimento encerrado."
        );
        break;

    default:
        console.log(
            "Opcao invalida."
        );
}

// ------------------------------------------------------------
// DESAFIO 5 – TÁXI OU APP?
// ------------------------------------------------------------
// O usuário informa a distância em km e o horário (dia ou noite).
// O programa calcula o preço estimado no táxi e em um app de corridas
// e recomenda a opção mais barata.
//
// Tabela:
//   Táxi: R$5 bandeirada + R$3/km (noite: R$4/km)
//   App:  R$2 taxa fixa  + R$2/km (noite: R$2.50/km)

// → Seu código aqui:
const ler = require("readline-sync");

let distancia =
    ler.questionFloat(
        "Distancia em km: "
    );

let horario =
    ler.question(
        "Horario (dia/noite): "
    );

let precoTaxi = 0;
let precoApp = 0;

switch (horario) {

    case "dia":

        precoTaxi =
            5 + (distancia * 3);

        precoApp =
            2 + (distancia * 2);

        break;

    case "noite":

        precoTaxi =
            5 + (distancia * 4);

        precoApp =
            2 + (distancia * 2.5);

        break;

    default:

        console.log(
            "Horario invalido."
        );
}

if (
    horario === "dia" ||
    horario === "noite"
) {

    console.log(
        `Taxi: R$ ${precoTaxi.toFixed(2)}`
    );

    console.log(
        `App: R$ ${precoApp.toFixed(2)}`
    );

    if (
        precoTaxi < precoApp
    ) {

        console.log(
            "Taxi e mais barato."
        );

    } else if (
        precoApp < precoTaxi
    ) {

        console.log(
            "App e mais barato."
        );

    } else {

        console.log(
            "Os dois possuem o mesmo valor."
        );
    }
}


// ------------------------------------------------------------
// DESAFIO 6 – CRIE SEU PERSONAGEM DE RPG
// ------------------------------------------------------------
// O usuário responde 3 ou mais perguntas de multipla escolha (crie outras se quiser)
//  ex: prefere magia ou força?
//      prefere ataque ou defesa?
//      prefere floresta ou cidade?
//      prefere dia ou noite?
//      prefere furtividade ou agressividade?
//      prefere ataque a distância ou corpo a corpo?
// Com base nas respostas, o programa revela uma classe de personagem
// (guerreiro, mago, arqueiro, ladino, etc).
//
// Você pode criar um sistema de atribuição de pontos para cada resposta
// e determinar a classe final com base na pontuação total,
// ou simplesmente fazer verificações diretas. Use a criatividade para resolver este desafio.

// → Seu código aqui:
const ler = require("readline-sync");

let magia = ler.questionInt(
    "1-Magia | 2-Forca: "
);

let combate = ler.questionInt(
    "1-Ataque | 2-Defesa: "
);

let ambiente = ler.questionInt(
    "1-Floresta | 2-Cidade: "
);

let estilo = ler.questionInt(
    "1-Furtividade | 2-Agressividade: "
);

let pontosMago = 0;
let pontosGuerreiro = 0;
let pontosArqueiro = 0;
let pontosLadino = 0;

switch (magia) {

    case 1:
        pontosMago += 2;
        break;

    case 2:
        pontosGuerreiro += 2;
        break;
}

switch (combate) {

    case 1:
        pontosArqueiro += 1;
        break;

    case 2:
        pontosGuerreiro += 1;
        break;
}

switch (ambiente) {

    case 1:
        pontosArqueiro += 2;
        break;

    case 2:
        pontosLadino += 2;
        break;
}

switch (estilo) {

    case 1:
        pontosLadino += 2;
        break;

    case 2:
        pontosGuerreiro += 2;
        break;
}

let classe = "";

if (
    pontosMago >
    pontosGuerreiro &&
    pontosMago >
    pontosArqueiro &&
    pontosMago >
    pontosLadino
) {

    classe = "Mago";

} else if (
    pontosGuerreiro >
    pontosMago &&
    pontosGuerreiro >
    pontosArqueiro &&
    pontosGuerreiro >
    pontosLadino
) {

    classe = "Guerreiro";

} else if (
    pontosArqueiro >
    pontosMago &&
    pontosArqueiro >
    pontosGuerreiro &&
    pontosArqueiro >
    pontosLadino
) {

    classe = "Arqueiro";

} else {

    classe = "Ladino";
}

console.log(
    `Sua classe e: ${classe}`
);