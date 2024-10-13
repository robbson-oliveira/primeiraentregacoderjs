// Primeira Entrega Projeto Final


let carrinho = [];

function adicionarProduto() {
    let nome = prompt("Digite o nome do produto:");
    let preco = parseFloat(prompt("Digite o preço do produto:"));
    let categoria = prompt("Digite a categoria do produto:");

    let produto = { nome: nome, preco: preco, categoria: categoria };
    carrinho.push(produto);
}

function mostrarCarrinho() {
    carrinho.forEach(function(produto) {
        console.log(produto.nome + " - R$ " + produto.preco.toFixed(2) + " - Categoria: " + produto.categoria);
    });
}

function calcularTotal() {
    let total = carrinho.reduce(function(soma, produto) {
        return soma + produto.preco;
    }, 0);
    console.log("Total: R$ " + total.toFixed(2));
}

// Fluxo principal
adicionarProduto();
adicionarProduto();
mostrarCarrinho();
calcularTotal();
