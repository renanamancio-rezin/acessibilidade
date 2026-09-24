// --- CONTROLE DE TAMANHO DA FONTE ---
let tamanhoFonteAtual = 16;
const valorAdicionado = 2;
const valorSubtraido = 2;

let btnAumentaFonte = document.getElementById("btnAumentaTexto");
let btnDiminuiFonte = document.getElementById("btnDiminuiTexto");

btnAumentaFonte.addEventListener("click", aumentaFonte);
btnDiminuiFonte.addEventListener("click", diminuiFonte);

function aumentaFonte() {
    tamanhoFonteAtual += valorAdicionado;
    document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}

function diminuiFonte() {
    tamanhoFonteAtual -= valorSubtraido;
    document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}

// --- LEITURA DE TELA EM VOZ ALTA ---
let lendo = false;
const btnLeitura = document.getElementById("btnVoz");

btnLeitura.addEventListener("click", lerEmVozAlta);

function lerEmVozAlta() {
    if (lendo === true) {
        if (speechSynthesis.paused === true) {
            speechSynthesis.resume();
        } else {
            speechSynthesis.pause();
        }
        return;
    }

    let conteudo = document.querySelector("main");
    let texto = conteudo.innerText;

    let fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    fala.onend = finalizarLeitura;

    speechSynthesis.cancel();
    speechSynthesis.speak(fala);
    lendo = true;
}

function finalizarLeitura() {
    lendo = false;
}

function pararLeitura() {
    speechSynthesis.cancel();
    lendo = false;
}

// --- CONTROLE DO MODAL ---
let btnAjuda = document.querySelector(".banner .botao-ajuda");
let btnFechar = document.querySelector(".botao-fechar");
let modal = document.querySelector(".modal-fundo");

if (btnAjuda) btnAjuda.addEventListener("click", abreModal);
if (btnFechar) btnFechar.addEventListener("click", fechaModal);

function abreModal() {
    modal.style.display = "block";
}

function fechaModal() {
    modal.style.display = "none";
}