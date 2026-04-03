// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:

let nome = 'Gustavo'
let idade = '16'
let hobby = 'futebol'
let fraseApresentação = `Meu nome é ${nome}, tenho ${idade} anos, meu hobby favorito é ${hobby}.`
console.log(fraseApresentação)

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:

let Cidade2 = 'Jaraguá do sul'
let temperatura = '26 graus'
let fraseTemperatura = `Hoje em ${Cidade2} está fazendo ${temperatura},perfeito para atividades ao ar livre`
console.log(fraseTemperatura)






// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.
// → Seu código aqui:
let string = 'frango'
let number = '7'
let boolean = true
let undefined
let teste = null
console.log(`Valor: ${string} | Tipo: ${typeof frango}`)
console.log(`Valor: ${number} | Tipo: ${typeof 7}`)
console.log(`Valor: ${boolean} | Tipo: ${typeof true}`)
console.log(`Valor: ${undefined} | Tipo: ${typeof undefined}`)
console.log(`Valor: ${null} | Tipo: ${typeof null}`)



// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
let personagem = 'Gustavo'
let cidade3 = 'Jaraguá do Sul'
let missao = 'comprar pão'

let minihist = `É um dia de sol em ${cidade3} e ${personagem} precisa ir à cidade para ${missao}, mas acaba sendo roubado no meio do caminho e volta para casa sem concluir sua missão de ${missao}.`

console.log(minihist)

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:
let nome1 = 'Gustavo'
let objetivo = 'Aprender JavaScript'
let motivacional = `${nome1},não desista,continue aprendendo e melhorando para se tornar um programador e ${objetivo}`
console.log(motivacional);

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade
// → Seu código aqui:
 console.log ("========================")
 console.log ("SISTEMA DO USUÁRIO")
 console.log ("========================")
 console.log ("1.Ver perfil")
 console.log ("2.Editar perfil")
 console.log ("3.Configurações")
 console.log ("4.Notificações")
 console.log ("5.Relatórios")
 console.log ("6.Ajuda")
 console.log ("7.Ajuda sobre o sistema")
 console.log ("0.Sair")
 console.log ("============================")
 console.log ("Digite o numero da opção desejada")
 console.log ("==============================")
