const res = document.getElementById('res');
const converterDe = document.getElementById('converterDe');
const para = document.getElementById('para');


function converter() {
    let valueToConvert = Number(document.getElementById('valueToConvert').value);
    let convert = `${converterDe.value}TO${para.value}`;

    switch (convert) {
        case 'celsiusTOkelvin':
            escreverNaTela(celsiusTOkelvin(valueToConvert), 'K')
            break
        case 'celsiusTOfahrenheit':
            escreverNaTela(celsiusTOfahrenheit(valueToConvert), '°F')
            break
        case 'fahrenheitTOkelvin':
            escreverNaTela(fahrenheitTOkelvin(valueToConvert).toFixed(2), 'K')
            break
        case 'fahrenheitTOcelsius':
            escreverNaTela(fahrenheitTOcelsius(valueToConvert).toFixed(2), '°C')
            break
        case 'kelvinTOcelsius':
            escreverNaTela(kelvinTOcelsius(valueToConvert), '°C')
            break
        case 'kelvinTOfahrenheit':
            escreverNaTela(kelvinTOfahrenheit(valueToConvert), '°F')
            break
        default:
            escreverNaTela(`Imposivel converter de ${converterDe.value} para ${para.value}`, ``)
    }
}

function escreverNaTela(result, temp) {
    res.innerHTML = `
    <div>
    <strong>${result}</strong> ${temp}
    </div>
    `
    res.style.visibility = 'visible'
}

function setOption() {
    //verificações basicas
    if (converterDe.value == 'celsius' && para.value == 'celsius') {
        para.value = 'fahrenheit';
    } else if (converterDe.value == 'fahrenheit' && para.value == 'fahrenheit') {
        para.value = 'kelvin';
    } else if (converterDe.value == 'kelvin' && para.value == 'kelvin') {
        para.value = 'celsius';
    } else {
        converter()
    }
}

//celsius

function celsiusTOkelvin(ceusious) {
    return ceusious + 273.15;
}

function celsiusTOfahrenheit(ceusious) {
    return (ceusious * 9 / 5) + 32;
}

// Fahrenheit

function fahrenheitTOkelvin(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9 + 273.15;
}

function fahrenheitTOcelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Kelvin

function kelvinTOcelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinTOfahrenheit(kelvin) {
    return (kelvin - 273.15) * 5 / 9 + 32;
}

setOption();