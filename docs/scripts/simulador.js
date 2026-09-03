
console.log("✅ Simulador.js cargado correctamente");
// ==========================================
// SO EXPLORER - SIMULADOR DE PROCESOS
// ==========================================

// Memoria RAM total del sistema
const MEMORIA_TOTAL = 1024;

// Memoria utilizada actualmente
let memoriaUsada = 0;

// Contador para generar PID únicos
let siguientePID = 1;

// Lista de procesos que se están ejecutando
let procesosEjecucion = [];

// Lista de procesos esperando memoria
let colaEspera = [];


// ==========================================
// CREAR UN NUEVO PROCESO
// ==========================================

function crearProceso() {

    // Obtener los datos ingresados por el usuario
    const nombre = document.getElementById("nombreProceso").value.trim();
    const memoria = parseInt(
        document.getElementById("memoriaProceso").value
    );
    const duracion = parseInt(
        document.getElementById("duracionProceso").value
    );

    // Validar los datos
    if (nombre === "" || isNaN(memoria) || isNaN(duracion)) {
        alert("Por favor completa todos los campos.");
        return;
    }

    if (memoria <= 0 || duracion <= 0) {
        alert("La memoria y la duración deben ser mayores que 0.");
        return;
    }

    if (memoria > MEMORIA_TOTAL) {
        alert("El proceso solicita más memoria que la RAM total.");
        return;
    }

    // Crear el objeto proceso
    const proceso = {
        pid: siguientePID,
        nombre: nombre,
        memoria: memoria,
        duracion: duracion,
        tiempoRestante: duracion,
        estado: "Nuevo"
    };

    // Preparar el PID para el siguiente proceso
    siguientePID++;

    // Intentar ejecutar el proceso
    intentarEjecutar(proceso);

    // Limpiar formulario
    limpiarFormulario();
}


// ==========================================
// INTENTAR EJECUTAR EL PROCESO
// ==========================================

function intentarEjecutar(proceso) {

    const memoriaDisponible = MEMORIA_TOTAL - memoriaUsada;

    // Si hay suficiente RAM
    if (proceso.memoria <= memoriaDisponible) {

        proceso.estado = "Ejecutando";

        memoriaUsada += proceso.memoria;

        procesosEjecucion.push(proceso);

        agregarRegistro(
            `PID ${proceso.pid} (${proceso.nombre}) inició su ejecución.`
        );

    } else {

        // Si no hay suficiente RAM, pasa a espera
        proceso.estado = "En espera";

        colaEspera.push(proceso);

        agregarRegistro(
            `PID ${proceso.pid} (${proceso.nombre}) pasó a la cola de espera.`
        );
    }

    actualizarInterfaz();
}


// ==========================================
// LIMPIAR FORMULARIO
// ==========================================

function limpiarFormulario() {

    document.getElementById("nombreProceso").value = "";
    document.getElementById("memoriaProceso").value = "";
    document.getElementById("duracionProceso").value = "";
}


// ==========================================
// REGISTRO DEL SISTEMA
// ==========================================

function agregarRegistro(mensaje) {

    const registro = document.getElementById("registroSimulador");

    const hora = new Date().toLocaleTimeString();

    registro.innerHTML += `<br>[${hora}] ${mensaje}`;

    registro.scrollTop = registro.scrollHeight;
}
// ==========================================
// ACTUALIZAR INTERFAZ
// ==========================================

