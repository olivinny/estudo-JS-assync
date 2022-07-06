const botao = document.querySelector("#enviar");
const campoCep = document.querySelector("#cep");

const campoLogradouro = document.querySelector("#logradouro");
const campoBairro = document.querySelector("#bairro");
const campoLocalidade = document.querySelector("#cidade");
const campoUf = document.querySelector("#estado");

function rodar(e) {
  e.preventDefault();
  const cep = campoCep.value;
  const urlCep = fetch(`https://viacep.com.br/ws/${cep}/json/`);
  urlCep
    .then((e) => e.json())
    .then((b) => {
      const { logradouro, bairro, localidade, uf } = b;
      campoLogradouro.innerHTML = logradouro;
      campoBairro.innerHTML = bairro;
      campoLocalidade.innerHTML = localidade;
      campoUf.innerHTML = uf;
    });
}
botao.addEventListener("click", rodar);
campoCep.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    rodar(e);
  }
});
