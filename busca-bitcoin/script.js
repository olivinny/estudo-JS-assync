const bitcoinBrl = document.querySelector("#bitcoinBrl");

function fetchBtc() {
  const btc = fetch("https://www.blockchain.com/ticker");
  btc
    .then((r) => r.json())
    .then((b) => {
      const { buy } = b.BRL;
      bitcoinBrl.innerHTML = ("R$ " + buy).replace(".", ",");
    });
}
fetchBtc();
setInterval(fetchBtc, 30000);
