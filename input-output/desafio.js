// ============================================================
//   DESAFIOS (para quem já terminou a atividade 03) – Input e Output em JavaScript
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
// DESAFIO 1 – Cadastro completo
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados:
//    nome, idade, profissão, cidade, se gosta de JavaScript, lista de comida favoritos e lista de pessoa(s) com que mora (nome e idade).
//    pense em qual tipo de dado cada resposta representa para armazena-los corretamente.
// b) Crie um objeto "cadastro" com todas essas propriedades.
// c) Exiba o objeto com console.table().
// d) Exiba também uma mensagem usando template literal com todos os dados, ex:
//    "Nome: <nome>. Idade: <idade> anos. Profissão: <profissão> em <cidade>. Gosta de JS: <sim/não> ...."

// → Seu código aqui:
// const lerTeclado = require ('readline-sync')
// const nome = lerTeclado.question("Qual é o seu nome")
// const idade = lerTeclado.questionInt("Qual sua idade?")
// const profissao = lerTeclado.question("Qual sua profissão?")
// const gostadeJS = lerTeclado.keyInYN("Gosta de JS?")
// const comida = lerTeclado.question("Lista de comidas favoritas?")
// const mora = lerTeclado.question("Com quem voce mora?")
// const cidade = lerTeclado.question("Mora aonde?")
// const usuario = {
// nome,
// idade,
// profissao,
// gostadeJS,
// comida,
// mora,
// cidade,
// }

// console.table(usuario)
// console.log(`Nome:${nome}. Idade:${idade}. Profissão:${profissao} em ${cidade}. Gosta de JS?${gostadeJS}.`)


// ------------------------------------------------------------
// DESAFIO 2 – Dois amigos
// ------------------------------------------------------------
// a) Peça os dados de 2 pessoas diferentes (nome, idade e cidade de cada uma).
// b) Crie um objeto para cada pessoa com essas propriedades.
// c) Crie uma array chamada "amigos" contendo os dois objetos.
// d) Exiba a array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:
// const lerTeclado = require ('readline-sync')
// const nome = lerTeclado.question("Qual seu nome?")
// const idade = lerTeclado.questionInt("Qual sua idade?")
// const cidade = lerTeclado.question("Onde voce mora?")
// const nome2 = lerTeclado.question("Qual seu nome?")
// const idade2 = lerTeclado.questionInt("Qual sua idade?")
// const cidade2 = lerTeclado.question("Onde voce mora?")
// const pessoa1 = {
// nome:nome,
// idade:idade,
// cidade:cidade,
// }
// const pessoa2 = {
// nome2:nome2,
// idade2:idade2,
// cidade2:cidade2
// }
// let amigos = [pessoa1, pessoa2]
// console.table(amigos)

// console.log(amigos[1].nome, amigos[1].idade)
// console.log(amigos[0].nome, amigos[0].cidade)




// ------------------------------------------------------------
// DESAFIO 3 – Pedido de restaurante
// ------------------------------------------------------------
// a) Informe ao usuário (com console.info) que ele vai montar um pedido.
// b) Exiba um menu (quanto mais estilizado melhor!) com as opções de entrada, prato principal, sobremesa e bebidas.
// b) Peça ao usuário que escolha:
//    - Uma entrada
//    - Um prato principal
//    - Uma sobremesa
//    - Duas bebidas (uma de cada vez)
// c) Crie um objeto "pedido" com as propriedades: entrada, pratoPrincipal, sobremesa e listaBebidas.
// d) Exiba o pedido com console.table().
// e) Exiba também no console a mensagem:
//    "Seu pedido: Entrada: <entrada>, Prato Principal: <pratoPrincipal>, Sobremesa: <sobremesa>, Bebida 1: <bebida1>, Bebida 2: <bebida2>. Bom apetite!"

// → Seu código aqui:
// console.info("Monte seu pedido");
// let entrada =("Entrada:");
// let prato = ("Prato principal:");
// let sobremesa =("Sobremesa:");
// let bebida1 = ("Bebida 1:");
// let bebida2 = ("Bebida 2:");

