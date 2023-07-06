const valor1 = document.getElementById("calculo1");
const valor2 = document.getElementById("calculo2");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");
const form = document.getElementById("formulario");

form.addEventListener("submit", sumarValues);

function sumarValues(e) {
  console.log(e);
  e.preventDefault();
  resultado.innerText =
    "Resultado de la suma: " + (Number(valor1.value) + Number(valor2.value));
}
