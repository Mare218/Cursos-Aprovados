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
  3: [
    { id: "0741", nombre: "Mineralogía Óptica", estado: "pendiente", desbloquea: ["0746"] },
    { id: "0135", nombre: "Física I", estado: "pendiente", desbloquea: ["0140", "0751", "0753"] },
    { id: "0145", nombre: "Matemática Intermedia I", estado: "pendiente", desbloquea: ["0140", "0115", "0753"] },
    { id: "0742", nombre: "Petrología de Rocas Ígneas", estado: "pendiente", desbloquea: ["0746", "0749", "0745"] },
    { id: "0743", nombre: "Petrología de Rocas Sedimentarias", estado: "pendiente", desbloquea: ["0746", "0749", "0745", "0752"] },
    { id: "0744", nombre: "Paleontología", estado: "pendiente", desbloquea: ["0747", "0752"] }
  ],
  4: [
    { id: "0140", nombre: "Física II", estado: "pendiente", desbloquea: [] },
    { id: "0746", nombre: "Petrografía de Rocas Metamórficas", estado: "pendiente", desbloquea: ["0726", "1006", "0750"] },
    { id: "0747", nombre: "Paleobotánica", estado: "pendiente", desbloquea: [] },
    { id: "0751", nombre: "Estructuras Geológicas", estado: "pendiente", desbloquea: ["0726", "1006", "0750"] },
    { id: "0749", nombre: "Topografía Geológica", estado: "pendiente", desbloquea: ["0726", "1006", "0750"] },
    { id: "0745", nombre: "Sedimentología", estado: "pendiente", desbloquea: ["0726", "0716"] }
  ],
  5: [
    { id: "0752", nombre: "Micropaleontología", estado: "pendiente", desbloquea: ["0739", "1018", "1017", "1019", "0736", "0754", "1013", "0220"] },
    { id: "0726", nombre: "Geología de Campo I", estado: "pendiente", desbloquea: ["0739", "1018", "1017", "1019", "0736", "0754", "1013", "0220"] },
    { id: "1006", nombre: "Fotogeología", estado: "pendiente", desbloquea: ["0739", "1018", "1017", "1019", "0736", "0754", "1013", "0220"] },
    { id: "0716", nombre: "Estratigrafía", estado: "pendiente", desbloquea: ["0739", "1018", "1017", "1019", "0736", "0754", "1013", "0220"] },
    { id: "0750", nombre: "Geomorfología", estado: "pendiente", desbloquea: ["0739", "1018", "1017", "1019", "0736", "0754", "1013", "0220"] },
    { id: "TFC", nombre: "TFC Propedéutico", estado: "pendiente", desbloquea: ["0739", "1018", "1017", "1019", "0736", "0754", "1013", "0220"] }
  ],
  6: [
    { id: "0115", nombre: "Estadística", estado: "pendiente", desbloquea: ["1018", "1017", "1019", "0736", "0754", "1013", "0220"] },
    { id: "0753", nombre: "Mecánica de Fluidos", estado: "pendiente", desbloquea: ["1018", "1017", "1019", "0736", "0754", "1013", "0220"] },
    { id: "0739", nombre: "Trabajo Final de Campo", estado: "pendiente", desbloquea: ["1018", "1017", "1019", "0736", "0754", "1013", "0220"] }
  ],
  7: [
    { id: "1018", nombre: "Geoquímica", estado: "pendiente", desbloquea: ["1005", "0316"] },
    { id: "1017", nombre: "Geología Histórica", estado: "pendiente", desbloquea: ["1008", "0316"] },
    { id: "1019", nombre: "Introducción a la Geofísica", estado: "pendiente", desbloquea: ["1012", "1009", "1005", "0316"] },
    { id: "0736", nombre: "Yacimientos Minerales no Metálicos", estado: "pendiente", desbloquea: ["0733", "0316"] },
    { id: "0754", nombre: "Geotectónica", estado: "pendiente", desbloquea: ["1008", "1005", "0316"] },
    { id: "1013", nombre: "Pedología", estado: "pendiente", desbloquea: ["1009", "1010", "0316"] },
  ],
  8: [
    { id: "1012", nombre: "Geofísica Aplicada", estado: "pendiente", desbloquea: ["1011", "1015", "1020", "1010", "0316"] },
    { id: "1008", nombre: "Geología de Guatemala", estado: "pendiente", desbloquea: ["1011", "1020", "1014", "0316"] },
    { id: "1009", nombre: "Geohidrología", estado: "pendiente", desbloquea: ["1020", "1010", "0316"] },
    { id: "0220", nombre: "Principios de Administración", estado: "pendiente", desbloquea: ["0227", "0316"] },
    { id: "1005", nombre: "Vulcanología", estado: "pendiente", desbloquea: ["1015", "1020", "0316"] },
    { id: "0733", nombre: "Yacimientos Minerales Metálicos", estado: "pendiente", desbloquea: ["1020", "1007", "0316"] },
  ],
  9: [
    { id: "1011", nombre: "Geología del Petróleo", estado: "pendiente", desbloquea: ["1022", "0227", "1024", "1025", "1026", "1027", "1028", "1029"] },
    { id: "0227", nombre: "Economía General", estado: "pendiente", desbloquea: ["0233", "0224", "1022", "1024", "1025", "1026", "1027", "1028", "1029"] },
    { id: "1015", nombre: "Geotermia", estado: "pendiente", desbloquea: ["1022", "0227", "1024", "1025", "1026", "1027", "1028", "1029"] },
    { id: "1020", nombre: "Campo Combinado", estado: "pendiente", desbloquea: ["1022", "0227", "1024", "1025", "1026", "1027", "1028", "1029"] },
    { id: "1010", nombre: "Geotecnia", estado: "pendiente", desbloquea: ["1022", "0227", "1024", "1025", "1026", "1027", "1028", "1029"] },
    { id: "1007", nombre: "Prospección Minera", estado: "pendiente", desbloquea: ["1022", "0227", "1024", "1025", "1026", "1027", "1028", "1029"] },
  ],
  10: [
    { id: "0233", nombre: "Preparación y Evaluación de Proyectos", estado: "pendiente", desbloquea: ["1022", "0227", "1024", "1025", "1026", "1027", "1028", "1029"] },
    { id: "0224", nombre: "Geografía Económica de Guatemala", estado: "pendiente", desbloquea: ["1022", "0227", "1024", "1025", "1026", "1027", "1028", "1029"] },
    { id: "1014", nombre: "Legislación Minera y Petrolera", estado: "pendiente", desbloquea: ["1022", "0227", "1024", "1025", "1026", "1027", "1028", "1029"] },
    { id: "0316", nombre: "Campaña Geológica", estado: "pendiente", desbloquea: ["1022", "0227", "1024", "1025", "1026", "1027", "1028", "1029"] },
  ],
  11: [
    { id: "1022", nombre: "EPS", estado: "pendiente", desbloquea: [] },
    { id: "0227", nombre: "Trabajo de Investigación o tesis", estado: "pendiente", desbloquea: [] },
    { id: "1024", nombre: "Estudio Técnico Específico", estado: "pendiente", desbloquea: [] },
    { id: "1025", nombre: "Monografía", estado: "pendiente", desbloquea: [] },
    { id: "1026", nombre: "Diagnóstico", estado: "pendiente", desbloquea: [] },
    { id: "1027", nombre: "Sistematización de Experiencias", estado: "pendiente", desbloquea: [] },
    { id: "1028", nombre: "Ensayo", estado: "pendiente", desbloquea: [] },
    { id: "1029", nombre: "Informe Final EPS", estado: "pendiente", desbloquea: [] },
  ]
};

function puedeDesbloquear(idCurso) {
  // Un curso puede desbloquearse solo si todos los cursos que lo desbloquean están aprobados
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
titulo.textContent = semestre;
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
          guardarEstados();
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

function guardarEstados() {
  const estados = {};
  Object.values(semestres).flat().forEach(curso => {
    estados[curso.id] = curso.estado;
  });
  localStorage.setItem("estadosCursos", JSON.stringify(estados));
}

function cargarEstados() {
  const estados = JSON.parse(localStorage.getItem("estadosCursos"));
  if (!estados) return;
  Object.values(semestres).flat().forEach(curso => {
    if (estados[curso.id]) {
      curso.estado = estados[curso.id];
    }
  });
}

cargarEstados();
actualizarMalla();
