// ============================================================
// ATIVIDADE AVALIATIVA N4
// Módulos: Variáveis, Tipos (primitivos e compostos), Arrays e Objetos, Input e Output de Dados
// ============================================================
//
// Instruções Gerais:
// • Copie todo este exercício para um novo arquivo em sua pasta de atividades
// • Nomeie o seu novo arquivo como "atividade-avaliativa-n4.js"
// • Resolva cada exercício no espaço indicado.
// • Utilize template literals sempre que precisar montar frases.
// • NÃO apague os separadores (console.log("_________")).
// • Leia com atenção cada enunciado antes de começar.
// • Cada letra representa um passo. Resolva na ordem.
//
// ============================================================


// ------------------------------------------------------------
// QUESTÃO 1 (peso: 0.5) – Construindo um cartão de visita no console
// ------------------------------------------------------------
// a) Crie variáveis para armazenar as seguintes informações REAIS ou FICTÍCIAS:
// • nome (string)
// • profissao (string)
// • cidade (string)
// • email (string)
// • telefone (string)
// • anoExperiencia (number)
// • disponivelParaFreelance (boolean)
// b) Peça ao usuário para preencher as informações do cartão de visitas.
// c) Usando console.log() e template literals, exiba no console
// um cartão de visitas formatado, parecido com o modelo abaixo:
//
// ============================================
// | CARTÃO DE VISITAS |
// ============================================
// | Nome : <nome> |
// | Profissão : <profissao> |
// | Cidade : <cidade> |
// | E-mail : <email> |
// | Telefone : <telefone> |
// | Experiência : <anosExperiencia> anos |
// | Freelance : <disponivelParaFreelance> |
// ============================================

// → Seu código aqui:
// const lerTeclado = require('readline-sync')

// let nome = lerTeclado.question("Digite seu nome: ")
// let profissao = lerTeclado.question("Qual sua profissao? ")
// let cidade = lerTeclado.question("Digite sua cidade: ")
// let email = lerTeclado.question("Digite seu email: ")
// let telefone = lerTeclado.questionInt("Digite seu telefone: ")
// let experiencia = lerTeclado.question("Quantos anos de experiencia? ")
// let freelance = lerTeclado.keyInYN("Disponivel para freelance? ")

// console.log("============================================")
// console.log("|           CARTÃO DE VISITAS              |")
// console.log("============================================")
// console.log(`Nome: ${nome}`)
// console.log(`Profissao: ${profissao}`)
// console.log(`Cidade: ${cidade}`)
// console.log(`Email: ${email}`)
// console.log(`Telefone: ${telefone}`)
// console.log(`Experiencia: ${experiencia} anos`)
// console.log(`Freelance: ${freelance ? "Sim" : "Não"}`)
// console.log("============================================")
// ------------------------------------------------------------
// QUESTÃO 2 (peso: 0.5) – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie um array chamado "materias" com pelo menos 5 disciplinas escolares.
// b) Exiba a primeira e a última matéria usando seus índices.
// c) Exiba a quantidade total de matérias usando .length.
// d) Usando template literal, exiba a frase:
// "A 3ª matéria da lista é <...> e a lista tem <...> matérias no total."

// → Seu código aqui:
// const lerTeclado = require('readline-sync')

// let materias = ["matematica", "ingles", "biologia", "fisica", "portugues"]

// console.log(materias[0])
// console.log(materias[4])
// console.log(materias.length)

// let frase = (`A 3° materia da lista é ${materias[2]}, e a lista tem ${materias.length} materias no total.`)

// console.log(frase)

// ------------------------------------------------------------
// QUESTÃO 3 (peso: 0.5) – Manipulação direta de posições
// ------------------------------------------------------------
// const notas = [6.5, 8.0, 4.5, 9.0, 7.5];

// a) Substitua a nota do índice 2 (4.5) pelo valor 6.0 usando atribuição direta.
// b) Substitua a nota do índice 3 (9.0) pelo valor 8.5 usando atribuição direta.
// c) Exiba o array atualizado.

// → Seu código aqui:
//  const notas = [6.5, 8.0, 4.5, 9.0, 7.5];

//  notas[2] = 6.0;
//  notas[3] = 8.5;

//  console.log(notas);




// ------------------------------------------------------------
// QUESTÃO 4 (peso: 0.5) – Métodos de array: push, pop, unshift, shift
// ------------------------------------------------------------
// Usando o array "materias" da questão anterior e as funções de array listadas acima:
// a) Adicione "Educação Física" ao FINAL da lista e exiba a lista.
// b) Remova o ÚLTIMO elemento da lista e exiba a lista.
// c) Adicione "Filosofia" ao INÍCIO da lista e exiba a lista.
// d) Remova o PRIMEIRO elemento da lista e exiba a lista.
// e) Após todas as operações, exiba quantos itens restaram.