// let pedido = {
//   entrada: entrada,
//   pratoPrincipal: prato,
//   sobremesa: sobremesa,
//   listaBebidas: [bebida1, bebida2]
// };

// console.table(pedido);
// console.log("Seu pedido: Entrada:", entrada,
//             "Prato Principal:", prato,
//             "Sobremesa:", sobremesa,
//             "Bebida 1:", bebida1,
//             "Bebida 2:", bebida2,
//             "Bom apetite!");


// ------------------------------------------------------------
// DESAFIO 4 – Perfil de jogador
// ------------------------------------------------------------
// a) Peça ao usuário: apelido, jogo favorito e horas totais jogadas (aproximadas)
// b) Pergunte se ele joga em time (sim/não).
// c) Crie um objeto "perfil" com todas as propriedades:
//    apelido, jogoFavorito, horasTotaisJogadas, jogaEmTime.
// d) Exiba o perfil com console.table().
// e) Use console.warn() para exibir: "Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade."

// → Seu código aqui:
// const ler = require('readline-sync')
// let apelido = ler.question("Qual seu apelido? ")
// let jogoFavorito = ler.question("Qual seu jogo favorito? ")
// let horasTotaisJogadas = ler.questionInt("Quantas horas ja jogou? ")
// let jogaEmTime = ler.keyInYN("Joga em algum time? ")
// let perfil = {
// apelido,
// jogoFavorito,
// horasTotaisJogadas,
// jogaEmTime
// }
// console.table(perfil)
// console.warn("Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade.")


// ------------------------------------------------------------
// DESAFIO 5 – Comparador de dados
// ------------------------------------------------------------
// a) Peça o nome e a cidade favorita de 3 pessoas diferentes.
// b) Crie um objeto para cada pessoa com as propriedades: nome e cidadeFavorita.
// c) Exiba um dos objetos com console.table().
// d) Crie uma array "viajantes" com os 3 objetos.
// e) Exiba a array com console.table().
// f) Exiba com console.info() quantos viajantes estão na lista (use .length).
// g) Exiba com console.log() a cidade favorita do 2º viajante.
// h) Exiba com console.log() o nome do 1º viajante.

// → Seu código aqui:
// const ler = require ('readline-sync')
// console.info("Cadastro de viajantes ✈");
// let nome1 = ler.question("Nome da pessoa 1:");
// let cidade1 = ler.question ("Cidade favorita da pessoa 1:");
// let nome2 = ler.question("Nome da pessoa 2:");
// let cidade2 = ler.question("Cidade favorita da pessoa 2:");
// let nome3 = ler.question("Nome da pessoa 3:");
// let cidade3 = ler.question("Cidade favorita da pessoa 3:");

// let pessoa1 = { nome: nome1, cidadeFavorita: cidade1 };
// let pessoa2 = { nome: nome2, cidadeFavorita: cidade2 };
// let pessoa3 = { nome: nome3, cidadeFavorita: cidade3 };
// let viajantes = [pessoa1,pessoa2,pessoa3]
// console.table(viajantes)
// console.info(viajantes.length)
// console.log(pessoa2.cidadeFavorita)
// console.log(pessoa1.nome)







// ------------------------------------------------------------
// DESAFIO 6 – Cardápio de Restaurante
// ------------------------------------------------------------
//
// Monte a estrutura de dados de um restaurante.
// Todos os dados do passo A devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A:
//   • Crie um objeto "restaurante" com:
//       - nome (string)
//       - tipoCozinha (string)   ex: "Italiana", "Japonesa"
//       - nota (number)          ex: 8.7
//       - aberto (boolean)
//       - endereco → objeto com: rua, numero, bairro, cidade
//       - cardapio → array com pelo menos 4 objetos de pratos, cada um com:
//           • nomePrato (string)
//           • preco     (number)
//           • vegano    (boolean)
//
// PASSO B: Acessos e exibições
//   • Exiba o nome do restaurante e sua nota.
//   • Exiba o endereço completo em uma única frase (rua, numero, bairro, cidade). ex. "O restaurante <nome> está localizado na <rua>, <numero>, <bairro>, <cidade>".
//   • Exiba o nome e o preço do 1º prato do cardápio.
//   • Exiba se o 3º prato é vegano ou não, usando template literal. ex. "O prato <nomePrato> é vegano: <vegano>".
//
// PASSO C: Alterações
//   • Altere o preço do 2º prato para um valor diferente.
//   • Adicione um novo prato ao cardápio usando push().
//   • Altere "aberto" para false.
//
// PASSO D: Relatório do cardápio
//   • Usando console.log() e template literals, exiba:
//       - Nome do restaurante, tipo de cozinha e nota
//       - Status: aberto ou fechado
//       - Quantos pratos há no cardápio (.length)
//       - Nome, preço e se é vegano de CADA prato (um prato por linha)
//
// → Seu código aqui:
const readline = require("readline-sync");

