// ============================================================
//   DESAFIOS (para quem já terminou a atividade 06) – Operadores Lógicos
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node desafios.js
//
// Dica: Ao terminar um desafio, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Cadastro de candidato
// ------------------------------------------------------------
// Uma vaga de emprego exige os seguintes critérios:
//   - Ter entre 18 e 40 anos (inclusive)
//   - Ter pelo menos 2 anos de experiência
//   - Possuir ensino superior completo OU ter feito curso técnico
//   - Residir no Brasil
//
// a) Peça ao usuário e crie um objeto "candidato" com as seguintes informações:
//    - Nome (question())
//    - Idade (questionInt())
//    - Anos de experiência (questionInt())
//    - Possui ensino superior? (keyInYN())
//    - Possui curso técnico? (keyInYN())
//    - Reside no Brasil? (keyInYN())
// b) Calcule e armazene em variáveis booleanas dentro de um objeto "criteriosAprovacao":
//    - idadeValida: idade maior ou igual a 18 e idade menor ou igual a 40
//    - experienciaSuficiente: anosExperiencia maior que 2
//    - formacaoAdequada: possuiSuperior ou possuiTecnico
//    - candidatoAprovado: idadeValida e experienciaSuficiente e formacaoAdequada e resideNoBrasil
// d) Exiba ambos objetos com console.table().
// e) Exiba a mensagem final usando ternário:
//    Se aprovado → "Parabéns, <nome>! Você está aprovado(a) para a próxima fase."
//    Se não → "Infelizmente, <nome>, seu perfil não atende aos requisitos desta vaga."

// → Seu código aqui:
const ler = require("readline-sync");

let candidato = {
    nome: ler.question("Nome: "),
    idade: ler.questionInt("Idade: "),
    anosExperiencia: ler.questionInt("Anos de experiencia: "),
    possuiSuperior: ler.keyInYN("Possui ensino superior? "),
    possuiTecnico: ler.keyInYN("Possui curso tecnico? "),
    resideNoBrasil: ler.keyInYN("Reside no Brasil? ")
};

let criteriosAprovacao = {
    idadeValida:
        candidato.idade >= 18 &&
        candidato.idade <= 40,

    experienciaSuficiente:
        candidato.anosExperiencia >= 2,

    formacaoAdequada:
        candidato.possuiSuperior ||
        candidato.possuiTecnico
};

criteriosAprovacao.candidatoAprovado =
    criteriosAprovacao.idadeValida &&
    criteriosAprovacao.experienciaSuficiente &&
    criteriosAprovacao.formacaoAdequada &&
    candidato.resideNoBrasil;

console.table([candidato]);
console.table([criteriosAprovacao]);

console.log(
    criteriosAprovacao.candidatoAprovado
    ? `Parabens, ${candidato.nome}! Voce esta aprovado(a) para a proxima fase.`
    : `Infelizmente, ${candidato.nome}, seu perfil nao atende aos requisitos desta vaga.`
);


// ------------------------------------------------------------
// DESAFIO 2 – Classificação de temperatura
// ------------------------------------------------------------
// a) Peça ao usuário a temperatura atual em graus Celsius (questionFloat()).
// b) Usando operadores lógicos e o ternário, armazene e exiba a classificação:
//    - "Muito frio"    → temperatura < 10
//    - "Frio"          → temperatura >= 10 && temperatura < 18
//    - "Agradável"     → temperatura >= 18 && temperatura <= 25
//    - "Quente"        → temperatura > 25 && temperatura <= 35
//    - "Muito quente"  → temperatura > 35
//    Dica: use variáveis booleanas para cada faixa e ternários aninhados, ou
//          simplesmente exiba cada resultado booleano por linha.
// c) Pergunte se o usuário está em ambiente interno (keyInYN()).
// d) Armazene em "precisaArCondicionado":
//    temperatura > 28 && !estaEmAmbienteInterno → não, porque já está fora
//    temperatura > 28 && estaEmAmbienteInterno  → sim, precisa de ar condicionado
//    Use a lógica: precisaArCondicionado = temperatura maior que 28 e estaEmAmbienteInterno
// e) Exiba o resultado usando ternário.