// → Seu código aqui:
// let materias = ["ingles", "matematica", "ciencias", "historia", "geografia"]
// materias.push("Educacao fisica")
// console.log(materias)
// materias.pop("Educacao fisica")
// console.log(materias)
// materias.unshift("Filosofia")
// console.log(materias)
// materias.shift("Filosofia")
// console.log(materias)
// console.log(materias.length)





// ------------------------------------------------------------
// QUESTÃO 5 (peso: 0.5) – indexOf, includes, slice e concat
// ------------------------------------------------------------
// const cidadesBrasil = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Manaus", "Fortaleza"];
// const cidadesPortugal = ["Lisboa", "Porto", "Braga"];

// Utilizando as listas e as funções de array listadas acima:
// a) Verifique em qual índice está "Curitiba" e exiba o resultado.
// b) Verifique em qual índice está "Recife" (que NÃO existe na lista) e exiba.
// O que significa esse retorno? Escreva a explicação em um comentário.
// c) Use includes() para verificar se "Salvador" está na lista. Exiba o resultado.
// d) Use includes() para verificar se "Belém" está na lista. Exiba o resultado.
// e) Use concat() para unir "cidadesBrasil" e "cidadesPortugal" em um novo array "todasAsCidades".
// Exiba o novo array.
// f) Use slice() para criar um novo array "cidadesDoMeio" com apenas os elementos
// do índice 3 ao 7 de "todasAsCidades". Exiba o resultado.

// → Seu código aqui:
// console.log(cidadesBrasil.indexOf('Curitiba'))
// console.log(cidadesBrasil.indexOf('Recife'))
// console.log(cidadesBrasil.includes('Salvador'))
// console.log(cidadesBrasil.includes('Belém'))

// /* O resultado retorna pois o elemento "Recife" nao foi encontrado*/

// let todasAsCidades = cidadesBrasil.concat(cidadesPortugal)
// const cidadesDoMeio = todasAsCidades.slice(3, 7)
// console.log(todasAsCidades)





// ------------------------------------------------------------
// QUESTÃO 6 (peso: 0.5) – Arrays mistos e flat
// ------------------------------------------------------------
// a) Crie um array aninhado (arrays dentro de outro array) chamado "grupos", conforme exemplo abaixo:
// [
// ["Ana", "Bruno", "Carlos"],
// ["Diana", "Eduardo"],
// ["Fernanda", "Gabriel", "Helena", "Igor"]
// ]
// b) Exiba "grupos".
// c) Exiba o nome do 2º aluno do 3ª grupo (antes de usar flat, usando índices).
// d) Use flat() para transformar "grupos" em um único array chamado "todosOsAlunos" e exiba o resultado.
// e) Exiba o tamanho total do array "grupos" e do array "todosOsAlunos". Explique porque desses valores serem diferentes, se os dados são os mesmos

// → Seu código aqui:
/*let lista = [
         ["Ana", "Bruno", "Carlos"],
        ["Diana", "Eduardo"],
        ["Fernanda", "Gabriel", "Helena", "Igor"]
        ]
        console.log(lista)  
        console.log(lista[2][1])
        let todosOsAlunos = lista.flat();
        console.log(todosOsAlunos)
        console.log(todosOsAlunos.length)
        console.log(lista.length) 
        porque (todosOsAlunos) é uma array só, e (lista) é uma array com 3 arrays dentro*/






// ------------------------------------------------------------
// QUESTÃO 7 (peso: 0.5) – Criando e acessando objetos
// ------------------------------------------------------------
// a) Crie um objeto chamado "produto" com as propriedades:
// nome (string), preco (number), disponivel (boolean), categoria (string).
// b) Exiba cada propriedade separadamente usando um console.log() para cada.
// c) Usando template literal, exiba:
// "O produto '<nome>' custa R$ <preco> e está disponível: <disponivel>."
// d) Exiba o objeto utilizando console.table().

// → Seu código aqui:
// let produto = {
// nome:"Bolacha",
// preço:10,
// disponivel:true,
// categoria:"comidas"
// }
// let frase = (`O produto ${produto.nome},custa R$ ${produto.preço},e está disponivel ${produto.disponivel}`)

// console.log(frase);
// console.table(produto)


