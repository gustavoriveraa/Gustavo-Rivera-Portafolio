document.addEventListener("DOMContentLoaded", () => {
  // Fila 1
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
document.querySelector("#c1 .action-btn").addEventListener("click", () => {
  c2.classList.toggle("hidden");
  c3.classList.toggle("hidden");
});

  // Fila 2

  const c4 = document.getElementById("c4");
  const c6 = document.getElementById("c6");
  document.querySelector("#c5 .action-btn").addEventListener("click", () => {
    c4.classList.toggle("hidden");
    c6.classList.toggle("hidden");
  });


  // Fila 3

  const c7 = document.getElementById("c7");
  const c8 = document.getElementById("c8");
  document.querySelector("#c9 .action-btn").addEventListener("click", () => {
    c7.classList.toggle("hidden");
    c8.classList.toggle("hidden");
  });

 
  // Fila 4

  const c11 = document.getElementById("c11");
  const c12 = document.getElementById("c12");
  document.querySelector("#c10 .action-btn").addEventListener("click", () => {
    c11.classList.toggle("hidden");
    c12.classList.toggle("hidden");
  });


  // Fila 5 
 
  const c14 = document.getElementById("c14");
  const c15 = document.getElementById("c15");
  document.querySelector("#c13 .action-btn").addEventListener("click", () => {
    c14.classList.toggle("hidden");
    c15.classList.toggle("hidden");
  });


  // Cuadro independiente

  const independent = document.querySelector("#ind1");
  if (independent.querySelector(".action-btn")) {
    independent.querySelector(".action-btn").addEventListener("click", () => {
      alert("¡Acción del cuadro independiente!");
    });
  }
});
