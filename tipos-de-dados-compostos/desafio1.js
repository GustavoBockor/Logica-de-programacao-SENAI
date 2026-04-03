// ============================================================
//   DESAFIOS (para quem já terminou as atividades 02 e 02-2) – Arrays e Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Acessar e alterar elementos de array
// ------------------------------------------------------------
// const frutas = ['maçã', 'banana', 'laranja', 'uva'];
// a) Acesse o primeiro e o terceiro elemento e exiba com console.log().
// b) Substitua o segundo elemento por 'abacaxi' usando atribuição direta.

// → Seu código aqui:
// console.log(frutas[0],frutas[2])
// frutas[1] = 'abacaxi';
// console.log(frutas)


// ------------------------------------------------------------
// EXERCÍCIO 2 – Criar novos arrays por seleção
// ------------------------------------------------------------
// const letras1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// a) Crie um novo array contendo apenas o primeiro, o terceiro e o sexto elementos.
// b) Crie outro array que contenha os dois últimos elementos.
// Observação: Utilize o valor de um array dentro de outro, exemplo: array2[array1[3], array[5]]

// → Seu código aqui:

// let letras2 = [letras1[0], letras1[2], letras1[5]];
// let letras3 = [letras1[4], letras1[5]];

// console.log(letras2);
// console.log(letras3);



// ------------------------------------------------------------
// EXERCÍCIO 3 – Batata?
// ------------------------------------------------------------
// const letras2 = ['a', 'b', 'c', 'd', 'e', 't'];
// a) Crie um novo array que retorne a palavra "batata" ao ser exibido no console.
// let palavra = ['b', 'a', 't', 'a', 't', 'a'];
// console.log(palavra[0] + palavra[1] + palavra[2] + palavra[3] + palavra[4] + palavra[5]);


// ------------------------------------------------------------
// EXERCÍCIO 4 – Objetos: acessar e adicionar propriedades
// ------------------------------------------------------------
// const pessoa = { 
//   nome: 'Junin',
//   idade: 22,
//   endereco: {
//     cidade: 'Porto Alegre',
//     rua: 'Avenida Brasil'
//   } 
// };
// a) Acesse e exiba a propriedade 'nome' e 'cidade' do objeto 'pessoa'.
// b) Adicione uma nova propriedade 'curso' com valor 'Programação' ao objeto 'pessoa'.

// → Seu código aqui:
// console.log(pessoa.nome)
// console.log(pessoa.cidade)
// pessoa.curso = "Programação"
// console.log(pessoa)

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e arrays dentro de objetos
// ------------------------------------------------------------
// const perfil = {
//   usuario: 'ana123',
//   dados: { 
//     nome: 'Ana',
//     idade: 19,
//     interesses: ['música', 'fotografia', 'viagens']
//   }
// };
// a) Exiba o nome da pessoa cadastrada em 'perfil'.
// b) Exiba o segundo interesse da pessoa.
// c) Altere o primeiro interesse para 'arte' por atribuição direta.
// d) Exiba o nome, a idade e a lista de interesse da pessoa.

// → Seu código aqui:
// console.log(perfil.usuario)
// console.log(perfil.dados.interesses[1])
// perfil.dados.interesses[0] ='arte'
// console.log(perfil)



// ------------------------------------------------------------
// EXERCÍCIO 6 – Criar um catálogo (array de objetos e objeto indexado)
// ------------------------------------------------------------
// Crie um array 'produtos' contendo 3 produtos, onde cada produto é um objeto contendo:
//    id(number), nomeDoProduto(string) e preço(number).
// Crie um objeto 'catalogo' onde as chaves são os ids dos produtos (1, 2, 3)
//    e os valores são o nome dos produtos correspondentes.

// → Seu código aqui:
// let produtos = [
//     { id: 1, nomeDoProduto: 'camisa', preco: 50 },
//     { id: 2, nomeDoProduto: 'calça', preco: 120 },
//     { id: 3, nomeDoProduto: 'tenis', preco: 200 },
// ]
// let catalogo = {
// 1: 'camisa',
// 2: 'calca',
// 3: 'tenis'
// }

// console.log(produtos)
// console.log(catalogo)

// ------------------------------------------------------------
// EXERCÍCIO 7 – Estrutura composta: tarefas simples
// ------------------------------------------------------------
// Defina um array de tarefas com 3 objetos: { id, titulo, concluida(boolean) }.
// a) Marque a tarefa de id 2 como concluída por atribuição direta.
// b) Crie um novo array contendo apenas as tarefas que não estão concluídas
// c) Exiba o título de todas as tarefas do objeto.
// d) Exiba o título de todas as tarefas do array.

// → Seu código aqui:[
    const tarefas = [
        { id: 1, titulo: "Estudar JavaScript", concluida: false },
        { id: 2, titulo: "Fazer exercícios", concluida: false },
        { id: 3, titulo: "Revisar conteúdo", concluida: false }
    ];
    
    tarefas[1].concluida = true;
    

    const tarefasNaoConcluidas = [];
    !tarefas[0].concluida && tarefasNaoConcluidas.push(tarefas[0]);
    !tarefas[1].concluida && tarefasNaoConcluidas.push(tarefas[1]);
    !tarefas[2].concluida && tarefasNaoConcluidas.push(tarefas[2]);
    
    console.log(tarefasNaoConcluidas);

    console.log(tarefas[0].titulo);
    console.log(tarefas[1].titulo);
    console.log(tarefas[2].titulo);
    
    
    console.log(tarefasNaoConcluidas[0].titulo);
    console.log(tarefasNaoConcluidas[1].titulo);

