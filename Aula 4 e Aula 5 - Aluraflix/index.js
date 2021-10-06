function getElem(elemid) {
    return document.getElementById(elemid);
}

const listaAnimes = []
function addNewAnime(nome, sinopse, src, linkURL) {
    listaAnimes.push({ nome, sinopse, src, linkURL });
}

const animeDiv = getElem('animes');

let url = './animes.json';

fetch(url)
  .then(response => response.json())
  .then(json => getAnimeListAndOrganize(json))

function getAnimeListAndOrganize(animeList){

    let anime = animeList.isekais

    for (let index = 0; index < anime.length; index++) {
        addNewAnime(anime[`${index}`].nome, anime[`${index}`].sinopse, anime[`${index}`].src, anime[`${index}`].linkURL)
    }
}


const menu = getElem('addAnime');
let openMenu = 0;
function adicionarMenu() {
    if (openMenu == 0) {
        menu.style.display = 'block'
        openMenu = 1;
    } else {
        menu.style.display = 'none'
        openMenu = 0;
    }

}

function addAnime() {
    const formAnime = getElem('formAnime');

    const inputName = getElem('animeNome').value;
    const inputSinopse = getElem('sinopse').value;
    const inputSrc = getElem('src').value;

    const inputAnimeURL = getElem('animeURL').value

    const erroMsg = getElem('erroMsg');

    if (inputSrc.endsWith('.png') || inputSrc.endsWith('.jpg')) {
        addNewAnime(inputName, inputSinopse, inputSrc, inputAnimeURL);
        loadAnimes(listaAnimes.length - 1);
        menu.style.display = 'none'
        openMenu = 0;

    } else {
        console.error('Imagem enviada e invalida!')
        erroMsg.innerHTML = 'Imagem invalida!';
        setTimeout(() => {
            erroMsg.innerHTML = '';
        }, 3000);
    }

    formAnime.reset();
    getElem('loadIMG').src = null;
}

function loadImg() {
    const loadIMG = getElem('loadIMG');
    const inputSrc = getElem('src').value;
    loadIMG.src = inputSrc;
}

function loadAnimes(i) {
    animeDiv.innerHTML +=
        `<a href="${listaAnimes[i].linkURL}" target="_blank">
        <div class='list'>
            <div id='nome'>
                <h1> ${listaAnimes[i].nome} </h1>
             </div>
             <div id='line'> </div>
    
            <div id='img'>
                <img src="${listaAnimes[i].src}">
            </div>
    
            <div id='sinopse'>
                <p> ${listaAnimes[i].sinopse} </p>
            </div>
    
      </div>
      </a>`;
}

setTimeout(() => {
    
for (let i = 0; i < listaAnimes.length; i++) { loadAnimes(i) };
    
}, 100);