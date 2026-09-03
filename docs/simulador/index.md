#  Simulador de Gestión de Procesos

Este simulador permite visualizar cómo un sistema operativo administra procesos cuando dispone de una cantidad limitada de memoria RAM.

<div class="simulador-so">

  <div class="panel-simulador">

    <h2>Crear proceso</h2>

    <div class="form-proceso">

      <label>
        Nombre del proceso
        <input id="nombreProceso" type="text" placeholder="Ej. Navegador">
      </label>

      <label>
        Memoria requerida (MB)
        <input id="memoriaProceso" type="number" min="1" max="1024" placeholder="Ej. 256">
      </label>

      <label>
        Duración (segundos)
        <input id="duracionProceso" type="number" min="1" placeholder="Ej. 10">
      </label>

      <button id="btnCrearProceso" class="boton-so">
        + Crear proceso
      </button>

    </div>

  </div>

<div class="panel-simulador">

  <h2> Memoria RAM</h2>

  <div class="memoria-info">
    <span>Memoria utilizada</span>
    <strong id="textoMemoria">0 / 1024 MB</strong>
  </div>

  <div class="barra-memoria">
    <div id="memoriaUsada" class="memoria-usada"></div>
  </div>

  <p id="memoriaDisponible">
    Disponible: 1024 MB
  </p>

  <hr>

  <h3> Procesos en ejecución</h3>

  <div class="tabla-simulador">

    <table>
      <thead>
        <tr>
          <th>PID</th>
          <th>Nombre</th>
          <th>Memoria</th>
          <th>Tiempo</th>
          <th>Estado</th>
        </tr>
      </thead>

      <tbody id="tablaEjecucion">

        <tr id="sinProcesos">
          <td colspan="5">
            No hay procesos ejecutándose.
          </td>
        </tr>

      </tbody>
    </table>

  </div>

</div>
<div class="seccion-simulador">

<h2> Cola de espera</h2>

<div class="tabla-simulador">

<table>
<thead>
<tr>
<th>PID</th>
<th>Nombre</th>
<th>Memoria</th>
<th>Duración</th>
<th>Estado</th>
</tr>
</thead>

<tbody id="tablaEspera">

<tr id="sinEspera">
<td colspan="5">La cola de espera está vacía.</td>
</tr>

</tbody>
</table>

</div>
</div>
<div class="seccion-simulador">

<h2>📋 Registro del sistema</h2>

<div id="registroSimulador" class="registro-simulador">

Sistema iniciado — RAM disponible: 1024 MB

</div>
</div>