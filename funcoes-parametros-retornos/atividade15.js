// ============================================================
// ATIVIDADE 15 – Funções com Parâmetros e Retornos
// ============================================================
//
// IMPORTANTE: a partir de agora, as funções devem RECEBER
// PARÂMETROS e RETORNAR valores sempre que fizer sentido.
// Evite ficar misturando console.log() dentro de funções.
//
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Função com 1 parâmetro
// ------------------------------------------------------------
// a) Crie a função 'quadrado(n)' que retorna n elevado ao quadrado.
// b) Teste com 3, 7 e 10. Exiba cada resultado.

// → Seu código aqui:
function quadrado(n) {
    return n * n;
}

console.log(quadrado(3));
console.log(quadrado(7));
console.log(quadrado(10));


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função com 2 parâmetros
// ------------------------------------------------------------
// a) Crie a função 'somar(a, b)' que retorna a soma de 2 numeros quaisquer (numeros passados ao chamar a função).
// b) Crie 'subtrair(a, b)', 'multiplicar(a, b)' e 'dividir(a, b)'.
//    Em dividir, retorne a string "Erro: divisão por zero" se b === 0.
// c) Teste cada uma com diversos valores e exiba os resultados.

// → Seu código aqui:
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a / b;
}
console.log(somar(5, 3));       
console.log(subtrair(10, 4));
console.log(multiplicar(6, 7));
console.log(dividir(15, 3));




// ------------------------------------------------------------
// EXERCÍCIO 3 – Funções booleanas
// ------------------------------------------------------------
// a) Crie 'ehPar(n)' que retorna true se n for par, senão false.
// b) Crie 'ehMaiorDeIdade(idade)' que retorna true se idade >= 18.
// c) Crie 'ehVogal(letra)' que retorna true se letra for vogal
//    (considere maiúsculas e minúsculas).
// d) Teste cada função e exiba os resultados.

// → Seu código aqui:
function ehPar(n) {
    return n % 2 === 0;
}
function ehMaiordeidade(idade) {
return idade >=18;
}
function ehVogal(letra) { letra = letra.toLowerCase();
    return letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u';
}
console.log(ehPar(4));
console.log(ehMaiordeidade(20));
console.log(ehVogal('A'));
console.log(ehVogal('b'));



// ------------------------------------------------------------
// EXERCÍCIO 4 – Múltiplos returns (early return)
// ------------------------------------------------------------
// a) Crie a função 'classificarIMC(imc)' que retorna:
//    - "Abaixo do peso"   se imc < 18.5
//    - "Peso normal"      se imc < 25
//    - "Sobrepeso"        se imc < 30
//    - "Obesidade"        caso contrário
// b) Crie 'calcularIMC(peso, altura)' que retorna peso / (altura * altura).
// c) Pergunte peso e altura ao usuário.
// d) Combine as duas funções e exiba:
//    "IMC: <valor> – <classificação>"

// → Seu código aqui:
const ler = require('readline-sync')

let peso = ler.questionFloat("Peso: ")
let altura = ler.questionFloat("Altura: ")

function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso"
    }

    if (imc < 25) {
        return "Peso normal"
    }

    if (imc < 30) {
        return "Sobrepeso"
    }

    return "Obesidade"
}

let imc = calcularIMC(peso, altura)

console.log("IMC:", imc.toFixed(2), "-", classificarIMC(imc))



// ------------------------------------------------------------
// EXERCÍCIO 5 – Parâmetros padrão (default)
// ------------------------------------------------------------
// a) Crie a função 'precoComDesconto(valor, desconto = 10)' que retorna
//    o valor após aplicar o desconto em PORCENTAGEM.
// b) Teste:
//    - precoComDesconto(100)     → retorno esperado: 90
//    - precoComDesconto(100, 25  → retorno esperado: 75
//    - precoComDesconto(250, 5)  → retorno esperado: 237.5
// c) Exiba cada resultado formatado com toFixed(2).

