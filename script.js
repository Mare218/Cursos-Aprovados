const cursos = [
    {
        id: "0713",
        nombre: "Geología General",
        semestre: 1,
        estado: "pendiente",
        desbloquea: ["0719", "0744"]
    },
    {
        id: "0119",
        nombre: "Química I",
        semestre: 1,
        estado: "pendiente",
        desbloquea: ["0120", "0719"]
    },
    {
        id: "0231",
        nombre: "Social Humanística I",
        semestre: 1,
        estado: "pendiente",
        desbloquea: ["0232"]
    },
    {
        id: "0141",
        nombre: "Dibujo I",
        semestre: 1,
        estado: "pendiente",
        desbloquea: ["0154"]
    },
    {
        id: "0142",
        nombre: "Matemática Básica I",
        semestre: 1,
        estado: "pendiente",
        desbloquea: ["0120", "0143", "0144", "0154"]
    },
    {
        id: "0719",
        nombre: "Mineralogía General",
        semestre: 2,
        estado: "pendiente",
        desbloquea: ["0741", "0742", "0743", "0751"]
    },
    {
        id: "0120",
        nombre: "Química II",
        semestre: 2,
        estado: "pendiente",
        desbloquea: []
    },
    {
        id: "0232",
        nombre: "Social Humanística II",
        semestre: 2,
        estado: "pendiente",
        desbloquea: []
    },
    {
        id: "0143",
        nombre: "Matemática Básica II",
        semestre: 2,
        estado: "pendiente",
        desbloquea: ["0135", "0145"]
    },
    {
        id: "0144",
        nombre: "Física Básica",
        semestre: 2,
        estado: "pendiente",
        desbloquea: ["0135"]
    },
    {
        id: "0154",
        nombre: "Principios de Topografía",
        semestre: 2,
        estado: "pendiente",
        desbloquea: ["0749"]
    },
    {
        id: "0744",
        nombre: "Paleontología",
        semestre: 2,
        estado: "pendiente",
        desbloquea: []
    }
];

// Muestra solo si todos los cursos que lo desbloquean están aprobados
function puedeDesbloquear(idCurso) {
    return cursos.every(curso => {
        if (curso.desbloquea.includes(idCurso)) {
            return curso.estado === "aprobado";
        }
        return true;
    });
}

const mallaDiv = document.getElementById("malla");

function actualizarMalla() {
    mallaDiv.innerHTML = "";

    cursos.forEach(curso => {
        if (curso.estado === "pendiente" && puedeDesbloquear(curso.id)) {
            curso.estado = "en-curso";
        }

        const div = document.createElement("div");
        div.classList.add("curso", curso.estado);
        div.textContent = `${curso.nombre}`;

        if (curso.estado !== "pendiente") {
            div.addEventListener("click", () => {
                if (curso.estado === "en-curso") {
                    curso.estado = "aprobado";
                    actualizarMalla();
                }
            });
        }

        mallaDiv.appendChild(div);
    });
}

actualizarMalla();
