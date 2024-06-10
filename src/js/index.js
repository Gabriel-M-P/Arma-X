const btnVoltar = document.getElementById("btn-voltar");
const btnAvancar = document.getElementById("btn-avancar");
var cartoes = document.querySelectorAll(".cartao");
const classe = "selecionado";

btnAvancar.addEventListener("click", () => {
    trocar_cartao(1)
})
btnVoltar.addEventListener("click", () => {
    trocar_cartao(-1)
})

function cartao_selecionado() {
    for (let i = 0; i < cartoes.length; i++) {
        if (cartoes[i].classList.contains(classe)) {
            return i
        }
    }
    return -1
}

function trocar_cartao(direcao) {
    const atual = cartao_selecionado()
    let proximo = (atual + direcao + cartoes.length) % cartoes.length;
    cartoes[atual].classList.remove(classe);
    cartoes[proximo].classList.add(classe);
}

