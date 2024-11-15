document.addEventListener("DOMContentLoaded", function () {
  let contador = 0;
  const btnClicar = document.getElementById("btnClicar");
  const spanContador = document.getElementById("contador");

  btnClicar = addEventListener("click", function () {
    contador++;
    spanContador.textContent = contador;
  });
});
