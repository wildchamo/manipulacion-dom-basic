console.log("Hola mundo");

const h1 = document.querySelector("h1");

h1.innerText = "Hola, Jose <br> Hermoso";

// console.log(h1.getAttribute("class"));
//innerHtml e innerText
h1.setAttribute("class", "rojo");

h1.classList.add("amarillo")
h1.classList.remove("rojo")
// h1.textContent="Hola, Jose"
//toggle y contains

const input = document.querySelector("input");
input.value = "Hola, Jose";

const img = document.createElement('img');
img.setAttribute("src", "https://picsum.photos/200/300");

console.log(img);

parrafito= document.getElementById("parrafito");
parrafito.innerText=""
parrafito.append(img) ;