// → Seu código aqui:

function precoComDesconto(valor, desconto = 10) {
    return valor - (valor * desconto / 100)
}

console.log(precoComDesconto(100).toFixed(2))
console.log(precoComDesconto(100, 25).toFixed(2))
console.log(precoComDesconto(250, 5).toFixed(2))



// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções que recebem vetores
// ------------------------------------------------------------
// a) Crie a função 'somarVetor(vet)' que retorna a soma dos elementos de um vetor.
// b) Crie 'mediaVetor(vet)' que retorna a média (REAPROVEITE somarVetor).
// c) Crie 'maiorDoVetor(vet)' que retorna o maior valor de um vetor.
// d) Crie 'menorDoVetor(vet)' que retorna o menor valor de um vetor.
// e) Teste com:
    //   numeros = [12, 7, 25, 3, 18, 9, 31, 14];

// → Seu código aqui:
function somarVetor(vet) {
    let soma = 0

    for (let numero of vet) {
        soma += numero
    }

    return soma
}

function mediaVetor(vet) {
    return somarVetor(vet) / vet.length
}

function maiorDoVetor(vet) {
    let maior = vet[0]

    for (let numero of vet) {
        if (numero > maior) {
            maior = numero
        }
    }

    return maior
}

function menorDoVetor(vet) {
    let menor = vet[0]

    for (let numero of vet) {
        if (numero < menor) {
            menor = numero
        }
    }

    return menor
}

let numeros = [12, 7, 25, 3, 18, 9, 31, 14]

console.log("Soma:", somarVetor(numeros))
console.log("Média:", mediaVetor(numeros))
console.log("Maior:", maiorDoVetor(numeros))
console.log("Menor:", menorDoVetor(numeros))


// ------------------------------------------------------------
// EXERCÍCIO 7 – Função que retorna objeto
// ------------------------------------------------------------
// a) Crie a função 'criarAluno(nome, idade, nota)' que retorna um objeto:
//    { nome, idade, nota, situacao }
//    onde 'situacao' é "Aprovado" se nota >= 7, senão "Reprovado".
// b) A verificação de aprovação deve ser feita por uma função específica para isso.
// c) Crie 3 alunos chamando a função e exiba-os com console.table([a1, a2, a3]).

// → Seu código aqui:

function verificarAprovacao(nota) {
    if (nota >= 7) {
        return "Aprovado"
    }

    return "Reprovado"
}

function criarAluno(nome, idade, nota) {
    return {
        nome,
        idade,
        nota,
        situacao: verificarAprovacao(nota)
    }
}

let a1 = criarAluno("Gustavo", 17, 8.5)
let a2 = criarAluno("Ana", 16, 6.0)
let a3 = criarAluno("Pedro", 18, 7.0)

console.table([a1, a2, a3])


// ------------------------------------------------------------
// EXERCÍCIO 8 – Função que retorna vetor
// ------------------------------------------------------------
// a) Crie a função 'gerarPares(inicio, fim)' que retorna um vetor
//    com todos os números PARES entre 'inicio' e 'fim' (inclusive).
// b) Teste com gerarPares(1, 20) e exiba o vetor.
// c) Crie 'filtrarMaioresQue(vet, limite)' que retorna um novo vetor
//    apenas com os elementos maiores que 'limite'.
// d) Combine: gere pares de 1 a 50 e filtre os maiores que 30.

// → Seu código aqui:
function gerarPares(inicio, fim) {
    let pares = []

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            pares.push(i)
        }
    }

    return pares
}

function filtrarMaioresQue(vet, limite) {
    let resultado = []

    for (let numero of vet) {
        if (numero > limite) {
            resultado.push(numero)
        }
    }

    return resultado
}

console.log(gerarPares(1, 20))

let pares = gerarPares(1, 50)

console.log(filtrarMaioresQue(pares, 30))
