const cep = fetch("https://viacep.com.br/ws/21031280/json/");

cep.then((r) => {
  console.log(r);
  r.headers.forEach(console.log);
});
