# Unidad 2 — Definición y Control de Procesos

Los **procesos** son uno de los conceptos fundamentales de los sistemas operativos. Cada vez que ejecutamos una aplicación, abrimos un navegador, reproducimos música o utilizamos un editor de código, el sistema operativo debe administrar los procesos necesarios para realizar estas tareas.

En esta unidad estudiaremos cómo un sistema operativo **crea, controla, planifica y finaliza procesos**, así como la información que necesita almacenar para administrar cada uno de ellos.

---

## Objetivos de la unidad

Al finalizar esta unidad podrás:

- Diferenciar entre un **programa** y un **proceso**.
- Identificar los diferentes **estados de un proceso**.
- Comprender qué es y qué información almacena el **PCB (Process Control Block)**.
- Explicar cómo funciona un **cambio de contexto**.
- Diferenciar entre **procesos e hilos (threads)**.
- Comprender los fundamentos de la **planificación de CPU**.
- Analizar el funcionamiento del algoritmo **Round Robin** y la importancia del **Quantum de tiempo**.

---

## Contenido

### 1. Proceso vs. Programa

Un programa es un conjunto de instrucciones almacenadas, mientras que un proceso representa un programa que se encuentra en ejecución.

[Explorar Proceso vs. Programa →](proceso-programa.md)

### 2. Estados de un Proceso

Durante su ciclo de vida, un proceso puede pasar por diferentes estados: **Nuevo, Listo, Ejecución, Bloqueado/Espera y Terminado**.

[Explorar Estados de un Proceso →](estados-proceso.md)

### 3. Bloque de Control de Proceso (PCB)

El sistema operativo necesita almacenar información sobre cada proceso. Para ello utiliza una estructura conocida como **Process Control Block**.

[Explorar PCB →](pcb.md)

### 4. Transiciones y Control

Estudiaremos cómo el sistema operativo cambia la CPU de un proceso a otro mediante el **Context Switch**, además del costo asociado a esta operación.

[Explorar Transiciones y Control →](transiciones-control.md)

### 5. Procesos y Threads

Aunque procesos e hilos permiten ejecutar tareas, existen diferencias importantes en el uso de memoria, recursos y costo de creación.

[Explorar Procesos y Threads →](procesos-threads.md)

### 6. Planificación de CPU

Conoceremos el algoritmo **Round Robin** y analizaremos cómo el tamaño del **Quantum** afecta el comportamiento y rendimiento del sistema.

[Explorar Planificación de CPU →](planificacion-cpu.md)

---

## Aprender experimentando

Además de los conceptos teóricos, **SO Explorer** incluye un simulador interactivo que permite observar la creación y ejecución de procesos, el consumo y liberación de memoria RAM y el funcionamiento de una cola de espera.

[Abrir simulador de procesos →](../simulador/index.md)