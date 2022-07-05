const sobre = fetch("./sobre.html");

const div = document.createElement("div");

sobre
  .then((r) => r.text())
  .then((b) => {
    div.innerHTML = b;
    const titulo = div.querySelector("h1");
    document.querySelector("h1").innerHTML = titulo.innerHTML;
    const paragrafo = div.querySelector("p");
    document.querySelector("p").innerHTML = paragrafo.innerHTML;
    console.log(b);
  });
