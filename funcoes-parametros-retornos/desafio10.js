// ============================================================
//   DESAFIOS (para quem já terminou a atividade 15)
//   Funções com Parâmetros e Retornos
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Validador de senhas
// ------------------------------------------------------------
// Crie um conjunto de funções para validar uma senha.
//
// a) 'temTamanhoMinimo(senha, min)'  → true/false (senha.length >= min).
// b) 'temNumero(senha)'              → true se houver algum dígito (0-9).
// c) 'temMaiuscula(senha)'           → true se houver alguma letra maiúscula.
// d) 'temEspecial(senha)'            → true se houver !@#$%&*?
// e) 'validarSenha(senha)'           → retorna um OBJETO com:
//        { valida, motivos }
//    'motivos' é um VETOR de strings com tudo que falta. Ex:
//        { valida: false, motivos: ["Mínimo de 8 caracteres", "Deve conter número"] }
// f) Pergunte uma senha ao usuário e exiba o resultado da validação.

// → Seu código aqui:
const ler = require('readline-sync')

function temTamanhoMinimo(senha, min) {
    return senha.length >= min
}

function temNumero(senha) {
    for (let i = 0; i < senha.length; i++) {
        if (senha[i] >= "0" && senha[i] <= "9") {
            return true
        }
    }

    return false
}

function temMaiuscula(senha) {
    for (let i = 0; i < senha.length; i++) {
        if (senha[i] >= "A" && senha[i] <= "Z") {
            return true
        }
    }

    return false
}

function temEspecial(senha) {
    let especiais = "!@#$%&*?"

    for (let i = 0; i < senha.length; i++) {
        if (especiais.includes(senha[i])) {
            return true
        }
    }

    return false
}

function validarSenha(senha) {
    let motivos = []

    if (!temTamanhoMinimo(senha, 8)) {
        motivos.push("Mínimo de 8 caracteres")
    }

    if (!temNumero(senha)) {
        motivos.push("Deve conter número")
    }

    if (!temMaiuscula(senha)) {
        motivos.push("Deve conter letra maiúscula")
    }

    if (!temEspecial(senha)) {
        motivos.push("Deve conter caractere especial")
    }

    return {
        valida: motivos.length === 0,
        motivos: motivos
    }
}

let senha = ler.question("Digite uma senha: ")

let resultado = validarSenha(senha)

console.log(resultado)


// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// Crie uma "biblioteca" de funções de conversão.
//
// a) 'celsiusParaFahrenheit(c)'  → C * 1.8 + 32
// b) 'fahrenheitParaCelsius(f)'  → (F - 32) / 1.8
// c) 'kmParaMilhas(km)'          → km * 0.621371
// d) 'milhasParaKm(mi)'          → mi / 0.621371
// e) 'kgParaLibras(kg)'          → kg * 2.20462
// f) 'librasParaKg(lb)'          → lb / 2.20462
//
// g) Crie 'converter(valor, dePara)' que recebe a unidade de origem
//    e a unidade de destino e RETORNA o valor convertido, chamando a função correta.
//
// h) Faça um menu (do...while) onde o usuário digita o valor, e a unidade para qual deseja converter
//    e mostre o resultado formatado com toFixed(2).

// → Seu código aqui:
const ler = require('readline-sync')

function celsiusParaFahrenheit(c) {
    return c * 1.8 + 32
}

function fahrenheitParaCelsius(f) {
    return (f - 32) / 1.8
}

function kmParaMilhas(km) {
    return km * 0.621371
}

function milhasParaKm(mi) {
    return mi / 0.621371
}

function kgParaLibras(kg) {
    return kg * 2.20462
}

function librasParaKg(lb) {
    return lb / 2.20462
}

function converter(valor, dePara) {
    switch (dePara) {
        case 1:
            return celsiusParaFahrenheit(valor)

        case 2:
            return fahrenheitParaCelsius(valor)

        case 3:
            return kmParaMilhas(valor)

        case 4:
            return milhasParaKm(valor)

        case 5:
            return kgParaLibras(valor)

        case 6:
            return librasParaKg(valor)

        default:
            return null
    }
}

let opcao

do {
    console.log("\n1 - Celsius -> Fahrenheit")
    console.log("2 - Fahrenheit -> Celsius")
    console.log("3 - Km -> Milhas")
    console.log("4 - Milhas -> Km")
    console.log("5 - Kg -> Libras")
    console.log("6 - Libras -> Kg")
    console.log("0 - Sair")

    opcao = ler.questionInt("Opcao: ")

    if (opcao != 0) {
        let valor = ler.questionFloat("Valor: ")

        let resultado = converter(valor, opcao)

        console.log("Resultado:", resultado.toFixed(2))
    }

} while (opcao != 0)

