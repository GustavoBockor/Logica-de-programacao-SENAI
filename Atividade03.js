// ============================================================
// ============================================================
//   ATIVIDADE 02 – Arrays (Listas) em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie uma array chamada "cores" com pelo menos 4 cores.
// b) Exiba a primeira e a última cor usando índices.

// → Seu código aqui:
let cores= ["amarelo","verde","azul","roxo"]
console.log (cores[0])
console.log (cores[3])



// ------------------------------------------------------------
// EXERCÍCIO 2 – Métodos básicos
// ------------------------------------------------------------
// a) Adicione uma nova cor ao final de "cores", utilizando as funções de array.
// b) Remova a primeira cor, utilizando as funções de array.
// c) Exiba o array resultante e depois a quantidade de itens armazendos (length).

// → Seu código aqui:
cores.push("rosa")
cores.shift("amarelo")
console.log(cores)
console.log(`Quantidade de itens na lista cores: ${cores.length}`);



// ------------------------------------------------------------
// EXERCÍCIO 3 – Números
// ------------------------------------------------------------
// a) Crie um array de números.
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de números armazenados (quantidade de itens, não a soma)

// → Seu código aqui:
let  numeros = ["11","7","10","8","2"]
console.log(numeros)
console.log(`Quantidade de itens na lista numeros: ${numeros.length}`);



// ------------------------------------------------------------
// EXERCÍCIO 4 – Todos os tipos
// ------------------------------------------------------------
// a) Crie um array com todos os tipos de dados que você conhece (number, string...).
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de itens armazenados

// → Seu código aqui:
let tiposdedados =[7,"teste",true,undefined,null]
console.log(tiposdedados)
console.log(`Quantidade de itens na lista tipos de dados: ${tiposdedados.length}`)





// ------------------------------------------------------------
// EXERCÍCIO 5 – Mudando a lista
// ------------------------------------------------------------
// a) Crie um array com vários dados de vários tipos diferentes.
// b) Exiba a lista.
// c) Remova o primeiro e o último item da lista, utilizando as funções de array.
// d) Exiba a lista novamente.
// e) Adicione um novo item no final e ou no início da lista.
// f) Exiba a lista final.

// → Seu código aqui:
let Tiposdedados = [8, "qualquer coisa", true, undefined, null]
console.log(Tiposdedados)
Tiposdedados.shift()
Tiposdedados.pop()
console.log(Tiposdedados)
Tiposdedados.push("futebol")
console.log(Tiposdedados)


// ------------------------------------------------------------
// EXERCÍCIO 6 – indexOf, includes
// ------------------------------------------------------------
// a) Dado um array de nomes, verifique o índice de um nome específico.
// b) Busque por um nome específico que não existe na lista.

const nomes = ["Ana", "Bruno", "Carolina", "Daniel", "Eduardo"];
// → Seu código aqui:
const indiceBruno = nomes.indexOf("Bruno");
console.log(indiceBruno); 
const indiceJoao = nomes.indexOf("João");
console.log(indiceJoao); 


// ------------------------------------------------------------
// EXERCÍCIO 7 – slice, concat
// ------------------------------------------------------------
// a) Dado dois arrays de letras, junte os 2 em um só usando concat() e exiba o resultado.
// b) Use slice para criar uma nova array, contendo somente os elementos entre a 2ª e a 4ª posição

const letras1 = ["a", "b", "c", "d", "e"];
const letras2 = ["f", "g"];


const todasLetras = letras1.concat(letras2);
console.log("Array concatenado:");
console.log(todasLetras);

const parteDoArray = todasLetras.slice(1, 4);
console.log("Array com slice (2ª até 4ª posição):");
console.log(parteDoArray);


// ------------------------------------------------------------
// EXERCÍCIO 8 – arrays aninhados (array dentro de array) e flat
// ------------------------------------------------------------
// a) Crie um array aninhado, ebixa-o. Acesso elementos internos deste array.
// b) Use flat para achatar o array em um unico nível (os arrays internos se tornam elementos individuais) e exiba-o.

// → Seu código aqui:
// a) Criando um array aninhado

const nomes1 = [
    ["João", "Maria"],
    ["Carlos", "Ana"],
    ["Pedro", "Luiza"]
  ];
  
  console.log("array completo:");
  console.log(nomes1);
  

  console.log("primeiro grupo:");
  console.log(nomes1[0]);
  
 
  console.log("primeiro nome do primeiro grupo:");
  console.log(nomes1[0][0]);
  
  
  console.log("segundo nome do segundo grupo:");
  console.log(nomes1[1][1]);
   const nomesJuntos = nomes1.flat();
  
  console.log("array depois de usar flat:");  
 console.log(nomesJuntos);
