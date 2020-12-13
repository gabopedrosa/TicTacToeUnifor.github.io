var jogador = 'x';
var jogada = 0;

function checkJogo(id){
    var src = checkSrc(id);
    if (src == "branco.png") {
        document.getElementById(id).src = "img/" +jogador+ ".png";
        jogada++;
        if( checkVitoria() ) {
            alert ('Fim do jogo! Vitoria do ' +jogador);
            
        }
        if (jogada >= 9) {
            alert("Fim de jogo! Empate.")
            
        }

        if (jogador == 'x') {
            jogador = 'o';
        }
        else {
            jogador = 'x';
        }
    }
}

function checkSrc (id){
    var src = document.getElementById(id).src;
    return src.substring(src.length - 10, src.length);
}

function checkVitoria() {
    //  Horizontal
    if ( (checkSrc('celula7') == checkSrc('celula8')) && (checkSrc('celula7') == checkSrc('celula9')) && checkSrc('celula7') != 'branco.png') {
        return true;
    }
    if ( (checkSrc('celula4') == checkSrc('celula5')) && (checkSrc('celula4') == checkSrc('celula6')) && checkSrc('celula4') != 'branco.png') {
        return true;
    }
    if ( (checkSrc('celula1') == checkSrc('celula2')) && (checkSrc('celula1') == checkSrc('celula3')) && checkSrc('celula1') != 'branco.png') {
        return true;
    }
    if ( (checkSrc('celula7') == checkSrc('celula4')) && (checkSrc('celula7') == checkSrc('celula1')) && checkSrc('celula7') != 'branco.png') {
        return true;
    }
    if ( (checkSrc('celula8') == checkSrc('celula5')) && (checkSrc('celula8') == checkSrc('celula2')) && checkSrc('celula8') != 'branco.png') {
        return true;
    }
    if ( (checkSrc('celula9') == checkSrc('celula6')) && (checkSrc('celula9') == checkSrc('celula3')) && checkSrc('celula9') != 'branco.png') {
        return true;
    }

    //  Diagonal
    if ( (checkSrc('celula7') == checkSrc('celula5')) && (checkSrc('celula7') == checkSrc('celula3')) && checkSrc('celula7') != 'branco.png') {
        return true;
    }
    if ( (checkSrc('celula1') == checkSrc('celula5')) && (checkSrc('celula1') == checkSrc('celula9')) && checkSrc('celula1') != 'branco.png') {
        return true;
    }
    return false;
}

function reset(){
    location.reload();
}