const doc = fetch("./doc.txt");

doc
  .then((resolucao) => resolucao.text())
  .then((b) => {
    const nome = document.querySelector(".nome");
    nome.innerHTML = b;
    console.log(b);
  });

const cep = fetch("https://viacep.com.br/ws/21031280/json/");

cep
  .then((r) => r.json())
  .then((body) => {
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerHTML = body.logradouro;
    console.log(body);
  });

const bg = fetch("./style.css");

bg.then((r) => r.text()).then((b) => {
  const body = document.querySelector(".body");
  const style = document.createElement("style");
  style.innerHTML = b;

  console.log(b);
  body.appendChild(style);
});
