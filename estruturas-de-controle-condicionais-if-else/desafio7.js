// ============================================================
//   DESAFIOS (para quem já terminou a atividade 07) – If / Else
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Classificador de IMC
// ------------------------------------------------------------
// Já realizamos um exercício similar, mas agora vamos aprimorar e exibir somente o resultado final.
// a) Pergunte ao usuário seu nome, peso (kg) e altura (m).
// b) Armazene os dados em um objeto "pessoa".
// c) Calcule o IMC: peso / (altura ** 2). Adicione ao objeto.
// d) Classifique o IMC usando if/else if/else e adicione a classificação ao objeto:
//    - IMC < 18.5          → "Abaixo do peso"
//    - IMC >= 18.5 e < 25  → "Peso normal"
//    - IMC >= 25 e < 30    → "Sobrepeso"
//    - IMC >= 30 e < 35    → "Obesidade grau I"
//    - IMC >= 35 e < 40    → "Obesidade grau II"
//    - IMC >= 40           → "Obesidade grau III"
// e) Exiba o objeto com console.table().
// f) Exiba uma mensagem final:
//    "<nome>, seu IMC é <imc> – <classificação>."

// → Seu código aqui:
const ler = require("readline-sync");

let pessoa = {
    nome: ler.question("Nome: "),
    peso: ler.questionFloat("Peso: "),
    altura: ler.questionFloat("Altura: ")
};

pessoa.imc =
    pessoa.peso /
    (pessoa.altura * pessoa.altura);

if (pessoa.imc < 18.5) {
    pessoa.classificacao = "Abaixo do peso";
} else if (pessoa.imc < 25) {
    pessoa.classificacao = "Peso normal";
} else if (pessoa.imc < 30) {
    pessoa.classificacao = "Sobrepeso";
} else if (pessoa.imc < 35) {
    pessoa.classificacao = "Obesidade grau I";
} else if (pessoa.imc < 40) {
    pessoa.classificacao = "Obesidade grau II";
} else {
    pessoa.classificacao = "Obesidade grau III";
}

console.table([pessoa]);

console.log(
    `${pessoa.nome}, seu IMC e ${pessoa.imc.toFixed(2)} - ${pessoa.classificacao}.`
);



// ------------------------------------------------------------
// DESAFIO 2 – Caixa eletrônico
// ------------------------------------------------------------
// a) Defina um objeto "conta" com:
//    - titular: "Maria"
//    - saldo: 1500
//    - bloqueada: false
//    - senha: 1234
// b) Peça ao usuário:
//    - Senha de 4 dígitos.
// c) Verifique se a senha está correta.
//    - Se estiver incorreta → "Senha incorreta. Operação cancelada."
//    - Se estive correta, pergunte ao usuário se deseja sacar ou depositar um valor
// d) Se ele escolher sacar, pergunte qual valor que deseja sacar.
//    Se ele escolher depositar, pergunte qual valor que deseja depositar.
// e) Se for saque, usando if/else if/else (aninhado se necessário), verifique:
//    1. Se a conta está bloqueada → "Conta bloqueada. Procure uma agência."
//    2. Se o valor do saque for menor ou igual a 0 → "Valor inválido."
//    3. Se o saldo for insuficiente → "Saldo insuficiente. Saldo atual: R$ <saldo>"
//    4. Caso contrário → realize o saque, atualize o saldo e exiba:
//       "Saque de R$ <valor> realizado. Novo saldo: R$ <saldo>"
// f) Se for depósito, usando if/else if/else (aninhado se necessário), verifique:
//    1. Se a conta está bloqueada → "Conta bloqueada. Procure uma agência."
//    2. Se o valor do depósito for menor ou igual a 0 → "Valor inválido."
//    3. Caso contrário → realize o depósito, atualize o saldo e exiba:
//       "Depósito de R$ <valor> realizado. Novo saldo: R$ <saldo>"
// Evite repetir linhas de código.
// Verifique se é possível fazer verificações uma única vez, alterando a lógica ao invés de duplicar código.

// → Seu código aqui:
const ler = require("readline-sync");

let conta = {
    titular: "Maria",
    saldo: 1500,
    bloqueada: false,
    senha: 1234
};

let senha = ler.questionInt("Digite a senha: ");

if (senha !== conta.senha) {

    console.log("Senha incorreta. Operacao cancelada.");

} else {

    let operacao = ler.question("Deseja sacar ou depositar? ");

    let valor;

    if (operacao === "sacar") {
        valor = ler.questionFloat("Valor do saque: ");
    } else {
        valor = ler.questionFloat("Valor do deposito: ");
    }

    if (conta.bloqueada) {

        console.log("Conta bloqueada. Procure uma agencia.");

    } else if (valor <= 0) {

        console.log("Valor invalido.");

    } else if (
        operacao === "sacar" &&
        valor > conta.saldo
    ) {

        console.log(
            `Saldo insuficiente. Saldo atual: R$ ${conta.saldo.toFixed(2)}`
        );

    } else {

        if (operacao === "sacar") {

            conta.saldo = conta.saldo - valor;

            console.log(
                `Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${conta.saldo.toFixed(2)}`
            );

        } else {

            conta.saldo = conta.saldo + valor;

            console.log(
                `Deposito de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${conta.saldo.toFixed(2)}`
            );
        }
    }
}


