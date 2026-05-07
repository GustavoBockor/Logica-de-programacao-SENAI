// ============================================================
// Loja de Itens – Menu Persistente
// ============================================================
//
// INSTRUÇÕES e REGRAS:
// Uma loja vende itens de um catálogo.
// O menu principal repete até o usuário escolher "Sair".
// O usuário começa com nenhum item e 200 reais.
// O usuário deve poder:
//   Visualizar o catálogo
//   Comprar itens do catálogo
//   Vender itens do inventário
//   Visualizar seus itens
// O valor de revenda de itens deve ser 70% do preço original, arredondado.
// Após o usuário escolher "Sair", exiba um resumo do cliente: nome, dinheiro restante e itens no inventário.
//
// ============================================================

let lerTeclado = require('readline-sync');

// ============================================================
// CATÁLOGO DA LOJA - Altere a vontade, mantendo a estrutura { id, nome, preco, estoque }
// ============================================================

const catalogo = [
  { id: 1, nome: "Espada de Ferro",   preco: 80, estoque: 2  },
  { id: 2, nome: "Escudo de Madeira", preco: 50, estoque: 5  },
  { id: 3, nome: "Poção de Cura",     preco: 30, estoque: 10 },
  { id: 4, nome: "Arco Longo",        preco: 65, estoque: 3  },
  { id: 5, nome: "Botas Velozes",     preco: 45, estoque: 4  },
  { id: 6, nome: "Batata",            preco: 15, estoque: 20 },
  { id: 7, nome: "Cajado Mágico",     preco: 95, estoque: 1  },
  { id: 8, nome: "Armadura de Couro", preco: 85, estoque: 2  }
];

// ============================================================
// ESTADO DO CLIENTE - não altere a estrutura
// ============================================================

const Cliente = {
  nome: "", // deve ser preenchido pelo usuário
  moedas: 200,
  inventario: []
};

// ============================================================
// INÍCIO
// ============================================================

console.log("╔════════════════════════════╗");
console.log("║        LOJA LOJINHA        ║");
console.log("╚════════════════════════════╝");

// → Seu código aqui:
let lerTeclado = require('readline-sync');

const catalogo = [
  { id: 1, nome: "Espada de Ferro", preco: 80, estoque: 2 },
  { id: 2, nome: "Escudo de Madeira", preco: 50, estoque: 5 },
  { id: 3, nome: "Poção de Cura", preco: 30, estoque: 10 },
  { id: 4, nome: "Arco Longo", preco: 65, estoque: 3 },
  { id: 5, nome: "Botas Velozes", preco: 45, estoque: 4 },
  { id: 6, nome: "Batata", preco: 15, estoque: 20 },
  { id: 7, nome: "Cajado Mágico", preco: 95, estoque: 1 },
  { id: 8, nome: "Armadura de Couro", preco: 85, estoque: 2 }
];

const Cliente = {
  nome: "",
  moedas: 200,
  inventario: []
};

console.log("╔════════════════════════════╗");
console.log("║        LOJA LOJINHA        ║");
console.log("╚════════════════════════════╝");

Cliente.nome = lerTeclado.question("\nDigite seu nome: ");

let opcao = 0;

while (opcao !== 5) {

  console.log("\n============================");
  console.log(`Cliente: ${Cliente.nome}`);
  console.log(`Moedas: R$ ${Cliente.moedas}`);
  console.log("============================");

  console.log("\n1 - Ver catálogo");
  console.log("2 - Comprar item");
  console.log("3 - Vender item");
  console.log("4 - Ver inventário");
  console.log("5 - Sair");

  opcao = lerTeclado.questionInt("\nEscolha uma opção: ");

  if (opcao === 1) {

    console.log("\n===== CATÁLOGO =====");

    for (let i = 0; i < catalogo.length; i++) {

      console.log(
        `${catalogo[i].id} - ${catalogo[i].nome} | R$ ${catalogo[i].preco} | Estoque: ${catalogo[i].estoque}`
      );

    }

  } else if (opcao === 2) {

    console.log("\n===== COMPRAR ITEM =====");

    for (let i = 0; i < catalogo.length; i++) {

      console.log(
        `${catalogo[i].id} - ${catalogo[i].nome} | R$ ${catalogo[i].preco} | Estoque: ${catalogo[i].estoque}`
      );

    }

    let idCompra = lerTeclado.questionInt("\nDigite o ID do item: ");

    let itemEncontrado = null;

    for (let i = 0; i < catalogo.length; i++) {

      if (catalogo[i].id === idCompra) {

        itemEncontrado = catalogo[i];

      }

    }

    if (itemEncontrado === null) {

      console.log("❌ Item não encontrado.");

    } else if (itemEncontrado.estoque <= 0) {

      console.log("❌ Item sem estoque.");

    } else if (Cliente.moedas < itemEncontrado.preco) {

      console.log("❌ Dinheiro insuficiente.");

    } else {

      Cliente.moedas -= itemEncontrado.preco;

      itemEncontrado.estoque--;

      Cliente.inventario.push({
        nome: itemEncontrado.nome,
        preco: itemEncontrado.preco
      });

      console.log(`✅ Você comprou ${itemEncontrado.nome}!`);

    }

  } else if (opcao === 3) {

    console.log("\n===== VENDER ITEM =====");

    if (Cliente.inventario.length === 0) {

      console.log("❌ Inventário vazio.");

    } else {

      for (let i = 0; i < Cliente.inventario.length; i++) {

        let valorVenda = Math.round(
          Cliente.inventario[i].preco * 0.7
        );

        console.log(
          `${i + 1} - ${Cliente.inventario[i].nome} | Venda: R$ ${valorVenda}`
        );

      }

      let itemVenda = lerTeclado.questionInt("\nEscolha o item para vender: ");

      if (
        itemVenda < 1 ||
        itemVenda > Cliente.inventario.length
      ) {

        console.log("❌ Item inválido.");

      } else {

        let item = Cliente.inventario[itemVenda - 1];

        let valorRecebido = Math.round(item.preco * 0.7);

        Cliente.moedas += valorRecebido;

        for (let i = 0; i < catalogo.length; i++) {

          if (catalogo[i].nome === item.nome) {

            catalogo[i].estoque++;

          }

        }

        Cliente.inventario.splice(itemVenda - 1, 1);

        console.log(
          `✅ ${item.nome} vendido por R$ ${valorRecebido}`
        );

      }

    }

  } else if (opcao === 4) {

    console.log("\n===== INVENTÁRIO =====");

    if (Cliente.inventario.length === 0) {

      console.log("Inventário vazio.");

    } else {

      for (let i = 0; i < Cliente.inventario.length; i++) {

        console.log(
          `${i + 1} - ${Cliente.inventario[i].nome} | R$ ${Cliente.inventario[i].preco}`
        );

      }

    }

  } else if (opcao === 5) {

    console.log("\nSaindo da loja...");

  } else {

    console.log("❌ Opção inválida.");

  }

}

console.log("\n╔════════════════════════════╗");
console.log("║      RESUMO DO CLIENTE     ║");
console.log("╚════════════════════════════╝");

console.log(`\nNome: ${Cliente.nome}`);
console.log(`Moedas restantes: R$ ${Cliente.moedas}`);

console.log("\nItens no inventário:");

if (Cliente.inventario.length === 0) {

  console.log("Nenhum item.");

} else {

  for (let i = 0; i < Cliente.inventario.length; i++) {

    console.log(`- ${Cliente.inventario[i].nome}`);

  }

}