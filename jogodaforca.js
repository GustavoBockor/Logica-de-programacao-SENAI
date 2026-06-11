const ler = require("readline-sync").question;

const palavras = [
    "abacaxi", "janela", "montanha", "computador", "caneta",
    "oceano", "floresta", "bicicleta", "relampago", "telefone",
    "escola", "cachorro", "gato", "livro", "mesa",
    "cadeira", "nuvem", "estrela", "planeta", "foguete",
    "aviao", "carro", "onibus", "trem", "barco",
    "rio", "cachoeira", "praia", "deserto", "ilha",
    "castelo", "ponte", "torre", "hospital", "mercado",
    "padaria", "fazenda", "jardim", "flor", "arvore",
    "semente", "fruta", "legume", "queijo", "pao",
    "chocolate", "sorvete", "pizza", "hamburguer", "suco",
    "musica", "violao", "piano", "bateria", "microfone",
    "teatro", "cinema", "filme", "serie", "jornal",
    "revista", "mapa", "relogio", "espelho", "mochila",
    "camiseta", "sapato", "bone", "oculos", "anel",
    "colar", "pulseira", "martelo", "chave", "parafuso",
    "ferramenta", "lampada", "energia", "internet", "senha",
    "codigo", "programa", "algoritmo", "variavel", "funcao",
    "vetor", "matriz", "numero", "palavra", "frase",
    "idioma", "amizade", "familia", "trabalho", "viagem",
    "aventura", "misterio", "segredo", "universo"
];


function sortearPalavra() {
    return palavras[Math.floor(Math.random() * palavras.length)];
}

function exibirPalavra(palavra, letrasCorretas) {
    let resultado = "";

    for (let i = 0; i < palavra.length; i++) {
        let encontrou = false;

        for (let j = 0; j < letrasCorretas.length; j++) {
            if (palavra[i] === letrasCorretas[j]) {
                encontrou = true;
            }
        }

        if (encontrou) {
            resultado += palavra[i] + " ";
        } else {
            resultado += "_ ";
        }
    }

    return resultado;
}

function exibirLetras(letras) {
    let resultado = "";

    for (let i = 0; i < letras.length; i++) {
        resultado += letras[i] + " ";
    }

    return resultado;
}

function letraExiste(palavra, letra) {
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === letra) {
            return true;
        }
    }

    return false;
}

function letraJaDigitada(letra, corretas, erradas) {
    for (let i = 0; i < corretas.length; i++) {
        if (corretas[i] === letra) {
            return true;
        }
    }

    for (let i = 0; i < erradas.length; i++) {
        if (erradas[i] === letra) {
            return true;
        }
    }

    return false;
}

function venceu(palavra, letrasCorretas) {
    for (let i = 0; i < palavra.length; i++) {
        let encontrou = false;

        for (let j = 0; j < letrasCorretas.length; j++) {
            if (palavra[i] === letrasCorretas[j]) {
                encontrou = true;
            }
        }

        if (!encontrou) {
            return false;
        }
    }

    return true;
}

const palavra = sortearPalavra();

let corretas = [];
let erradas = [];
let tentativas = 6;

while (tentativas > 0) {
    console.log();
    console.log("Palavra:", exibirPalavra(palavra, corretas));
    console.log("Letras erradas:", exibirLetras(erradas));
    console.log("Tentativas restantes:", tentativas);

    const letra = ler("Digite uma letra: ").toLowerCase();

    if (letraJaDigitada(letra, corretas, erradas)) {
        console.log("Essa letra já foi digitada!");
        continue;
    }

    if (letraExiste(palavra, letra)) {
        corretas.push(letra);
    } else {
        erradas.push(letra);
        tentativas--;
    }

    if (venceu(palavra, corretas)) {
        console.log();
        console.log("Parabéns! Você venceu!");
        console.log("A palavra era:", palavra);
        break;
    }
}

if (tentativas === 0) {
    console.log();
    console.log("Você perdeu!");
    console.log("A palavra era:", palavra);
}