// ------------------------------------------------------------
// QUESTÃO 8 (peso: 0.5) – Alterando e adicionando propriedades
// ------------------------------------------------------------
// Usando o objeto "produto" da questão anterior:
// a) Altere o preço para um valor diferente.
// b) Altere "disponivel" para o valor oposto ao atribuido anteriormente.
// c) Adicione uma nova propriedade "estoque" com o valor 20.
// d) Exiba o objeto completo.

// → Seu código aqui:
//     let produto = {
//     nome:"Bolacha",
//     preço:10,
//     disponivel:true,
//     categoria:"comidas"
//      }
//     produto.preço = 12
//     produto.disponivel = false
//     produto.estoque = 20

// console.log(produto)


// ------------------------------------------------------------
// QUESTÃO 9 (peso: 1) – Array de objetos
// ------------------------------------------------------------
// a) Crie um array chamado "listaFuncionarios" com 3 objetos.
// Cada objeto deve ter: nome (string), cargo (string), salario (number), ativo (boolean).
// b) Exiba o nome do primeiro funcionário.
// c) Exiba o cargo do terceiro funcionário.
// d) Exiba o salário do segundo funcionário.
// e) Altere o cargo do primeiro funcionário para um cargo diferente.
// f) Crie um novo objeto e armazene-o em uma variável.
// g) Adicione esse 4º funcionário no array "listaFuncionarios" com push().
// h) Exiba o array completo após todas as alterações.

// → Seu código aqui:
// let listaFuncionarios = [
//     { nome: "Gustavo", cargo: "CEO", salario: 10000, ativo: true },
//     { nome2: "Kevin", cargo: "Chefe", salario: 5000, ativo: true },
//     { nome3: "Paulo", cargo: "Estagiário", salario: 1500, ativo: true }
//   ];
// console.log(listaFuncionarios[0].nome)
// console.log(listaFuncionarios[2].cargo)
// console.log(listaFuncionarios[1].salario)
// listaFuncionarios[0].cargo= "gerente"
//   let novoFuncionario = {
// nome: "pedro",
// cargo:"aprendiz",  
// salario:1000,
// }
// listaFuncionarios.push(novoFuncionario);
// console.log(listaFuncionarios)



// ------------------------------------------------------------
// QUESTÃO 10 (peso: 1.5) – Objetos com arrays e objetos aninhados
// ------------------------------------------------------------
// a) Crie um objeto "loja" com as propriedades:
// • nomeLoja (string)
// • cnpj (string)
// • endereco → objeto contendo: rua, numero, cidade, estado
// • categoriasProdutos → array com pelo menos 3 categorias
// • aberta (boolean)
// b) Exiba o nome da loja.
// c) Exiba a cidade onde a loja está localizada.
// d) Exiba a primeira categoria de produto.
// e) Exiba, usando template literal, a frase:
// "A loja '<nomeLoja>' fica em <cidade> - <estado> e está aberta: <aberta>."
// f) Adicione uma nova categoria ao final do array "categoriasProdutos".
// g) Exiba, usando template literal, a frase:
// "Algumas categorias da loja '<nomeLoja>' são: <primeira categoria> e <última categoria> ."
// h) Exiba o objeto "loja" completo.

// → Seu código aqui:
// const loja = {
//     nomeLoja: "AGK",
//     cnpj: "000000000",
//     endereco: {
//         rua: "rua thais batista",
//         numero: 320,
//         cidade: "Jaragua do sul",
//         estado: "sc",
//     },
//     categoriasProdutos: ["bebidas", "comidas", "roupas"],
//     aberta: true,
// };

// console.log(loja.nomeLoja);
// console.log(loja.endereco.cidade);
// console.log(loja.categoriasProdutos[0]);

// console.log(`A loja ${loja.nomeLoja} fica em ${loja.endereco.cidade} - ${loja.endereco.estado} e esta aberta: ${loja.aberta}.`);

// loja.categoriasProdutos.push("eletronicos");

// console.log(`Algumas categorias da loja ${loja.nomeLoja} sao: ${loja.categoriasProdutos[0]} e ${loja.categoriasProdutos[3]}`);

// console.log(loja);




// ------------------------------------------------------------
// QUESTÃO 11 (peso: 1.5) – Objetos complexos com array de objetos aninhado
// ------------------------------------------------------------
// a) Crie um objeto "escola" com as seguintes propriedades:
// • nomeEscola (string)
// • cidade (string)
// • diretor → objeto com: nome (string), tempoDeServico (number)
// • turmas → array contendo 2 objetos, cada um com:
// - período (string) - ex: "Manhã", "Tarde"
// - alunos → array de strings com pelo menos 3 nomes
// b) Exiba o nome da escola.
// c) Exiba o nome do diretor.
// d) Exiba o período da segunda turma.
// e) Exiba o terceiro aluno da primeira turma.
// f) Adicione um novo aluno à segunda turma usando push().
// g) Altere o período da primeira turma para "Noite".
// h) Exiba o objeto "escola" completo no final.