// ------------------------------------------------------------
// DESAFIO 3 – Classificação de filmes por faixa etária
// ------------------------------------------------------------
// Classificação indicativa:
//   - Livre          → todas as idades
//   - 10 anos        → 10 anos ou mais
//   - 12 anos        → 12 anos ou mais
//   - 14 anos        → 14 anos ou mais
//   - 16 anos        → 16 anos ou mais
//   - 18 anos        → 18 anos ou mais
//
// a) Pergunte ao usuário:
//    - Nome do espectador.
//    - Idade do espectador.
//    - Classificação do filme escolhido:
//      0 – Livre | 10 – 10 anos | 12 – 12 anos |
//      14 – 14 anos | 16 – 16 anos | 18 – 18 anos
// b) Armazene os dados em um objeto "cinema".
// c) Usando if/else if/else, verifique se o espectador pode assistir ao filme:
//    - Se a classificação for 0 (Livre) → sempre pode.
//    - Nos demais casos, compare a idade com a classificação.
// d) Exiba o resultado:
//    - Pode assistir → "<nome> pode assistir. Boa sessão!"
//    - Não pode → "<nome> não pode assistir. Classificação: <classificação> anos."

// → Seu código aqui:
const ler = require("readline-sync");

let cinema = {
    nome: ler.question("Nome: "),
    idade: ler.questionInt("Idade: "),
    classificacao: ler.questionInt("Classificacao do filme: ")
};

if (cinema.classificacao === 0) {

    console.log(
        `${cinema.nome} pode assistir. Boa sessao!`
    );

} else if (
    cinema.idade >= cinema.classificacao
) {

    console.log(
        `${cinema.nome} pode assistir. Boa sessao!`
    );

} else {

    console.log(
        `${cinema.nome} nao pode assistir. Classificacao: ${cinema.classificacao} anos.`
    );
}


// ------------------------------------------------------------
// DESAFIO 4 – Simulador de pedido de lanche
// ------------------------------------------------------------
// Cardápio:
//   1 – X-Burguer R$ 22,00
//   2 – X-Frango  R$ 20,00
//   3 – X-Veggie  R$ 18,00
//   4 – Combo (lanche + batata + refri)  R$ 35,00
//
// Adicionais (só para os itens 1, 2 e 3):
//   - Batata frita: + R$ 8,00
//   - Refrigerante: + R$ 5,00
//
// a) Pergunte ao usuário:
//    - Nome.
//    - Número do lanche desejado.
//    - Se o lanche não for o Combo:
//        - Quer batata frita?
//        - Quer refrigerante?
// b) Armazene todos os dados e o total calculado em um objeto "pedido".
// c) Calcule o total com base nas escolhas.
// d) Exiba o objeto "pedido" com console.table().
// e) Exiba o resumo final com template literal:
//    "Pedido de <nome>: <lanche> + adicionais = R$ <total>"

// → Seu código aqui:
const ler = require("readline-sync");

let pedido = {
    nome: ler.question("Nome: "),
    codigo: ler.questionInt("Numero do lanche: ")
};

if (pedido.codigo === 1) {
    pedido.lanche = "X-Burguer";
    pedido.total = 22;
} else if (pedido.codigo === 2) {
    pedido.lanche = "X-Frango";
    pedido.total = 20;
} else if (pedido.codigo === 3) {
    pedido.lanche = "X-Veggie";
    pedido.total = 18;
} else {
    pedido.lanche = "Combo";
    pedido.total = 35;
}

if (pedido.codigo !== 4) {

    pedido.batata =
        ler.keyInYN("Quer batata frita? ");

    pedido.refrigerante =
        ler.keyInYN("Quer refrigerante? ");

    if (pedido.batata) {
        pedido.total = pedido.total + 8;
    }

    if (pedido.refrigerante) {
        pedido.total = pedido.total + 5;
    }
}

console.table([pedido]);

console.log(
    `Pedido de ${pedido.nome}: ${pedido.lanche} + adicionais = R$ ${pedido.total.toFixed(2)}`
);


// ------------------------------------------------------------
// DESAFIO 5 – Simulador de semáforo inteligente
// ------------------------------------------------------------
// Um semáforo funciona assim:
//   - Verde  → siga (velocidade permitida: até 60 km/h)
//   - Amarelo → atenção (reduza a velocidade)
//   - Vermelho → pare
//
// a) Pergunte ao usuário - simulando os dados captados pelo radar:
//    - Cor atual do semáforo: "verde", "amarelo" ou "vermelho".
//    - Velocidade atual do veículo em km/h.
// b) Usando if/else if/else, avalie a situação:
//    - "verde" e velocidade menor ou igual que 60 → "Tudo certo. Pode seguir."
//    - "verde" e velocidade maior que 60 → "Atenção: acima do limite no sinal verde."
//    - "amarelo" → "Reduza a velocidade e prepare-se para parar."
//    - "vermelho" e velocidade maior que 0 → "PARE! Você avançou o sinal vermelho."
//    - "vermelho" e velocidade igual a 0 → "Correto. Aguarde o sinal abrir."
//    - qualquer outra cor → "Cor de semáforo inválida."
// c) Exiba o resultado com template literal.

// → Seu código aqui:
const ler = require("readline-sync");

let semaforo =
    ler.question("Cor do semaforo: ");

let velocidade =
    ler.questionFloat("Velocidade do veiculo: ");

if (
    semaforo === "verde" &&
    velocidade <= 60
) {

    console.log(
        "Tudo certo. Pode seguir."
    );

} else if (
    semaforo === "verde" &&
    velocidade > 60
) {

    console.log(
        "Atencao: acima do limite no sinal verde."
    );

} else if (
    semaforo === "amarelo"
) {

    console.log(
        "Reduza a velocidade e prepare-se para parar."
    );

} else if (
    semaforo === "vermelho" &&
    velocidade > 0
) {

    console.log(
        "PARE! Voce avancou o sinal vermelho."
    );

} else if (
    semaforo === "vermelho" &&
    velocidade === 0
) {

    console.log(
        "Correto. Aguarde o sinal abrir."
    );

} else {

    console.log(
        "Cor de semaforo invalida."
    );
}