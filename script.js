const semestres = {
  1: [
    { id: "0713", nombre: "Geología General", estado: "pendiente", desbloquea: ["0719", "0744"] },
    { id: "0119", nombre: "Química I", estado: "pendiente", desbloquea: ["0120", "0719"] },
    { id: "0231", nombre: "Social Humanística I", estado: "pendiente", desbloquea: ["0232"] },
    { id: "0141", nombre: "Dibujo I", estado: "pendiente", desbloquea: ["0154"] },
    { id: "0142", nombre: "Matemática Básica I", estado: "pendiente", desbloquea: ["0120", "0143", "0144", "0154"] },
  ],
  2: [
    { id: "0719", nombre: "Mineralogía General", estado: "pendiente", desbloquea: ["0741", "0742", "0743", "0751"] },
    { id: "0120", nombre: "Química II", estado: "pendiente", desbloquea: [] },
    { id: "0232", nombre: "Social Humanística II", estado: "pendiente", desbloquea: [] },
    { id: "0143", nombre: "Matemática Básica II", estado: "pendiente", desbloquea: ["0135", "0145"] },
    { id: "0144", nombre: "Física Básica", estado: "pendiente", desbloquea: ["0135"] },
    { id: "0154", nombre: "Principios de Topografía", estado: "pendiente", desbloquea: ["0749"] },
    { id: "0744", nombre: "Paleontología", estado: "pendiente", desbloquea: [] },
  ],
};

function puedeDesbloquear(idCurso) {
  return Object.values(semestres).flat().every(curso => {
    if (curso.desbloquea.includes(idCurso)) {
      return curso.estado === "aprobado";
    }
    return true;
  });
}

function actualizarMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  Object.entries(semestres).forEach(([numero, cursos]) => {
    const bloque = document.createElement("div");
    bloque.classList.add("semestre");

    const todosAprobados = cursos.every(c => c.estado === "aprobado");
    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${numero}`;
    if (todosAprobados) {
      titulo.style.textDecoration = "line-through";
    }

    const grid = document.createElement("div");
    grid.classList.add("grid-semestre");

    cursos.forEach(curso => {
      if (curso.estado === "pendiente" && puedeDesbloquear(curso.id)) {
        curso.estado = "en-curso";
      }

      const div = document.createElement("div");
      div.classList.add("curso", curso.estado);
      div.textContent = (curso.estado === "aprobado" ? "✖ " : "") + curso.nombre;

      if (curso.estado === "en-curso") {
        div.addEventListener("click", () => {
          curso.estado = "aprobado";
          actualizarMalla();
        });
      }

      grid.appendChild(div);
    });

    bloque.appendChild(titulo);
    bloque.appendChild(grid);
    contenedor.appendChild(bloque);
  });
}

actualizarMalla();
