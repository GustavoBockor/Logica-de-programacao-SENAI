// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
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
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:
// console.log("Iniciando o programa...");
// console.info("Esta atividade serve para praticar os métodos do console em JavaScript.");
// console.warn("Aviso: sempre inicie o programa com node e o nome do arquivo.");
// console.error("Erro: ocorreu um problema inesperado no sistema.");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:
// const readline = require("readline-sync");
// let nome = readline.question("Digite seu nome: ");
// let idade = readline.questionInt("Digite sua idade: ");
// console.log(`Olá, ${nome}! Você tem ${idade} anos.`);



// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:
// const readline = require("readline-sync");
// let Nome = readline.question("Digite seu nome:")
// let Idade = readline.questionInt("Digite sua idade:")
// let cidade = readline.question("Digite sua cidade:")
// let ficha = {
//     nome: "gustavo",
//     idade: 16,
//     cidade: "jaragua do sul"
// };
// console.table(ficha)

// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:
// const readline = require ("readline-sync");
// let GostadeJS = readline.keyIn("Voce gosta de JavaScript?");
// let GostadeEsc = readline.keyIn ("Voce gosta da escola?");


// console.log(`Gosta de JavaScript? ${GostadeJS? "Sim" : "Não"}`);
// console.log(`Gosta de JavaScript? ${GostadeEsc? "Sim" : "Não"}`);

// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:
// const readline = require ("readline-sync");
// const comidas = readline.question("Quais suas 3 comidas favoritas?")
// let comidasFavoritas =("churrasco,pastel,pizza")
// console.table(comidasFavoritas)


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:
// const readline = require ("readline-sync");
// const usuario = readline.question("Qual seu nome?")
// const profissão = readline.question("Qual sua profissão?")
// const cidade = readline.question("Qual sua cidade?")
// let Apresentação = {
// nome: "gustavo",
// profissão: "estudante",
// cidade: "jaragua do sul"
// }
// console.table(Apresentação)
// let Nome = "gustavo"
// let Profissão = "estudante"
// let Cidade = "jaragua do sul"
// let fraseapr = (`Me chamo ${Nome}.Profissao:${Profissão}e moro na cidade de:${Cidade}`)
// console.log(fraseapr)

// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:
// const readline = require("readline-sync");

// function criarUsuario() {
//     let usuario = {
//         nome: readline.question("Digite o nome: "),
//         idade: readline.questionInt("Digite a idade: "),
//         endereco: {
//             cidade: readline.question("Digite a cidade: "),
//             rua: readline.question("Digite a rua: "),
//             numero: readline.questionInt("Digite o numero: ")
//         }
//     };

//     return usuario;
// }

// let usuario1 = criarUsuario();
// let usuario2 = criarUsuario();
// let usuario3 = criarUsuario();

// let listaDeUsuarios = [usuario1, usuario2, usuario3];

// console.table(listaDeUsuarios);
// console.log("2º usuário:", listaDeUsuarios[1].nome, "-", listaDeUsuarios[1].idade);
// console.log("Endereço do 3º usuário:", listaDeUsuarios[2].endereco);
// console.log("1º usuário:", listaDeUsuarios[0].nome, "-", listaDeUsuarios[0].endereco.rua);





// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:
// const readline = require("readline-sync")

// let turma = []

// let aluno1 = {
//   nome: readline.question("Nome do 1º aluno: "),
//   notas: [
//     readline.questionInt("1ª nota: "),
//     readline.questionInt("2ª nota: "),
//     readline.questionInt("3ª nota: ")
//   ]
// }

// let aluno2 = {
//   nome: readline.question("Nome do 2º aluno: "),
//   notas: [
//     readline.questionInt("1ª nota: "),
//     readline.questionInt("2ª nota: "),
//     readline.questionInt("3ª nota: ")
//   ]
// }

// let aluno3 = {
//   nome: readline.question("Nome do 3º aluno: "),
//   notas: [
//     readline.questionInt("1ª nota: "),
//     readline.questionInt("2ª nota: "),
//     readline.questionInt("3ª nota: ")
//   ]
// }

// turma.push(aluno1, aluno2, aluno3)

// console.table(turma)
// console.log(turma[1].nome, turma[1].notas[0]) 
// console.log(turma[2].nome, turma[2].notas[1]) 
// console.log(turma[0].nome, turma[0].notas[2]) 


// ------------------------------------------------------------ 
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:
// const readline = require ("readline-sync")
// let produto ={nome: readline.question("Nome do produto?"),
//                 categoria: readline.question("Categoria do produto?"),
//                 preço: readline.questionFloat("Preço do produto?"),
//                 estoque: readline.questionInt("Quantidade do produto em estoque?"),
//                 disponivel: readline.keyInYN("está disponivel para venda?"),
// }
//                     console.table(produto)
//     console.log(`Produto:${produto.nome}| Categoria:${produto.categoria}| Estoque:${produto.estoque}un`)


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.

// → Seu código aqui:
// const readline = require ("readline-sync")
// let produto ={nome: readline.question("Nome do produto?"),
//             preço: readline.questionFloat("Preço?"),
//             disponivel: readline.keyInYN("Está disponivel para venda?"),
// }

// let produto2 ={nome: readline.question("Nome do produto?"),
//             preço: readline.questionFloat("Preço?"),
//             disponivel: readline.keyInYN("Está disponivel para venda?"),
// }




// let estoqueFarmacia = [produto,produto2]
// console.table(estoqueFarmacia)
// console.log(produto2.nome)
// console.log(produto2.preço)
// console.log(produto.nome)
// console.log(produto.disponivel)
