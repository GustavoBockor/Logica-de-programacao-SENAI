// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:

let aluno = {
nome: "Gustavo",
idade: 16,
curso: "Desenvolvimento de sistemas"
}
console.log(aluno.nome)

// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:
aluno.cidade ="Jaraguá do sul"
console.log(aluno.cidade)


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:
aluno.habilidades = ["Driblar igual Neymar", "Programar em JavaScript", "Resolver problemas"]
console.log(aluno.habilidades[0])


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:
aluno.notas = [8, 6, 9, 7]
console.log(`O aluno ${aluno.nome} tem as notas: ${aluno.notas}`)


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:
aluno.responsavel = "Mariana,tia do aluno"
console.log(aluno.responsavel)
aluno.responsavel = "José,pai do aluno"
console.log(aluno.responsavel)


// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:
let aluno1 = {
    nome: "Gustavo",
    idade: 16,
    curso: "Desenvolvimento de sistemas"
    }
    let aluno2 = {
        nome: "João",
        idade: 23,
        curso: "Desenvolvimento de sistemas"
        }
        let aluno3 = {
            nome: "Kevin",
            idade: 17,
            curso: "Mecanica"
            }
            let listaDeAlunos = [aluno1,aluno2,aluno3]
console.log (listaDeAlunos[1])



// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:
let Aluno1 = {
    nome: "José",
    idade: 16,
    notas:[7,4,9]
    }
    let Aluno2 = {
        nome: "Maria",
        idade: 23,
        notas: [8,3,8]
        }
        let Aluno3 = {
            nome: "Lucas",
            idade: 17,
            notas: [10,6,7],
            }
            let listadeAlunos = [Aluno1,Aluno2,Aluno3]
console.log (listadeAlunos)


