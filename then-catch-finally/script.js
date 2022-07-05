const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "Vinicius", idade: 28 });
    }, 1000);
  } else {
    reject(Error("Um erro ocorreu na promise"));
  }
});

console.log(promessa);
const retorno = promessa
  .then((resolucao) => {
    console.log(resolucao);
    resolucao.profissao = "Programador";
    return resolucao;
  })
  .then(
    (resolucao) => {
      console.log(resolucao);
    } /*,(rejeitada) => {
    console.log(rejeitada);
  }*/
  )
  .catch((rejeitada) => {
    console.log(rejeitada);
  })
  .finally(() => {
    console.log("Acabou");
  });
