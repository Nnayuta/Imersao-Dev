function calcularMedia() {
  const mediaValue = Number(document.getElementById("mediafinal").value);
  const inputs = document.querySelectorAll(".alunoInfo input");
  const res = document.getElementById("resultado");

  const mediaalta = document.getElementById("mediaalta");
  //Verifica se a media necesaria e maior que 10 caso seja returna que o valor e muito alto
  if (mediaValue > 10) {
    //Mostra a menssagem que a media e muito alta
    mediaalta.style.visibility = "visible";
    setTimeout(function () {
      //tira a menssagem que a media e muito alta depois de 5 segundos
      mediaalta.style.visibility = "hidden";
    }, 5000);
    //Deixa o
    res.style.visibility = "hidden";
    return;
  }

  //Variavel da nota geral que vai receber as somas
  let notaGeral = 0;

  //repete 4 vezes e soma as medias e salva eu uma variavel
  for (let i = 1; i <= 4; i++) {
    notaGeral += Number(inputs[i].value);
  }

  let mediaFinal = notaGeral / 4;
  console.log(mediaFinal);

  /*Verifica se a media e maior ou igual a media necessaria para ser aprovado.
  Caso seja retorna o valor correspondente
  */
  let aproRepro = mediaFinal >= mediaValue ? "Aprovada(o)" : "Reprovada(o)";
  console.log(aproRepro);

  //Adiciona se foi aprovado ou reprovado
  res.innerHTML = `
    <div>
    <h1>Olá <strong> ${inputs[0].value} </strong></h1>
    </div>
    <div>
    Sua media anual é: <strong> ${mediaFinal} </strong>
    </div>
    <div>
    Você foi <strong> ${aproRepro} </strong>
    </div>
    `;

  //Deixa a area de resultado visivel para mostra o resultado
  res.style.visibility = "visible";
}