// ------------------------------------------------------------
// DESAFIO 3 – Quiz
// ------------------------------------------------------------
// a) Declare uma lista com 5 objetos, contendo cada objeto:
//    pergunta: "..."
//    jaRespondida: false
//    acertou: false
// b) Crie a função 'exibirPergunta' que exibe a pergunta de forma estilizada.
// c) Crie a função 'verificarResposta' que verifica se a resposta está correta.
// d) Crie a função 'iniciarQuiz' que chama as perguntas em sequência.
// e) Crie a função 'mostrarResultado' que exibe o resultado atual.
// f) Crie a função 'iniciarQuiz' para iniciar o quiz.

// → Seu código aqui:
const ler = require('readline-sync')

let perguntas = [
    {
        pergunta: "Qual a capital do Brasil?",
        resposta: "brasilia",
        jaRespondida: false,
        acertou: false
    },
    {
        pergunta: "Quanto é 5 x 5?",
        resposta: "25",
        jaRespondida: false,
        acertou: false
    },
    {
        pergunta: "Qual linguagem estamos usando?",
        resposta: "javascript",
        jaRespondida: false,
        acertou: false
    },
    {
        pergunta: "Quantos lados tem um quadrado?",
        resposta: "4",
        jaRespondida: false,
        acertou: false
    },
    {
        pergunta: "Qual planeta vivemos?",
        resposta: "terra",
        jaRespondida: false,
        acertou: false
    }
]

function exibirPergunta(pergunta) {
    console.log("\n====================")
    console.log(pergunta)
    console.log("====================")
}

function verificarResposta(respostaUsuario, respostaCorreta) {
    return respostaUsuario.toLowerCase() == respostaCorreta.toLowerCase()
}

function mostrarResultado() {
    let acertos = 0

    for (let i = 0; i < perguntas.length; i++) {
        if (perguntas[i].acertou) {
            acertos++
        }
    }

    console.log("\nAcertos:", acertos)
    console.log("Erros:", perguntas.length - acertos)
}

function iniciarQuiz() {
    for (let i = 0; i < perguntas.length; i++) {

        exibirPergunta(perguntas[i].pergunta)

        let resposta = ler.question("Resposta: ")

        perguntas[i].jaRespondida = true

        if (verificarResposta(resposta, perguntas[i].resposta)) {
            perguntas[i].acertou = true
            console.log("Acertou!")
        } else {
            console.log("Errou!")
        }
    }

    mostrarResultado()
}

iniciarQuiz()



// ------------------------------------------------------------
// DESAFIO 4 – Banco de funcionários
// ------------------------------------------------------------
//
// a) Estrutura do funcionário:
//        { id, nome, cargo, salario, ativo }
// b) Crie funções:
//    - 'criarFuncionario(lista, nome, cargo, salario)' → adiciona um novo objeto (funcionário) em uma lista de funcionários.
//    - 'buscarPorId(lista, id)'                        → retorna o objeto ou null.
//    - 'atualizarSalario(lista, id, novoSalario)'      → true/false (atualizou ou não).
//    - 'desligar(lista, id)'                           → marca ativo = false; true/false.
//    - 'reintegrar(lista, id)'                         → marca ativo = true; true/false.
//    - 'totalFolha(lista)'                             → soma dos salários dos ATIVOS.
//    - 'mediaSalarial(lista)'                          → média dos salários dos ATIVOS.
//    - 'maiorSalario(lista)'                           → retorna o funcionário ATIVO
//                                                        com maior salário.
// c) Construa um menu (do...while + switch) que permita usar todas as funções.
// d) Após cada operação, exiba a lista atualizada com console.table().

// → Seu código aqui:
const ler = require('readline-sync')

let funcionarios = []
let proximoId = 1

function criarFuncionario(lista, nome, cargo, salario) {

    lista.push({
        id: proximoId,
        nome: nome,
        cargo: cargo,
        salario: salario,
        ativo: true
    })

    proximoId++
}

function buscarPorId(lista, id) {

    for (let funcionario of lista) {
        if (funcionario.id == id) {
            return funcionario
        }
    }

    return null
}

function atualizarSalario(lista, id, novoSalario) {

    let funcionario = buscarPorId(lista, id)

    if (funcionario) {
        funcionario.salario = novoSalario
        return true
    }

    return false
}

function desligar(lista, id) {

    let funcionario = buscarPorId(lista, id)

    if (funcionario) {
        funcionario.ativo = false
        return true
    }

    return false
}

function reintegrar(lista, id) {

    let funcionario = buscarPorId(lista, id)

    if (funcionario) {
        funcionario.ativo = true
        return true
    }

    return false
}

function totalFolha(lista) {

    let total = 0

    for (let funcionario of lista) {
        if (funcionario.ativo) {
            total += funcionario.salario
        }
    }

    return total
}

