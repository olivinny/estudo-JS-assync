const campoPiada = document.querySelector("#piada");
const botao = document.querySelector("#novaPiada");

function fetchPiada() {
  const piada = fetch("https://api.chucknorris.io/jokes/random");
  piada
    .then((r) => r.json())
    .then((b) => {
      campoPiada.innerHTML = b.value;
    });
}
fetchPiada();
botao.addEventListener("click", fetchPiada);
