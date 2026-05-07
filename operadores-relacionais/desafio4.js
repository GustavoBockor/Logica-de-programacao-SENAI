// ============================================================
//   DESAFIOS (para quem já terminou a atividade 05) – Operadores Relacionais
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
// DESAFIO 1 – Comparador de idades
// ------------------------------------------------------------
// a) Crie um objeto para cada pessoa e peça ao usuário o nome e a idade (question() e questionInt()).
// b) Armazene os objetos em um array "pessoas".
// c) Exiba a array com console.table().
// d) Compare as idades e armazene os resultados em variáveis booleanas:
//    - pessoa1 é mais velha que pessoa2?
//    - pessoa2 é mais nova que pessoa3?
//    - pessoa1 e pessoa3 têm a mesma idade?
//    - alguma das 3 é maior de idade (>= 18)?  (verifique cada uma separadamente)
// e) Exiba cada resultado com template literal identificando as pessoas pelo nome.

// → Seu código aqui:
const ler = require("readline-sync");

let pessoas = [];

for (let i = 1; i <= 3; i++) {

    let nome = ler.question("Nome: ");
    let idade = ler.questionInt("Idade: ");

    pessoas.push({
        nome: nome,
        idade: idade
    });
}

console.table(pessoas);

let maisVelha = pessoas[0].idade > pessoas[1].idade;
let maisNova = pessoas[1].idade < pessoas[2].idade;
let mesmaIdade = pessoas[0].idade === pessoas[2].idade;

let maior1 = pessoas[0].idade >= 18;
let maior2 = pessoas[1].idade >= 18;
let maior3 = pessoas[2].idade >= 18;

console.log(`${pessoas[0].nome} é mais velha que ${pessoas[1].nome}? ${maisVelha}`);
console.log(`${pessoas[1].nome} é mais nova que ${pessoas[2].nome}? ${maisNova}`);
console.log(`${pessoas[0].nome} e ${pessoas[2].nome} têm a mesma idade? ${mesmaIdade}`);

console.log(`${pessoas[0].nome} é maior de idade? ${maior1}`);
console.log(`${pessoas[1].nome} é maior de idade? ${maior2}`);
console.log(`${pessoas[2].nome} é maior de idade? ${maior3}`);

// ------------------------------------------------------------
// DESAFIO 2 – Comparador de produtos
// ------------------------------------------------------------
// a) Peça ao usuário o nome e o preço de 2 produtos (question() e questionFloat()), criando um objeto para cada um.
// b) Exiba os dois objetos com console.table().
// c) Calcule a diferença de preço entre os dois (use Math.abs()).
// d) Armazene e exiba os resultados:
//    - produto1 é mais caro que produto2?
//    - os dois têm o mesmo preço?
//    - o produto mais barato custa menos de R$ 50?
//    - o produto mais caro custa mais de R$ 200?
// e) Exiba cada resultado identificando os produtos pelo nome.

// → Seu código aqui:
const ler = require("readline-sync");

let produto1 = {
    nome: ler.question("Nome do produto 1: "),
    preco: ler.questionFloat("Preco do produto 1: ")
};

let produto2 = {
    nome: ler.question("Nome do produto 2: "),
    preco: ler.questionFloat("Preco do produto 2: ")
};

console.table([produto1, produto2]);

let diferenca;

if (produto1.preco > produto2.preco) {
    diferenca = produto1.preco - produto2.preco;
} else {
    diferenca = produto2.preco - produto1.preco;
}

let maisCaro = produto1.preco > produto2.preco;
let mesmoPreco = produto1.preco === produto2.preco;

let menorPreco;
let maiorPreco;

if (produto1.preco < produto2.preco) {
    menorPreco = produto1.preco;
    maiorPreco = produto2.preco;
} else {
    menorPreco = produto2.preco;
    maiorPreco = produto1.preco;
}

let barato = menorPreco < 50;
let caro = maiorPreco > 200;

console.log(`Diferença de preço: R$ ${diferenca.toFixed(2)}`);