function mediaSalarial(lista) {

    let soma = 0
    let quantidade = 0

    for (let funcionario of lista) {
        if (funcionario.ativo) {
            soma += funcionario.salario
            quantidade++
        }
    }

    if (quantidade == 0) {
        return 0
    }

    return soma / quantidade
}

function maiorSalario(lista) {

    let maior = null

    for (let funcionario of lista) {

        if (!funcionario.ativo) {
            continue
        }

        if (maior == null || funcionario.salario > maior.salario) {
            maior = funcionario
        }
    }

    return maior
}

let opcao

do {

    console.log("\n1 - Cadastrar")
    console.log("2 - Buscar")
    console.log("3 - Atualizar salário")
    console.log("4 - Desligar")
    console.log("5 - Reintegrar")
    console.log("6 - Total folha")
    console.log("7 - Média salarial")
    console.log("8 - Maior salário")
    console.log("0 - Sair")

    opcao = ler.questionInt("Opcao: ")

    switch (opcao) {

        case 1:
            let nome = ler.question("Nome: ")
            let cargo = ler.question("Cargo: ")
            let salario = ler.questionFloat("Salario: ")

            criarFuncionario(funcionarios, nome, cargo, salario)
            break

        case 2:
            let idBusca = ler.questionInt("ID: ")
            console.log(buscarPorId(funcionarios, idBusca))
            break

        case 3:
            let idSalario = ler.questionInt("ID: ")
            let novoSalario = ler.questionFloat("Novo salario: ")

            atualizarSalario(funcionarios, idSalario, novoSalario)
            break

        case 4:
            desligar(funcionarios, ler.questionInt("ID: "))
            break

        case 5:
            reintegrar(funcionarios, ler.questionInt("ID: "))
            break

        case 6:
            console.log("Folha:", totalFolha(funcionarios))
            break

        case 7:
            console.log("Média:", mediaSalarial(funcionarios).toFixed(2))
            break

        case 8:
            console.log(maiorSalario(funcionarios))
            break
    }

    console.table(funcionarios)

} while (opcao != 0)


// ------------------------------------------------------------
// DESAFIO 5 – Jogo de adivinhação modularizado
// ------------------------------------------------------------
// Recrie o "jogo da adivinhação", agora SEPARADO em funções.
//
// a) 'sortearNumero(min, max)'              → retorna um inteiro aleatório no intervalo.
// b) 'pedirPalpite(min, max)'               → pergunta e retorna um inteiro válido
//                                              (refaz a pergunta se estiver fora).
// c) 'compararPalpite(palpite, alvo)'       → retorna "maior", "menor" ou "acertou".
// d) 'classificarTentativas(qtd)'           → retorna uma string:
//                                              1     → "Sorte de principiante!"
//                                              2-3   → "Excelente!"
//                                              4-6   → "Bom!"
//                                              7-10  → "Regular."
//                                              >10   → "Continue tentando!"
// e) 'jogar(min, max)'                      → executa o jogo completo:
//                                              sorteia, faz o loop de palpites,
//                                              e RETORNA a quantidade de tentativas.
// f) No programa principal, pergunte se o usuário quer jogar de novo (keyInYN()).
//    Mantenha um vetor 'historico' com todas as partidas:
//        { partida, tentativas, classificacao }
//    Ao final, exiba console.table(historico).

// → Seu código aqui:
const ler = require('readline-sync')

function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function pedirPalpite(min, max) {

    let palpite

    do {
        palpite = ler.questionInt(`Digite um numero entre ${min} e ${max}: `)

    } while (palpite < min || palpite > max)

    return palpite
}

function compararPalpite(palpite, alvo) {

    if (palpite > alvo) {
        return "maior"
    }

    if (palpite < alvo) {
        return "menor"
    }

    return "acertou"
}

function classificarTentativas(qtd) {

    if (qtd == 1) {
        return "Sorte de principiante!"
    }

    if (qtd <= 3) {
        return "Excelente!"
    }

    if (qtd <= 6) {
        return "Bom!"
    }

    if (qtd <= 10) {
        return "Regular."
    }

    return "Continue tentando!"
}

function jogar(min, max) {

    let alvo = sortearNumero(min, max)

    let tentativas = 0

    while (true) {

        let palpite = pedirPalpite(min, max)

        tentativas++

        let resultado = compararPalpite(palpite, alvo)

        if (resultado == "acertou") {
            console.log("Parabéns!")
            break
        }

        if (resultado == "maior") {
            console.log("O número é menor.")
        }

        if (resultado == "menor") {
            console.log("O número é maior.")
        }
    }

    return tentativas
}

let historico = []
let partida = 1

do {

    let tentativas = jogar(1, 100)

    historico.push({
        partida: partida,
        tentativas: tentativas,
        classificacao: classificarTentativas(tentativas)
    })

    partida++

} while (ler.keyInYN("Jogar novamente?"))

console.table(historico)