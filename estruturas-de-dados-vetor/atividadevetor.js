// ============================================================
//   ATIVIDADE 12 – Estruturas de Dados: Vetor (Array)
// ============================================================

// Dica: Faça os exercícios utilizando funções de array,
//       mas também tente resolver os desafios sem essas funções

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo e exibindo um vetor
// ------------------------------------------------------------
// a) Declare um vetor com 5 cidades de sua escolha.
// b) Exiba a lista de cidades utilizando for().
// c) Exiba a primeira e a última cidade; a última utilizando .length.
// d) Exiba a quantidade total de cidades.

// → Seu código aqui:
    const cidades = ["São Paulo", "Santos", "Curitiba", "Blumenau", "Joinville"]

console.log("Lista de cidades:")

for(let i = 0; i < cidades.length; i++) {
    console.log(cidades[i])
}

console.log(`Primeira cidade: ${cidades[0]}`)
console.log(`Última cidade: ${cidades[cidades.length - 1]}`)
console.log(`Quantidade total de cidades: ${cidades.length}`)


// ------------------------------------------------------------
// EXERCÍCIO 2 – Soma e média
// ------------------------------------------------------------
// a) Utilizando o vetor:
    //   const numeros = [12, 7, 25, 3, 18, 9, 31, 14];
// b) Calcule a SOMA de todos os números.
// c) Calcule a MÉDIA (soma / quantidade).
// d) Exiba: "Soma: <soma> | Média: <média>" (use toFixed(2) na média).

// → Seu código aqui:
const numeros = [12, 7, 25, 3, 18, 9, 31, 14]

let soma = 0

for(let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i]
}

let media = soma / numeros.length

console.log(`Soma: ${soma} | Média: ${media.toFixed(2)}`)





// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor
// ------------------------------------------------------------
// a) Utilizando o vetor:
    //   const temperaturas = [22.5, 19.0, 27.3, 18.7, 30.1, 25.4, 21.8];
// b) Encontre a MAIOR e a MENOR temperatura.
// c) Exiba: "Maior: <maior>°C | Menor: <menor>°C"

// → Seu código aqui:
const temperaturas = [22.5, 19.0, 27.3, 18.7, 30.1, 25.4, 21.8]

let maior = temperaturas[0]
let menor = temperaturas[0]

for(let i = 0; i < temperaturas.length; i++) {

    if(temperaturas[i] > maior) {
        maior = temperaturas[i]
    }

    if(temperaturas[i] < menor) {
        menor = temperaturas[i]
    }
}

console.log(`Maior: ${maior}°C | Menor: ${menor}°C`)



// ------------------------------------------------------------
// EXERCÍCIO 4 – Pares e ímpares
// ------------------------------------------------------------
// a) Utilizando o vetor:
    //   const listaNumeros = [4, 7, 10, 13, 16, 19, 22, 25, 28];
// b) Conte quantos números são pares e quantos são ímpares.
// c) Crie dois vetores: paresVetor[] e imparesVetor[], e adicione os números em cada um.
// d) Exiba:
//    "Pares (<qtd>): <paresVetor>"
//    "Ímpares (<qtd>): <imparesVetor>"

// → Seu código aqui:
const listaNumeros = [4, 7, 10, 13, 16, 19, 22, 25, 28]

let paresVetor = []
let imparesVetor = []

for(let i = 0; i < listaNumeros.length; i++) {

    if(listaNumeros[i] % 2 == 0) {
        paresVetor.push(listaNumeros[i])
    } else {
        imparesVetor.push(listaNumeros[i])
    }
}

console.log(`Pares (${paresVetor.length}): ${paresVetor}`)
console.log(`Ímpares (${imparesVetor.length}): ${imparesVetor}`)

// ------------------------------------------------------------
// EXERCÍCIO 5 – Inversão de vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
    //   const vetorOriginal = ["A", "B", "C", "D", "E"];
