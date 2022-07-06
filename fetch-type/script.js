const cep = fetch("https://viacep.com.br/ws/21031280/json/");

const doc = fetch("./doc.txt");

cep.then((r) => {
  console.log("cep " + r.type);
});

doc.then((r) => {
  console.log("doc " + r.type);
});
