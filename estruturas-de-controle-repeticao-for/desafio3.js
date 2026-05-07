// ============================================================
//   DESAFIOS (para quem já terminou a atividade 09) – For
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Progressão de saldo bancário
// ------------------------------------------------------------
// Um investimento rende juros compostos mensais.
//
// a) Pergunte ao usuário:
//    - Saldo inicial (questionFloat())
//    - Taxa de juros mensal em % (questionFloat()) — ex: 1.5
//    - Número de meses
// b) Usando um for, calcule e exiba mês a mês:
//    "Mês 1:  R$ <saldo>"
//    "Mês 2:  R$ <saldo>"
//    ...
//    A fórmula de juros compostos é:
//    saldo = saldo * (1 + taxa / 100)
// c) Ao final, exiba o saldo total e o lucro obtido (saldo final - saldo inicial).
// d) Armazene cada mês como objeto { mes, saldo } em um array e exiba com console.table().

// → Seu código aqui:
const ler = require("readline-sync");

let saldoInicial = ler.questionFloat("Saldo inicial: R$ ");
let taxa = ler.questionFloat("Taxa de juros mensal (%): ");
let meses = ler.questionInt("Numero de meses: ");

let saldo = saldoInicial;
let historico = [];

for (let i = 1; i <= meses; i++) {
    saldo = saldo * (1 + taxa / 100);

    console.log(`Mes ${i}: R$ ${saldo.toFixed(2)}`);

    historico.push({
        mes: i,
        saldo: saldo.toFixed(2)
    });
}

let lucro = saldo - saldoInicial;

console.log("Saldo final: R$ " + saldo.toFixed(2));
console.log("Lucro obtido: R$ " + lucro.toFixed(2));

console.table(historico);


// ------------------------------------------------------------
// DESAFIO 2 – Cadastro e relatório de alunos
// ------------------------------------------------------------
// a) Pergunte ao usuário quantos alunos serão cadastrados.
// b) Usando um for, colete de cada aluno:
//    - Nome (question())
//    - Nota 1, Nota 2 e Nota 3 (questionFloat() para cada)
// c) Calcule a média de cada aluno e armazene como objeto:
//    { nome, notas, media, situacao }
//    A situação deve ser:
//      "Aprovado"    → média >= 7
//      "Recuperação" → média >= 5 e < 7
//      "Reprovado"   → média < 5
// d) Após coletar todos, percorra o array e exiba o relatório:
//    "<nome> | Média: <media> | <situacao>"
// e) Exiba:
//    - Média geral da turma
//    - Nome do aluno com maior média
//    - Nome do aluno com menor média
//    - Quantidade de aprovados, em recuperação e reprovados
// f) Exiba o array com console.table().

// → Seu código aqui:
const ler = require("readline-sync");

let quantidade = readline.questionInt("Quantos alunos serao cadastrados? ");

let alunos = [];

let somaMedias = 0;

let maiorMedia = -1;
let menorMedia = 11;

let alunoMaior = "";
let alunoMenor = "";

let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

for (let i = 1; i <= quantidade; i++) {

    let nome = ler.question("Nome: ");

    let nota1 = ler.questionFloat("Nota 1: ");
    let nota2 = ler.questionFloat("Nota 2: ");
    let nota3 = ler.questionFloat("Nota 3: ");

    let media = (nota1 + nota2 + nota3) / 3;

    let situacao = "";

    if (media >= 7) {
        situacao = "Aprovado";
        aprovados++;
    } else if (media >= 5) {
        situacao = "Recuperacao";
        recuperacao++;
    } else {
        situacao = "Reprovado";
        reprovados++;
    }

    alunos.push({
        nome: nome,
        notas: [nota1, nota2, nota3],
        media: media.toFixed(2),
        situacao: situacao
    });

    somaMedias += media;

    if (media > maiorMedia) {
        maiorMedia = media;
        alunoMaior = nome;
    }

    if (media < menorMedia) {
        menorMedia = media;
        alunoMenor = nome;
    }
}

for (let i = 0; i < alunos.length; i++) {
    console.log(
        `${alunos[i].nome} | Media: ${alunos[i].media} | ${alunos[i].situacao}`
    );
}

let mediaTurma = somaMedias / quantidade;

console.log("Media geral da turma: " + mediaTurma.toFixed(2));
console.log("Maior media: " + alunoMaior);
console.log("Menor media: " + alunoMenor);

console.log("Aprovados: " + aprovados);
console.log("Recuperacao: " + recuperacao);
console.log("Reprovados: " + reprovados);

console.table(alunos);