// b) Usando for(), crie um novo vetor 'vetorInvertido' com os elementos em ordem reversa.
// c) Exiba ambos os vetores:
//    "Original:  <original>"
//    "Invertido: <invertido>"
// d) Inverta o vetorOriginal, mas utilizando função de array,
//    salve o resultado em vetorInvertido2 e exiba o resultado.

// → Seu código aqui:
const vetorOriginal = ["A", "B", "C", "D", "E"];

let vetorInvertido = []
let vetorInvertido2 = []

for(let i = vetorOriginal.length - 1; i >= 0; i--) {
    vetorInvertido.push(vetorOriginal[i])
}

for(let i = vetorOriginal.length - 1; i >= 0; i--) {
    vetorInvertido2.push(vetorOriginal[i])
}

console.log("Original:", vetorOriginal)
console.log("Invertido:", vetorInvertido)
console.log("Invertido 2:", vetorInvertido2)



// ------------------------------------------------------------
// EXERCÍCIO 6 – Cadastro dinâmico
// ------------------------------------------------------------
// a) Crie um vetor vazio para produtos;
// b) Pergunte ao usuário quantos produtos deseja cadastrar.
// c) Usando for(), peça o nome de cada produto e adicione ao vetor.
// d) Ao final, também utilizando for() exiba o vetor completo e a mensagem:
//    "<qtd> produtos cadastrados."

// → Seu código aqui:
let produtos = []

let quantidadeProdutos = ler.questionInt("Quantos produtos deseja cadastrar? ")

for(let i = 0; i < quantidadeProdutos; i++) {

    let produto = ler.question(`Digite o nome do produto ${i + 1}: `)

    produtos.push(produto)
}

console.log("\nLista de produtos:")

for(let i = 0; i < produtos.length; i++) {
    console.log(produtos[i])
}

console.log(`${produtos.length} produtos cadastrados.`)

// ------------------------------------------------------------
// EXERCÍCIO 7 – Busca em vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const alunos = ["Ana", "Bruno", "Carla", "Diego", "Eva"];
// b) Pergunte ao usuário o nome de um aluno.
// c) Usando for e break, verifique se o nome existe na lista.
//    - Se existir: "<nome> está matriculado(a) (índice <i>)."
//    - Se não:     "<nome> não foi encontrado(a)."

// → Seu código aqui:
const alunos = ["Ana", "Bruno", "Carla", "Diego", "Eva"]

let nomeAluno = ler.question("Digite o nome do aluno: ")

let encontrado = false

for(let i = 0; i < alunos.length; i++) {

    if(nomeAluno.toLowerCase() == alunos[i].toLowerCase()) {

        console.log(`${alunos[i]} esta matriculado(a) (indice ${i}).`)

        encontrado = true

        break
    }
}

if(encontrado == false) {
    console.log(`${nomeAluno} nao foi encontrado(a).`)
}


// ------------------------------------------------------------
// EXERCÍCIO 8 – Vetor de objetos
// ------------------------------------------------------------
// a) Utilizando o vetor:
    //   const livros = [
    //     { titulo: "Dom Casmurro",       paginas: 256 },
    //     { titulo: "O Cortiço",          paginas: 304 },
    //     { titulo: "Memórias Póstumas",  paginas: 208 },
    //     { titulo: "Capitães da Areia",  paginas: 280 },
    //   ];
// b) Exiba a lista com console.table().
// c) Usando for, calcule:
//    - Total de páginas de todos os livros.
//    - Média de páginas por livro.
// d) Exiba o título do livro com MAIS páginas.

// → Seu código aqui:
const livros = [
    { titulo: "Dom Casmurro", paginas: 256 },
    { titulo: "O Cortiço", paginas: 304 },
    { titulo: "Memórias Póstumas", paginas: 208 },
    { titulo: "Capitães da Areia", paginas: 280 }
]

console.table(livros)

let totalPaginas = 0
let livroMaior = livros[0]

for(let i = 0; i < livros.length; i++) {

    totalPaginas = totalPaginas + livros[i].paginas

    if(livros[i].paginas > livroMaior.paginas) {
        livroMaior = livros[i]
    }
}

