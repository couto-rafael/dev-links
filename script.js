function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light");
  // } else {
  //   html.classList.add("light");
  // }

  // TUDO ISSO ACIMA É O MESMO O TOGGLE

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }

  // pegar a tam img e substituir a imagem
  // se tiver light mode, adicionar a imagem light
  // se tiver sem light mode, deixar imagem normal
}
