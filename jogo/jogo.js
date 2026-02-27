let vez = "x";
let ponto;
let pontuacao = 0;

let jogo = [0, 0, 0,
            0, 0, 0,
            0, 0, 0];

function selecionar(posicao) {
    if (vez == 'x') {
        posicao.classList.add("selecionarX");
        vez = "o";
        ponto = 1;
    }
    else {
        posicao.classList.add("selecionarO")
        vez = "x";
        ponto = 4;
    }
    posicao.removeAttribute("onclick");

    let id = posicao.getAttribute('id');
    jogo[id] = ponto;
    pontuacao += 1;
    console.log(pontuacao);
    if (jogo[0] + jogo[1] + jogo[2] == 3 ||
        jogo[3] + jogo[4] + jogo[5] == 3 ||
        jogo[6] + jogo[7] + jogo[8] == 3 ||

        jogo[0] + jogo[3] + jogo[6] == 3 ||
        jogo[1] + jogo[4] + jogo[7] == 3 ||
        jogo[2] + jogo[5] + jogo[8] == 3 ||

        jogo[2] + jogo[4] + jogo[6] == 3 ||
        jogo[0] + jogo[4] + jogo[8] == 3
    ) {
        alert("X ganhou");
    }
    else if (jogo[0] + jogo[1] + jogo[2] == 12 ||
             jogo[3] + jogo[4] + jogo[5] == 12 ||
             jogo[6] + jogo[7] + jogo[8] == 12 ||

             jogo[0] + jogo[3] + jogo[6] == 12 ||
             jogo[1] + jogo[4] + jogo[7] == 12 ||
             jogo[2] + jogo[5] + jogo[8] == 12 ||

             jogo[2] + jogo[4] + jogo[6] == 12 ||
             jogo[0] + jogo[4] + jogo[8] == 12
    ) {
        console.log("O ganhou");
    }
    else if (pontuacao == 9){
        alert("Deu velha");
    }
}
