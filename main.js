function aparecer() {
  var nome = document.getElementById("seunome").value;
  document.getElementById("aparecernome").innerHTML = "Seja Bem-Vindo,  " + nome;
}

function distance() {
  var nome = document.getElementById("seunome").value;
  var dist = document.getElementById("distancia");

    window.location.href = "sim.html";


}
var warn = "Por favor, Informe os valores";
function calcvalorsim() {
  var km = document.getElementById('infdist').value;
  var kml = document.getElementById('infkml').value;
  var preco = document.getElementById('precogas').value;

  document.getElementById('comb').innerHTML =  (km/kml) || warn.bold() ;
  document.getElementById('rs').innerHTML =  (km/kml)*preco || warn.bold();

}

function calcvalornao() {
  var warn = "Por favor, Informe o valor";
  var tempoh = document.getElementById('infdisth').value;
  var tempom = document.getElementById('infdistm').value;
  var vm = document.getElementById('vm').value;
  var kml = document.getElementById('kml').value;
  var preco = document.getElementById('precogas').value;

  var minutos = (tempom / 6);
  var distancia = (vm * (tempoh + minutos) / 10);
  var valor = ((preco * ((distancia) / kml)) / 1);


  document.getElementById('dist').innerHTML = distancia || warn.bold();
  document.getElementById('rs').innerHTML =  valor || warn.bold();
}