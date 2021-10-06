let playerTable = document.getElementById('tPlayers');

const playerList = [
    {
        nome: "Gawr Gura",
        src: "https://c.tenor.com/_UwFXxi1hsQAAAAC/hololive-gwar-gura.gif",
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    },
    {
        nome: "Watson Amelia",
        src: "https://i.pinimg.com/originals/32/88/17/32881767305cb53ab913cb49a8187d6d.gif",
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    },
    {
        nome: "Ninomae Ina'nis",
        src: "https://c.tenor.com/6nULzeSD7F4AAAAC/ninomae-inanis-inanis.gif",
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    },
]

function detectHigh(getID) {
    let points = [];
    let highPoint = 0;
    let hightID;

    for (let id in playerList) {
        points.push(playerList[id].pontos);
    }

    for (let i = 0; i <= highPoint; i++) {
        if (points[i] > highPoint) {
            highPoint = points[i];
            hightID = i;

            console.log('for highpoints' + hightID)
        }
    }

    if (hightID == getID) {
        console.log('return ' + hightID)
        return "👑 -"
    } else {
        return ""
    }
}

// ===================== \\

function addPlayer() {

    playerTable.innerHTML = '';

    for (const id in playerList) {

        let high = detectHigh(id);

        playerTable.innerHTML +=
            `<tr id='${id}'>
                <td><img src="${playerList[id].src}" alt="" srcset="" id='profileImg'> ${high} <br/> ${playerList[id].nome}</td>
                <td>${playerList[id].vitorias}</td>
                <td>${playerList[id].empates}</td>
                <td>${playerList[id].derrotas}</td>
                <td>${playerList[id].pontos}</td>
                <td id='tdButtons'> <button onclick="addVitoria(${id})">VITÓRIA</button> <button onclick="addEmpate(${id})">EMPATE</button> <button onclick="addDerrota(${id})">DERROTA</button> </td>
            </tr>`;

    }
}

function pontos(id) {

    let vitoria = playerList[id].vitorias * 3;
    let empate = playerList[id].empates * 1;

    playerList[id].pontos = (vitoria + empate);

    addPlayer()
}

function addVitoria(id) {
    playerList[id].vitorias++;

    pontos(id);
}

function addEmpate(id) {
    playerList[id].empates++;

    pontos(id);
}

function addDerrota(id) {
    playerList[id].derrotas++;

    pontos(id);
}

function addNewPlayer() {
    const name = document.getElementById('name').value;
    const img = document.getElementById('imgUrl').value
    playerList.push({
        nome: name,
        src: img,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    })
    addPlayer();
}

addPlayer();