// → Seu código aqui:
// a) Criando o objeto escola
// let escola = {
//     nomeEscola: "Escola Municipal Nova Era",
//     cidade: "São Paulo",
//     diretor: {
//       nome: "Carlos Silva",
//       tempoDeServico: 15
//     },
//     turmas: [
//       {
//         periodo: "Manhã",
//         alunos: ["Ana", "Bruno", "Carla"]
//       },
//       {
//         periodo: "Tarde",
//         alunos: ["Daniel", "Eduarda", "Felipe"]
//       }
//     ]
//   };
  
//   console.log("Nome da escola:", escola.nomeEscola);
  
//   console.log("Nome do diretor:", escola.diretor.nome);
  
//   console.log("Período da segunda turma:", escola.turmas[1].periodo);
  
//   console.log("Terceiro aluno da primeira turma:", escola.turmas[0].alunos[2]);
  
//   escola.turmas[1].alunos.push("Gabriela");
//   console.log("Alunos da segunda turma após adição:", escola.turmas[1].alunos);
  
//   escola.turmas[0].periodo = "Noite";
//   console.log("Primeira turma após alteração do período:", escola.turmas[0]);
  
//   console.log("\nObjeto escola completo:");
//   console.log(escola);





// ------------------------------------------------------------
// QUESTÃO 12 (peso: 2) – Sistema de Biblioteca
// ------------------------------------------------------------
//
// Você vai criar a estrutura de dados de uma biblioteca simples.
// Todos os dados dos passos A e B devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A: Variáveis da biblioteca
// • Colete os dados para as seguintes variáveis/constantes:
// - "nomeBiblioteca" (string) → nome da biblioteca
// - "anoDeFundacao" (number) → ano de fundação
// - "capacidadeLivros" (number) → quantidade máxima de livros
// - "bibliotecaAberta" (boolean)→ true ou false
// • Exiba todas usando template literal em uma única frase descritiva.
//
// PASSO B: Acervo de livros (array de objetos)
// • Crie um array chamado "acervo" com 3 objetos de livros.
// Cada livro deve ter:
// - titulo (string)
// - autor (string)
// - ano (number)
// - paginas (number)
// - disponivel (boolean)
//
// PASSO C: Acessando o acervo
// • Exiba o título do 1º livro.
// • Exiba o autor do 2º livro.
// • Exiba o número de páginas do 3º livro.
// • Exiba a quantidade total de livros no acervo (.length).
//
// PASSO D: Alterando o acervo
// • Marque o 1º livro como indisponível (disponivel = false).
// • Altere o título do 3º livro para um título diferente.
// • Adicione um 4º livro ao array "acervo" usando push(),
// criando o objeto diretamente dentro do push (sem necessidade de coletar esse dado via terminal).
//
// PASSO E: Seções da biblioteca (array de strings)
// • Crie um array "secoes" com: "Ficção", "Ciências", "História", "Infantil".
// • Exiba a primeira e a última seção.
// • Adicione "Tecnologia" ao final de "secoes".
// • Remova a primeira seção de "secoes".
// • Exiba o array "secoes".
//
// PASSO F: Relatório final
// • Usando template literals, exiba um relatório/frase com:
// - Nome e ano de fundação da biblioteca
// - Quantidade de livros no acervo
// - Quantidade de seções disponíveis
// - Título e autor de CADA livro do acervo (um livro por linha)
//
// → Seu código aqui:
// const readline = require("readline-sync");

// let nomeBiblioteca = readline.question("Nome da biblioteca: ");
// let anoDeFundacao = Number(readline.question("Ano de fundacao: "));
// let capacidadeLivros = Number(readline.question("Capacidade maxima de livros: "));
// let bibliotecaAberta = readline.question("Biblioteca esta aberta? (true/false): ") === "true";

// console.log(`A biblioteca ${nomeBiblioteca}, fundada em ${anoDeFundacao}, possui capacidade para ${capacidadeLivros} livros e atualmente esta ${bibliotecaAberta ? "aberta" : "fechada"}.`);

// let acervo = [];

// for (let i = 0; i < 3; i++) {
//   let titulo = readline.question(`Titulo do livro ${i + 1}: `);
//   let autor = readline.question("Autor: ");
//   let ano = Number(readline.question("Ano: "));
//   let paginas = Number(readline.question("Paginas: "));
//   let disponivel = readline.question("Disponivel? (true/false): ") === "true";