// ------------------------------------------------------------
// DESAFIO 3 – Jogo de adivinhar o número
// ------------------------------------------------------------
// O programa sorteia um número de 1 a 100 e o usuário tem no máximo 7 tentativas para adivinhar.
//
// a) Gere um número aleatório
//    Para gerar um número aleatório, utilize a função Math.random()
// b) Usando um for:
//    - Peça ao usuário um palpite.
//    - Se errar: exiba "Muito alto!" ou "Muito baixo!" conforme o caso.
//    - Informe quantas tentativas restam: "Tentativas restantes: <restantes>"
//    - Se acertar: exiba "Parabéns! Acertou em <i> tentativa(s)!"
// c) Se o usuário esgotar as tentativas sem acertar, exiba:
//    "Game over! O número era <secreto>."
// d) Ao final, exiba um resumo:
//    - Número secreto
//    - Número de tentativas usadas
//    - Resultado: "Vitória" ou "Derrota"

// → Seu código aqui:
const ler = require("readline-sync");

let secreto = Math.floor(Math.random() * 100) + 1;

let venceu = false;
let tentativasUsadas = 0;

for (let i = 1; i <= 7; i++) {

    let palpite = ler.questionInt(`Tentativa ${i}: `);

    tentativasUsadas++;

    if (palpite === secreto) {
        console.log(`Parabens! Acertou em ${i} tentativa(s)!`);
        venceu = true;
        break;
    } else if (palpite > secreto) {
        console.log("Muito alto!");
    } else {
        console.log("Muito baixo!");
    }

    console.log(`Tentativas restantes: ${7 - i}`);
}

if (!venceu) {
    console.log(`Game over! O numero era ${secreto}.`);
}

console.log("Numero secreto: " + secreto);
console.log("Tentativas usadas: " + tentativasUsadas);
console.log("Resultado: " + (venceu ? "Vitoria" : "Derrota"));


// ------------------------------------------------------------
// DESAFIO 4 – Análise de vendas mensais
// ------------------------------------------------------------
// a) Declare o array de vendas mensais (Jan a Dez):
//    const vendas = [12500, 9800, 15200, 11000, 13750, 8900,
//                    17300, 14600, 10200, 16800, 19500, 22000];
// b) Usando fors, calcule e exiba:
//    - Total de vendas no ano
//    - Média mensal
//    - Mês com maior venda (nome do mês e valor)
//    - Mês com menor venda (nome do mês e valor)
//    - Quantos meses ficaram acima da média
//    - Quantos meses ficaram abaixo da média
// c) Exiba um relatório mês a mês indicando se ficou acima ou abaixo da média:
//    "Janeiro:   R$ 12.500,00 – Abaixo da média"
//    "Fevereiro: R$  9.800,00 – Abaixo da média"
//    ...
//    Dica: use um array com os nomes dos meses para exibir o nome correto.
// d) Exiba o array de objetos { mes, venda, situacao } com console.table().

// → Seu código aqui:
const vendas = [
    12500, 9800, 15200, 11000, 13750, 8900,
    17300, 14600, 10200, 16800, 19500, 22000
];

const mesesNomes = [
    "Janeiro", "Fevereiro", "Marco", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
];

let total = 0;

for (let i = 0; i < vendas.length; i++) {
    total += vendas[i];
}

let media = total / vendas.length;

let maiorVenda = vendas[0];
let menorVenda = vendas[0];

let mesMaior = mesesNomes[0];
let mesMenor = mesesNomes[0];

let acimaMedia = 0;
let abaixoMedia = 0;

for (let i = 0; i < vendas.length; i++) {

    if (vendas[i] > maiorVenda) {
        maiorVenda = vendas[i];
        mesMaior = mesesNomes[i];
    }

    if (vendas[i] < menorVenda) {
        menorVenda = vendas[i];
        mesMenor = mesesNomes[i];
    }
}

let relatorio = [];

for (let i = 0; i < vendas.length; i++) {

    let situacao = "";

    if (vendas[i] >= media) {
        situacao = "Acima da media";
        acimaMedia++;
    } else {
        situacao = "Abaixo da media";
        abaixoMedia++;
    }

    console.log(
        `${mesesNomes[i]}: R$ ${vendas[i].toFixed(2)} - ${situacao}`
    );

    relatorio.push({
        mes: mesesNomes[i],
        venda: vendas[i],
        situacao: situacao
    });
}

console.log("Total de vendas: R$ " + total.toFixed(2));
console.log("Media mensal: R$ " + media.toFixed(2));

console.log(`Maior venda: ${mesMaior} - R$ ${maiorVenda.toFixed(2)}`);
console.log(`Menor venda: ${mesMenor} - R$ ${menorVenda.toFixed(2)}`);

console.log("Meses acima da media: " + acimaMedia);
console.log("Meses abaixo da media: " + abaixoMedia);

console.table(relatorio);