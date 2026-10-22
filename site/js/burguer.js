
function topo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function pesquisarProdutos() {
    let pesquisa = prompt("Digite o nome do produto:");

    if (pesquisa === null) {
        return;
    }

    let cards = document.querySelectorAll(".card");
    let encontrados = 0;

    cards.forEach(function(card) {
        let nome = card.querySelector("h3");

        if (nome && nome.textContent.toLowerCase().includes(pesquisa.toLowerCase())) {
            card.style.display = "";
            encontrados++;
        } else {
            card.style.display = "none";
        }
    });

    if (encontrados === 0) {
        alert("Nenhum produto encontrado!");
    }
}

function mostrarTodosProdutos() {
    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        card.style.display = "";
    });
}