function actualizarInterfaz() {

    // ----- Memoria RAM -----

    const porcentaje = (memoriaUsada / MEMORIA_TOTAL) * 100;

    document.getElementById("textoMemoria").textContent =
        `${memoriaUsada} / ${MEMORIA_TOTAL} MB`;

    document.getElementById("memoriaDisponible").textContent =
        `Disponible: ${MEMORIA_TOTAL - memoriaUsada} MB`;

    document.getElementById("memoriaUsada").style.width =
        `${porcentaje}%`;


    // ----- Procesos en ejecución -----

    const tablaEjecucion =
        document.getElementById("tablaEjecucion");

    tablaEjecucion.innerHTML = "";

    if (procesosEjecucion.length === 0) {

        tablaEjecucion.innerHTML = `
            <tr>
                <td colspan="5">
                    No hay procesos ejecutándose.
                </td>
            </tr>
        `;

    } else {

        procesosEjecucion.forEach(proceso => {

            tablaEjecucion.innerHTML += `
                <tr>
                    <td>${proceso.pid}</td>
                    <td>${proceso.nombre}</td>
                    <td>${proceso.memoria} MB</td>
                    <td>${proceso.tiempoRestante} s</td>
                    <td>🟢 ${proceso.estado}</td>
                </tr>
            `;
        });
    }


    // ----- Cola de espera -----

    const tablaEspera =
        document.getElementById("tablaEspera");

    tablaEspera.innerHTML = "";

    if (colaEspera.length === 0) {

        tablaEspera.innerHTML = `
            <tr>
                <td colspan="5">
                    La cola de espera está vacía.
                </td>
            </tr>
        `;

    } else {

        colaEspera.forEach(proceso => {

            tablaEspera.innerHTML += `
                <tr>
                    <td>${proceso.pid}</td>
                    <td>${proceso.nombre}</td>
                    <td>${proceso.memoria} MB</td>
                    <td>${proceso.duracion} s</td>
                    <td>🟡 ${proceso.estado}</td>
                </tr>
            `;
        });
    }
}
// ==========================================
// FINALIZAR PROCESO
// ==========================================

function finalizarProceso(proceso) {

    // Liberar la memoria utilizada por el proceso
    memoriaUsada -= proceso.memoria;

    // Eliminarlo de la lista de procesos en ejecución
    procesosEjecucion = procesosEjecucion.filter(
        p => p.pid !== proceso.pid
    );

    proceso.estado = "Finalizado";

    agregarRegistro(
        `PID ${proceso.pid} (${proceso.nombre}) finalizó y liberó ${proceso.memoria} MB de RAM.`
    );

    // Revisar si algún proceso en espera puede entrar
    revisarColaEspera();

    actualizarInterfaz();
}


// ==========================================
// REVISAR COLA DE ESPERA
// ==========================================

function revisarColaEspera() {

    let procesoIngresado = true;

    while (procesoIngresado) {

        procesoIngresado = false;

        for (let i = 0; i < colaEspera.length; i++) {

            const proceso = colaEspera[i];

            const memoriaDisponible =
                MEMORIA_TOTAL - memoriaUsada;

            if (proceso.memoria <= memoriaDisponible) {

                // Sacarlo de la cola
                colaEspera.splice(i, 1);

                // Cambiar su estado
                proceso.estado = "Ejecutando";

                // Reservar memoria
                memoriaUsada += proceso.memoria;

                // Agregarlo a ejecución
                procesosEjecucion.push(proceso);

                agregarRegistro(
                    `PID ${proceso.pid} (${proceso.nombre}) salió de la cola e inició su ejecución.`
                );

                procesoIngresado = true;

                break;
            }
        }
    }
}

// ==========================================
// RELOJ DEL SIMULADOR
// ==========================================

setInterval(function () {

    // Crear una copia para evitar problemas
    // si eliminamos procesos durante el recorrido
    const procesosActuales = [...procesosEjecucion];

    procesosActuales.forEach(proceso => {

        proceso.tiempoRestante--;

        if (proceso.tiempoRestante <= 0) {
            finalizarProceso(proceso);
        }

    });

    actualizarInterfaz();

}, 1000);

// ==========================================
// CONECTAR BOTÓN CON EL SIMULADOR
// ==========================================

document.addEventListener("click", function(event) {

    if (event.target.id === "btnCrearProceso") {
        crearProceso();
    }

});