console.log(`${produto1.nome} é mais caro que ${produto2.nome}? ${maisCaro}`);
console.log(`Os dois produtos têm o mesmo preço? ${mesmoPreco}`);
console.log(`O produto mais barato custa menos de R$ 50? ${barato}`);
console.log(`O produto mais caro custa mais de R$ 200? ${caro}`);




// ------------------------------------------------------------
// DESAFIO 3 – Boletim escolar
// ------------------------------------------------------------
// a) Peça ao usuário o nome de um aluno e suas 4 notas (questionFloat()).
// b) Calcule a média das 4 notas (use toFixed(2)).
// c) Crie um objeto "boletim" com as propriedades:
//    nome, notas (array com as 4 notas) e media.
// d) Exiba o objeto com console.table().
// e) Armazene e exiba os resultados das comparações:
//    - O aluno está aprovado (média >= 6)?
//    - O aluno precisa de recuperação (média >= 4 e média < 6)?
//    - Alguma nota é maior que 9?  (verifique cada array separadamente - utilize a função de array "some()" para isso)
//    - A maior nota é maior que a menor nota em mais de 3 pontos?
//      (use Math.max() e Math.min() para encontrar maior e menor)

// → Seu código aqui:
const ler = require("readline-sync");

let nome = ler.question("Nome do aluno: ");

let nota1 = ler.questionFloat("Nota 1: ");
let nota2 = ler.questionFloat("Nota 2: ");
let nota3 = ler.questionFloat("Nota 3: ");
let nota4 = ler.questionFloat("Nota 4: ");

let notas = [nota1, nota2, nota3, nota4];

let media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2);

let boletim = {
    nome: nome,
    notas: notas,
    media: media
};

console.table([boletim]);

let aprovado = media >= 6;
let recuperacao = media >= 4 && media < 6;

let notaAlta = false;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > 9) {
        notaAlta = true;
    }
}

let maior = notas[0];
let menor = notas[0];

for (let i = 0; i < notas.length; i++) {

    if (notas[i] > maior) {
        maior = notas[i];
    }

    if (notas[i] < menor) {
        menor = notas[i];
    }
}

let diferenca = (maior - menor) > 3;

console.log(`Aluno aprovado? ${aprovado}`);
console.log(`Aluno em recuperação? ${recuperacao}`);
console.log(`Alguma nota é maior que 9? ${notaAlta}`);
console.log(`A maior nota é maior que a menor em mais de 3 pontos? ${diferenca}`);



// ------------------------------------------------------------
// DESAFIO 4 – Estoque de loja
// ------------------------------------------------------------
// a) Peça ao usuário os dados de 3 produtos e crie um objeto para cada:
//    nome (question()), preço (questionFloat()) e quantidade em estoque (questionInt()).
// b) Crie um array "estoque" e armazene os 3 produtos.
// c) Exiba o array com console.table().
// d) Para cada produto, armazene em variáveis booleanas e exiba:
//    - O produto tem estoque disponível (quantidade > 0)?
//    - O produto está com estoque baixo (quantidade <= 5)?
//    - O produto é considerado caro (preço > 100)?
//    - O produto tem preço abaixo de 50?
// e) Use template literal identificando cada produto pelo nome.

// → Seu código aqui:
const ler = require("readline-sync");

let estoque = [];

for (let i = 1; i <= 3; i++) {

    let nome = ler.question("Nome do produto: ");
    let preco = ler.questionFloat("Preco: ");
    let quantidade = ler.questionInt("Quantidade em estoque: ");

    estoque.push({
        nome: nome,
        preco: preco,
        quantidade: quantidade
    });
}

console.table(estoque);

for (let i = 0; i < estoque.length; i++) {

    let disponivel = estoque[i].quantidade > 0;
    let baixo = estoque[i].quantidade <= 5;
    let caro = estoque[i].preco > 100;
    let barato = estoque[i].preco < 50;

    console.log(`${estoque[i].nome} tem estoque disponível? ${disponivel}`);
    console.log(`${estoque[i].nome} está com estoque baixo? ${baixo}`);
    console.log(`${estoque[i].nome} é considerado caro? ${caro}`);
    console.log(`${estoque[i].nome} custa menos de R$ 50? ${barato}`);
}