//   acervo.push({
//     titulo: titulo,
//     autor: autor,
//     ano: ano,
//     paginas: paginas,
//     disponivel: disponivel
//   });
// }

// console.log("\nAcervo cadastrado:");
// console.log(acervo);



// ------------------------------------------------------------
// QUESTÃO 13 (questão bonus - peso: 1) – Cardápio de Restaurante
// ------------------------------------------------------------
//
// Monte a estrutura de dados de um restaurante.
// Todos os dados do passo A devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A:
// • Crie um objeto "restaurante" com:
// - nome (string)
// - tipoCozinha (string) ex: "Italiana", "Japonesa"
// - nota (number) ex: 8.7
// - aberto (boolean)
// - endereco → objeto com: rua, numero, bairro, cidade
// - cardapio → array com pelo menos 4 objetos de pratos, cada um com:
// • nomePrato (string)
// • preco (number)
// • vegano (boolean)
//
// PASSO B: Acessos e exibições
// • Exiba o nome do restaurante e sua nota.
// • Exiba o endereço completo em uma única frase (rua, numero, bairro, cidade). ex. "O restaurante <nome> está localizado na <rua>, <numero>, <bairro>, <cidade>".
// • Exiba o nome e o preço do 1º prato do cardápio.
// • Exiba se o 3º prato é vegano ou não, usando template literal. ex. "O prato <nomePrato> é vegano: <vegano>".
//
// PASSO C: Alterações
// • Altere o preço do 2º prato para um valor diferente.
// • Adicione um novo prato ao cardápio usando push().
// • Altere "aberto" para false.
//
// PASSO D: Relatório do cardápio
// • Usando console.log() e template literals, exiba:
// - Nome do restaurante, tipo de cozinha e nota
// - Status: aberto ou fechado
// - Quantos pratos há no cardápio (.length)
// - Nome, preço e se é vegano de CADA prato (um prato por linha)
//
// → Seu código aqui:
// const readline = require("readline-sync");

// let restaurante = {
//   nome: readline.question("Nome do restaurante: "),
//   tipoCozinha: readline.question("Tipo de cozinha (ex: Italiana, Japonesa): "),
//   nota: Number(readline.question("Nota do restaurante (ex: 8.7): ")),
//   aberto: readline.question("O restaurante está aberto? (true/false): ") === "true",
//   endereco: {
//     rua: readline.question("Rua: "),
//     numero: Number(readline.question("Número: ")),
//     bairro: readline.question("Bairro: "),
//     cidade: readline.question("Cidade: ")
//   },
//   cardapio: []
// };


// for (let i = 0; i < 4; i++) {
//   console.log(`\nCadastro do prato ${i + 1}:`);
//   let nomePrato = readline.question("Nome do prato: ");
//   let preco = Number(readline.question("Preço: "));
//   let vegano = readline.question("É vegano? (true/false): ") === "true";

//   restaurante.cardapio.push({
//     nomePrato: nomePrato,
//     preco: preco,
//     vegano: vegano
//   });
// }

// console.log(`\nRestaurante: ${restaurante.nome} | Nota: ${restaurante.nota}`);
// console.log(`O restaurante ${restaurante.nome} está localizado na ${restaurante.endereco.rua}, ${restaurante.endereco.numero}, ${restaurante.endereco.bairro}, ${restaurante.endereco.cidade}.`);
// console.log(`Primeiro prato: ${restaurante.cardapio[0].nomePrato} | Preço: ${restaurante.cardapio[0].preco}`);
// console.log(`O prato ${restaurante.cardapio[2].nomePrato} é vegano: ${restaurante.cardapio[2].vegano}`);

// restaurante.cardapio[1].preco = Number(readline.question(`Novo preço do 2º prato (${restaurante.cardapio[1].nomePrato}): `));

// restaurante.cardapio.push({
//   nomePrato: "Salada Especial",
//   preco: 22.50,
//   vegano: true
// });

// restaurante.aberto = false;

// console.log(`\n===== RELATÓRIO DO RESTAURANTE =====`);
// console.log(`Nome: ${restaurante.nome}`);
// console.log(`Tipo de cozinha: ${restaurante.tipoCozinha}`);
// console.log(`Nota: ${restaurante.nota}`);
// console.log(`Status: ${restaurante.aberto ? "Aberto" : "Fechado"}`);
// console.log(`Quantidade de pratos no cardápio: ${restaurante.cardapio.length}`);
// console.log("\nCardápio:");
// restaurante.cardapio.forEach((prato, index) => {
//   console.log(`${index + 1}. ${prato.nomePrato} - Preço: ${prato.preco} - Vegano: ${prato.vegano}`);
// });