console.log("Cadastro do Restaurante");

let restaurante = {
  nome: readline.question("Nome: "),
  tipoCozinha: readline.question("Tipo de cozinha: "),
  nota: Number(readline.question("Nota: ")),
  aberto: readline.question("Aberto? (true/false): ") === "true",
  endereco: {
    rua: readline.question("Rua: "),
    numero: readline.question("Número: "),
    bairro: readline.question("Bairro: "),
    cidade: readline.question("Cidade: ")
  },
  cardapio: []
};

let prato1 = {
  nomePrato: readline.question("Prato 1 nome: "),
  preco: Number(readline.question("Preço: ")),
  vegano: readline.question("Vegano? (true/false): ") === "true"
};

let prato2 = {
  nomePrato: readline.question("Prato 2 nome: "),
  preco: Number(readline.question("Preço: ")),
  vegano: readline.question("Vegano? (true/false): ") === "true"
};

let prato3 = {
  nomePrato: readline.question("Prato 3 nome: "),
  preco: Number(readline.question("Preço: ")),
  vegano: readline.question("Vegano? (true/false): ") === "true"
};

let prato4 = {
  nomePrato: readline.question("Prato 4 nome: "),
  preco: Number(readline.question("Preço: ")),
  vegano: readline.question("Vegano? (true/false): ") === "true"
};

restaurante.cardapio.push(prato1, prato2, prato3, prato4);
console.log(restaurante.nome + " - Nota: " + restaurante.nota);

console.log(
  "O restaurante " + restaurante.nome + " está localizado na " +
  restaurante.endereco.rua + ", " +
  restaurante.endereco.numero + ", " +
  restaurante.endereco.bairro + ", " +
  restaurante.endereco.cidade
);

console.log(
  "1º prato: " + restaurante.cardapio[0].nomePrato +
  " - R$ " + restaurante.cardapio[0].preco
);

console.log(
  "O prato " + restaurante.cardapio[2].nomePrato +
  " é vegano: " + restaurante.cardapio[2].vegano
);
restaurante.cardapio[1].preco = 99.99;

restaurante.cardapio.push({
  nomePrato: "Prato Extra",
  preco: 50,
  vegano: false
});

restaurante.aberto = false;
console.log("Restaurante: " + restaurante.nome);
console.log("Tipo: " + restaurante.tipoCozinha + " | Nota: " + restaurante.nota);
console.log("Status: " + (restaurante.aberto ? "Aberto" : "Fechado"));
console.log("Total de pratos: " + restaurante.cardapio.length);

console.log(restaurante.cardapio[0].nomePrato + " - R$ " + restaurante.cardapio[0].preco + " - Vegano: " + restaurante.cardapio[0].vegano);
console.log(restaurante.cardapio[1].nomePrato + " - R$ " + restaurante.cardapio[1].preco + " - Vegano: " + restaurante.cardapio[1].vegano);
console.log(restaurante.cardapio[2].nomePrato + " - R$ " + restaurante.cardapio[2].preco + " - Vegano: " + restaurante.cardapio[2].vegano);
console.log(restaurante.cardapio[3].nomePrato + " - R$ " + restaurante.cardapio[3].preco + " - Vegano: " + restaurante.cardapio[3].vegano);
console.log(restaurante.cardapio[4].nomePrato + " - R$ " + restaurante.cardapio[4].preco + " - Vegano: " + restaurante.cardapio[4].vegano);