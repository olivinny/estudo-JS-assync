const cep = fetch("https://viacep.com.br/ws/21031280/json/");

cep
  .then((r) => {
    const r2 = r.clone();
    r2.text().then((text) => {
      console.log(text);
    });
    return r.json();
  })
  .then((body) => {
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerHTML = body.logradouro;
    console.log(body);
  });
