let numeroDeChutes = 0;
let dificuldadeId = 0;
let numeroSelecionado = 0;
let numeroDeAcertos = 0;

const Dificuldade = [
    {
        dificuldadeNome: 'Normal',
        tentativasMaxima: 7,
        numerosAleatorios: 10,
        historico: 'Ativado'
    },
    {
        dificuldadeNome: 'Medio',
        tentativasMaxima: 5,
        numerosAleatorios: 20,
        historico: 'Desativado apos 3 tentativas'
    },
    {
        dificuldadeNome: 'Dificil',
        tentativasMaxima: 3,
        numerosAleatorios: 30,
        historico: 'Desativado!!'
    },
    {
        dificuldadeNome: 'Super Dificil',
        tentativasMaxima: 1,
        numerosAleatorios: 40,
        historico: 'DESATIVADO'
    }
]

function PlayButton() {
    const menuPrincipal = document.querySelector('.menuprincipal');
    const gameArea = document.querySelector('.GameArea')

    menuPrincipal.style.display = "none";
    gameArea.style.display = 'block'
}

const tentativasRestantes = document.querySelector('#tentativasRestantes');

//SELECIONA A DIFICULDADE AO INIALIZAR OU SELECIONAR OUTRA
function selectDificuldade() {
    const dificuldadeSelect = document.querySelector('#dificuldade');
    let dificuldadeSelecionada = dificuldadeSelect.value;
    switch (dificuldadeSelecionada) {
        case 'normal':
            dificuldadeId = 0;
            setGame(dificuldadeId);
            break
        case 'medio':
            dificuldadeId = 1;
            setGame(dificuldadeId);
            break
        case 'dificil':
            dificuldadeId = 2
            setGame(dificuldadeId);
            break
        case 'superdificil':
            dificuldadeId = 3;
            setGame(dificuldadeId);
            break
    }

    function setGame(dificultID) {
        game(Dificuldade[dificultID].dificuldadeNome, Dificuldade[dificultID].tentativasMaxima, Dificuldade[dificultID].numerosAleatorios)
        getNumber();
    }
}
//inicializa no start do jogo
selectDificuldade();

//coloca as informações do nivel do jogo selecionado na tela
function game(dificuldadeNome, tentativasMaxima, numerosAleatorios) {
    const gameTitle = document.querySelector('#divTitle h1');
    const dificultText = document.querySelector('#divDificuldade h1');

    const numeroTentadoPh = document.querySelector('#chuteInt');

    gameTitle.innerHTML = `CHUTE UM NUMERO DE 0 A ${numerosAleatorios}`
    dificultText.innerHTML = `${dificuldadeNome}`
    tentativasRestantes.innerHTML = `${numeroDeChutes}/${tentativasMaxima}`
    numeroTentadoPh.placeholder = `Digite um numero entre 0 e ${numerosAleatorios}`

    alterarDificuldadeInfo()

    const desativador = document.getElementById('nDisponivel');
    if (Dificuldade[dificuldadeId].dificuldadeNome == 'Dificil' || Dificuldade[dificuldadeId].dificuldadeNome == 'Super Dificil') {
        desativador.style.visibility = 'visible'
    }else{
        desativador.style.visibility = 'hidden'
    }
}

function getNumber() {
    let dificult = Dificuldade[dificuldadeId].numerosAleatorios
    numeroSelecionado = Math.floor(Math.random() * dificult + 1)
    console.log(`numero selecionado:> ${numeroSelecionado}`)
}

let chutes = [];


function historico(chuteValue) {
    const historicoInput = document.querySelector('#historicoTentativas');
    chutes.push(chuteValue)

    setInterval(() => {
        historicoInput.value = chutes;
    }, 500);
}

function dHistorico(numeroTentado) {
    const desativador = document.getElementById('nDisponivel');
    if (Dificuldade[dificuldadeId].dificuldadeNome == 'Dificil' || Dificuldade[dificuldadeId].dificuldadeNome == 'Super Dificil') {
        console.log('historico indisponivel')
    } else if (numeroDeChutes >= 2 && Dificuldade[dificuldadeId].dificuldadeNome == 'Medio') {
        console.log('historico indisponivel')
        desativador.style.visibility = 'visible';
    }
    else {
        historico(numeroTentado)
    }
}

function erro(errHTML) {
    let err = document.getElementById('err')
    err.innerHTML = errHTML
}
const nextGame = document.getElementById('nextGame')

function chutarNumero() {
    let chuteInput = document.getElementById('chuteInt')
    let numeroTentado = Number(chuteInput.value)

    if (numeroDeChutes >= Dificuldade[dificuldadeId].tentativasMaxima) {
        erro('SUAS TENTATIVAS ACARARAM');
        return
    }

    console.log(`Numero de Chutes: ${numeroDeChutes}`)

    dHistorico(numeroTentado);
    console.log('Numero Digitado: ' + numeroTentado);

    if (numeroSelecionado > numeroTentado) {
        erro('O numero selecionado e maior.')
        numeroDeChutes++;
    } else if (numeroSelecionado < numeroTentado) {
        numeroDeChutes++;
        erro('O numero selecionado e menor.')
    } else if (numeroTentado == numeroSelecionado) {
        erro('VOCÊ ACERTOU!')
        nextGame.style.display = 'block'
    }

    tentativasRestantes.innerHTML = `${numeroDeChutes}/${Dificuldade[dificuldadeId].tentativasMaxima}`

    Perdeu();
}

function ProximoGame() {
    nextGame.style.display = 'none';
    getNumber();
    chutes.length = 0;
    numeroDeAcertos++;
    console.log('Você acertou um total de ' + numeroDeAcertos)
}

function Perdeu() {
    if(numeroDeChutes == Dificuldade[dificuldadeId].tentativasMaxima){
        console.log('Você PERDEU!!!!!!');
        erro('VOCÊ PERDEU!!');

        setInterval(() => {
            location.reload();
        }, 2000);
    }
}

function alterarDificuldadeInfo(){
    let dificuldadeInfo = document.getElementById('dificuldadeInfo');

    dificuldadeInfo.innerHTML =
    `Historico: ${Dificuldade[dificuldadeId].historico}<br/>
    Você tera que escolher um numero até: ${Dificuldade[dificuldadeId].numerosAleatorios}<br/>
    Você tera apenas: ${Dificuldade[dificuldadeId].tentativasMaxima} tentativas
    `;
}

// E NESSE MOMENTO EM QUE VC PERCEBE O QUANTO SEPARAR POR ARQUIVOS FAZ FALTA T-T -> press 'F' to codepen 
// UM DIA EU IREI COMENTAR TODO ESSE CODIGO MAS ESSE DIA NÃO E HOJE... ESTOU COM MUITO SONO PARA ISSO MAS PRECISAVA TERMINA ISSO LOGO AO MENOS O BASICO