let mediaPaginas = totalPaginas / livros.length

console.log(`Total de páginas: ${totalPaginas}`)
console.log(`Média de páginas: ${mediaPaginas.toFixed(2)}`)
console.log(`Livro com mais páginas: ${livroMaior.titulo}`)



// ------------------------------------------------------------
// EXERCÍCIO 9 – Filtro com push
// ------------------------------------------------------------
// a) Utilizando o vetor:
    //   const idades = [12, 17, 21, 15, 30, 45, 9, 67, 19, 8];
// b) Usando for, separe o vetor acima em dois vetores:
//    - menores[]: pessoas com idade < 18
//    - adultos[]: pessoas com idade >= 18
// c) Exiba:
//    "Menores (<qtd>): <menores>"
//    "Adultos (<qtd>): <adultos>"

// → Seu código aqui:
const idades = [12, 17, 21, 15, 30, 45, 9, 67, 19, 8]

let menores = []
let adultos = []

for(let i = 0; i < idades.length; i++) {

    if(idades[i] < 18) {
        menores.push(idades[i])
    } else {
        adultos.push(idades[i])
    }
}

console.log(`Menores (${menores.length}): ${menores}`)
console.log(`Adultos (${adultos.length}): ${adultos}`)



// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de notas
// ------------------------------------------------------------
// a) Crie um vetor vazio para notas;
// b) Usando do...while e switch, exiba o menu:
//    1 - Adicionar nota
//    2 - Listar notas
//    3 - Estatísticas
//    4 - Remover última
//    5 - Limpar todas
//    0 - Sair
// c) Realize as funções escolhidas até o usuário escolher 0.
// d) Ao sair: "Encerrando. Total de notas registradas: <qtd>"

// → Seu código aqui:
let notas = []
let opcao

do {

    console.log("\n========== MENU ==========")
    console.log("1 - Adicionar nota")
    console.log("2 - Listar notas")
    console.log("3 - Estatísticas")
    console.log("4 - Remover última")
    console.log("5 - Limpar todas")
    console.log("0 - Sair")

    opcao = ler.questionInt("Escolha uma opcao: ")

    switch(opcao) {

        case 1:

            let nota = ler.questionFloat("Digite a nota: ")

            notas.push(nota)

            console.log("Nota adicionada.")
            break

        case 2:

            console.log("\nLista de notas:")

            if(notas.length == 0) {
                console.log("Nenhuma nota cadastrada.")
            } else {

                for(let i = 0; i < notas.length; i++) {
                    console.log(`Nota ${i + 1}: ${notas[i]}`)
                }
            }

            break

        case 3:

            if(notas.length == 0) {

                console.log("Nenhuma nota cadastrada.")

            } else {

                let somaNotas = 0
                let maiorNota = notas[0]
                let menorNota = notas[0]

                for(let i = 0; i < notas.length; i++) {

                    somaNotas = somaNotas + notas[i]

                    if(notas[i] > maiorNota) {
                        maiorNota = notas[i]
                    }

                    if(notas[i] < menorNota) {
                        menorNota = notas[i]
                    }
                }

                let mediaNotas = somaNotas / notas.length

                console.log(`Quantidade: ${notas.length}`)
                console.log(`Média: ${mediaNotas.toFixed(2)}`)
                console.log(`Maior nota: ${maiorNota}`)
                console.log(`Menor nota: ${menorNota}`)
            }

            break

        case 4:

            if(notas.length == 0) {
                console.log("Nenhuma nota para remover.")
            } else {

                let removida = notas.pop()

                console.log(`Nota removida: ${removida}`)
            }

            break

        case 5:

            notas = []

            console.log("Todas as notas foram removidas.")
            break

        case 0:

            console.log(`Encerrando. Total de notas registradas: ${notas.length}`)
            break

        default:

            console.log("Opcao invalida.")
    }

} while(opcao != 0)
