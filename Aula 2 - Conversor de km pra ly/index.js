const res = document.querySelector('#res')

function converter() {
    let inputValue = Number(document.querySelector('#input').value);

    res.innerHTML =
    `
    <div>
    aproximadamente: ${conversorLyToKm(inputValue)} AnosLuz.
    <div>
    `;
}


function conversorLyToKm(km) {
    let anos = 0.00000000000010570;
    return km * anos;
}


