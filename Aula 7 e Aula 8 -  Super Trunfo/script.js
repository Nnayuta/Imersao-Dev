const cartas = [
    {
        nome: "WORLD VOICE",
        img: "https://www.publicdomainpictures.net/pictures/280000/velka/question-mark-1544553868vD2.jpg",
        atributos: {
            ATAQUE: 9999,
            DEFESA: 9999,
            MAGICKA: 9999,
        }
    },
    {
        nome: "Rimuru Tempest",
        img: "https://cdn.myanimelist.net/images/characters/12/437304.jpg",
        atributos: {
            ATAQUE: 5000,
            DEFESA: 2500,
            MAGICKA: 9999,
        }
    },
    {
        nome: "Veldora Tempest",
        img: "https://i.pinimg.com/736x/2b/25/65/2b25653f4123973a186986c44eb036c9.jpg",
        atributos: {
            ATAQUE: 4600,
            DEFESA: 5000,
            MAGICKA: 8000,
        }
    },
    {
        nome: "Diablo",
        img: "https://cdn.anisearch.com/images/character/cover/full/94/94408.webp",
        atributos: {
            ATAQUE: 3500,
            DEFESA: 4000,
            MAGICKA: 7000,
        }
    },
    {
        nome: "Benimaru",
        img: "http://pm1.narvii.com/6990/7dee104fa76bb0b99c785ce332442dd066a5788fr1-1000-1000v2_uhq.jpg",
        atributos: {
            ATAQUE: 3000,
            DEFESA: 2000,
            MAGICKA: 5500,
        }
    },
    {
        nome: "Shion",
        img: "https://www.myutaku.com/media/personnage/131937.jpg",
        atributos: {
            ATAQUE: 4500,
            DEFESA: 1000,
            MAGICKA: 4000,
        }
    },
    {
        nome: "Shuna",
        img: "https://cdn.myanimelist.net/images/characters/16/384887.jpg",
        atributos: {
            ATAQUE: 2000,
            DEFESA: 900,
            MAGICKA: 8900,
        }
    },
    {
        nome: "Souei",
        img: "https://i.pinimg.com/474x/0a/40/2e/0a402ee5f2e9841fed0ef41d84070f54.jpg",
        atributos: {
            ATAQUE: 2500,
            DEFESA: 1000,
            MAGICKA: 1000,
        }
    },
    {
        nome: "Gobta",
        img: "https://www.anime-planet.com/images/characters/94825.jpg?t=1544654361",
        atributos: {
            ATAQUE: 1000,
            DEFESA: 200,
            MAGICKA: 240,
        }
    },
    {
        nome: "Guy Crimson",
        img: "https://www.anime-planet.com/images/characters/202886.jpg?t=1628882816",
        atributos: {
            ATAQUE: 9900,
            DEFESA: 3200,
            MAGICKA: 9700,
        }
    },
    {
        nome: "Milim Nava",
        img: "https://cdn.awwni.me/178pm.png",
        atributos: {
            ATAQUE: 3999,
            DEFESA: 6200,
            MAGICKA: 7000,
        }
    },
]

let cartaMaquina;
let cartaJogador;

let cardArea = document.getElementById('cardArea');
let res = document.getElementById('res');

function selecionarCarta() {

    cardArea.innerHTML = '';
    res.style.display = 'none'
    res.innerHTML = ''

    let idCardJogador = parseInt(Math.random() * cartas.length);
    var idCardMaquina = parseInt(Math.random() * cartas.length);
    while (idCardJogador == idCardMaquina) {
        var idCardMaquina = Math.floor(Math.random() * cartas.length);
    }

    cartaJogador = cartas[idCardJogador];
    cartaMaquina = cartas[idCardMaquina];

    colocarCartas(cartaJogador, 'Jogador')

    colocarCartas(cartaMaquina, 'Maquina')
}


function colocarCartas(id, player) {

    cardArea.innerHTML += `
    <div id='${player}' class="card">
    <div id='cardName'>
        <h2>${id.nome}</h2>
    </div>
    <div id='cardIMG'>
        <img src="${id.img}" alt="">
    </div>
    <div id="atributos${player}" class='atributos'>
    </div>
    </div>
    `

    for (let atributo in id.atributos) {
        document.getElementById(`atributos${player}`).innerHTML +=
            `<div id='atr${player}' onclick="play('${atributo}')">
        <p>${atributo}</>
        <h4>${id.atributos[atributo]}</h4>
        </div>`
    }

    setTimeout(() => {
        document.getElementById('sortear').style.display = 'none';
    }, 100);
}

function play(atributo) {
    let jogadorAtributo = cartaJogador.atributos[atributo];
    let maquinaAtributo = cartaMaquina.atributos[atributo];

    document.getElementById('Maquina').style.display = 'block';
    document.getElementById('sortear').innerText = 'JOGAR NOVAMENTE!'
    document.getElementById('sortear').style.display = 'block';

    if (jogadorAtributo > maquinaAtributo) {
        res.innerHTML = 'Você venceu!'

    } else if (jogadorAtributo < maquinaAtributo) {
        res.innerHTML = 'Você perdeu!'
    } else {
        res.innerHTML = 'Empatou :('
    }
    res.style.display = 'block'
}