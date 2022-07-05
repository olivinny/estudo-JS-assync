const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário Logado");
  }, 1000);
});
const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 1000);
});

const carregouTudo = Promise.all([login, dados]);
const carregouRace = Promise.race([login, dados]);
console.log(carregouTudo);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});
carregouRace.then((resolucao) => {
  console.log(resolucao);
});
