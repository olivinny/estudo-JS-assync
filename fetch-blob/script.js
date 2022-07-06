const foto = fetch("./Perfil.webp");

foto
  .then((r) => r.blob())
  .then((b) => {
    const blobUrl = URL.createObjectURL(b);
    const imagemDom = document.querySelector("img");
    imagemDom.src = blobUrl;
  });