// → Seu código aqui:
const ler = require("readline-sync");

let temperatura = ler.questionFloat("Temperatura atual: ");

let muitoFrio = temperatura < 10;
let frio = temperatura >= 10 && temperatura < 18;
let agradavel = temperatura >= 18 && temperatura <= 25;
let quente = temperatura > 25 && temperatura <= 35;
let muitoQuente = temperatura > 35;

let classificacao =
    muitoFrio ? "Muito frio"
    : frio ? "Frio"
    : agradavel ? "Agradavel"
    : quente ? "Quente"
    : "Muito quente";

console.log(`Classificacao: ${classificacao}`);

let estaEmAmbienteInterno =
    ler.keyInYN("Esta em ambiente interno? ");

let precisaArCondicionado =
    temperatura > 28 &&
    estaEmAmbienteInterno;

console.log(
    precisaArCondicionado
    ? "Precisa de ar condicionado."
    : "Nao precisa de ar condicionado."
);

// ------------------------------------------------------------
// DESAFIO 3 – Plano de academia
// ------------------------------------------------------------
// Regras de desconto:
//   - 10% de desconto se for estudante e tiver menos de 25 anos
//   - 15% de desconto se for idoso (maior ou igual a 60 anos)
//   - 5%  de desconto se pagar no PIX (não acumulativo com os outros)
//   - Sem desconto nos demais casos
//
// a) Peça ao usuário:
//    - Nome
//    - Idade
//    - É estudante?
//    - Vai pagar no PIX?
//    - Plano 1, 2, 3 ou 4?
// b) Defina os valores mensais com valor base de:
//    - Plano 1: R$ 120.00
//    - Plano 2: R$ 150.00
//    - Plano 3: R$ 180.00
//    - Plano 4: R$ 200.00
// c) Calcule o percentual de desconto usando variáveis booleanas:
//    - descontoEstudante: ehEstudante e idade menor que 25
//    - descontoIdoso: idade maior ou igual a 60
//    - descontoPix: pagaNoPix e !descontoEstudante e !descontoIdoso
//    - percentual: descontoEstudante ? 10 : descontoIdoso ? 15 : descontoPix ? 5 : 0
// d) Calcule o valor final com desconto.
// e) Crie um objeto "plano" com: nome, idade, valorBase, percentualDesconto, valorFinal.
// f) Exiba o objeto com console.table().
// g) Exiba uma mensagem com template literal resumindo o plano.

// → Seu código aqui:
const ler = require("readline-sync");

let nome = ler.question("Nome: ");
let idade = ler.questionInt("Idade: ");
let ehEstudante = ler.keyInYN("Eh estudante? ");
let pagaNoPix = ler.keyInYN("Vai pagar no PIX? ");
let planoEscolhido = ler.questionInt("Plano (1 a 4): ");

let valorBase;

if (planoEscolhido === 1) {
    valorBase = 120;
} else if (planoEscolhido === 2) {
    valorBase = 150;
} else if (planoEscolhido === 3) {
    valorBase = 180;
} else {
    valorBase = 200;
}

let descontoEstudante =
    ehEstudante &&
    idade < 25;

let descontoIdoso =
    idade >= 60;

let descontoPix =
    pagaNoPix &&
    !descontoEstudante &&
    !descontoIdoso;

let percentual =
    descontoEstudante ? 10
    : descontoIdoso ? 15
    : descontoPix ? 5
    : 0;

let valorFinal =
    valorBase - (valorBase * percentual / 100);

let plano = {
    nome: nome,
    idade: idade,
    valorBase: valorBase,
    percentualDesconto: percentual,
    valorFinal: valorFinal.toFixed(2)
};

console.table([plano]);

console.log(
    `${nome} escolheu o plano de R$ ${valorBase.toFixed(2)}, recebeu ${percentual}% de desconto e pagara R$ ${valorFinal.toFixed(2)}.`
);