# 🧩 Bloque de Control de Proceso (PCB)

Para poder administrar varios procesos al mismo tiempo, el sistema operativo necesita llevar un registro de cada uno. No basta con saber que un proceso existe; también necesita conocer **qué proceso es, en qué estado se encuentra, qué estaba haciendo y qué recursos está utilizando**.

Toda esta información se almacena en una estructura conocida como **PCB (Process Control Block)** o **Bloque de Control de Proceso**.

!!! note
     Podemos imaginar el PCB como la **ficha de identificación de un proceso**. Cada proceso tiene la suya y el sistema operativo la utiliza para saber cómo administrarlo.

---

##  ¿Para qué sirve el PCB?

El PCB permite que el sistema operativo mantenga organizada toda la información necesaria para controlar un proceso durante su ciclo de vida.

Gracias a esta estructura, el sistema puede realizar tareas como:

- Identificar cada proceso.
- Conocer su estado actual.
- Guardar información sobre su ejecución.
- Administrar la memoria que utiliza.
- Llevar un registro de sus archivos y recursos.
- Detener temporalmente un proceso y continuar su ejecución después.

!!! info "Algo importante"
    Cada proceso tiene su propio **PCB**. Si existen varios procesos activos en el sistema, el sistema operativo debe mantener la información correspondiente a cada uno de ellos.

---

##  ¿Qué información guarda un PCB?

Aunque su estructura puede variar dependiendo del sistema operativo, existen varios datos que normalmente forman parte del PCB.

###  PID — Identificador del proceso

El **PID (Process ID)** es un número que permite identificar de manera única a un proceso.

Podemos verlo como el número de identificación que utiliza el sistema operativo para distinguir un proceso de los demás.

Por ejemplo:

| PID | Proceso |
|---:|---|
| 101 | Navegador |
| 102 | Editor de texto |
| 103 | Reproductor de música |

Aunque dos procesos pertenezcan al mismo programa, pueden tener **PID diferentes**.

!!! tip "Relación con SO Explorer"
    Nuestro simulador genera automáticamente un PID cada vez que creamos un proceso. Esto representa una de las piezas de información que un sistema operativo real mantendría asociada al proceso.

---

###  Registros del procesador

Los **registros de la CPU** almacenan temporalmente información que el procesador está utilizando mientras ejecuta instrucciones.

Cuando un proceso deja de utilizar la CPU temporalmente, el sistema operativo necesita guardar ciertos valores de estos registros para poder continuar posteriormente desde donde se quedó.

En otras palabras, permiten conservar parte del **contexto de ejecución** del proceso.

---

###  Contador de programa

El **contador de programa**, también conocido como **Program Counter (PC)**, indica la ubicación de la próxima instrucción que debe ejecutar el procesador para ese proceso.

Podemos imaginarlo como un marcador:

> 📖 Si dejamos de leer un libro, necesitamos recordar en qué página nos quedamos. El contador de programa cumple una función parecida durante la ejecución de un proceso.

Cuando el proceso vuelve a obtener la CPU, esta información ayuda a continuar su ejecución en el punto correspondiente.

---

###  Información y punteros de memoria

Un proceso necesita memoria para almacenar sus instrucciones y datos mientras se encuentra en ejecución.

Por eso, el PCB puede mantener información relacionada con la memoria asignada al proceso, dependiendo de la forma en que el sistema operativo administre la memoria.

Esta información ayuda al sistema a saber **qué partes de la memoria corresponden a cada proceso** y a mantener separados sus espacios de ejecución.

---

###  Archivos abiertos

Durante su ejecución, un proceso puede utilizar archivos.

Por ejemplo, un editor de texto puede tener abierto el documento que estamos modificando. El sistema operativo necesita mantener información relacionada con estos recursos para poder administrarlos correctamente.

El PCB puede contener referencias a los **archivos abiertos y otros recursos asociados al proceso**.

---

##  Podemos visualizar un PCB así

```text
┌─────────────────────────────────┐
│       PCB DEL PROCESO           │
├─────────────────────────────────┤
│ PID                             │
│ Estado del proceso              │
│ Contador de programa            │
│ Registros de CPU                │
│ Información de memoria          │
│ Archivos abiertos               │
│ Información de planificación    │
└─────────────────────────────────┘
```

Cada vez que el sistema operativo necesita consultar o actualizar información de un proceso, puede utilizar los datos almacenados en esta estructura.

---

##  Ejemplo sencillo

Supongamos que tenemos un proceso correspondiente a un navegador.

Su información podría representarse de manera simplificada así:

| Campo | Valor de ejemplo |
|---|---|
| **PID** | 25 |
| **Proceso** | Navegador |
| **Estado** | Ejecutando |
| **Memoria asignada** | 300 MB |
| **Contador de programa** | Próxima instrucción a ejecutar |
| **Registros** | Valores actuales de la CPU |
| **Archivos abiertos** | Recursos utilizados por el navegador |

!!! note "Ojo"
    Esta tabla es una representación simplificada para comprender el concepto. Un PCB real puede contener mucha más información y su estructura depende del sistema operativo.

---

## ¿Qué tiene que ver el PCB con el cambio de contexto?

Aquí es donde el PCB se vuelve especialmente importante.

Imaginemos que la CPU está ejecutando el **Proceso A**, pero el sistema operativo decide darle un turno al **Proceso B**.

Antes de hacer el cambio, necesita guardar la información necesaria del Proceso A para poder retomarlo después.

De forma simplificada:

```text
Proceso A ejecutándose
        ↓
El SO guarda su contexto
        ↓
Información asociada al PCB de A
        ↓
El SO recupera el contexto de B
        ↓
Proceso B comienza o continúa
```

Gracias a esto, cuando el Proceso A vuelva a recibir tiempo de CPU, podrá continuar su ejecución sin tener que comenzar desde cero.

!!! tip "Una forma de recordarlo"
    El **PCB guarda información del proceso** y esa información resulta fundamental cuando el sistema operativo necesita detener temporalmente un proceso y continuar con otro.

En el siguiente tema veremos este procedimiento con más detalle mediante el **Context Switch o cambio de contexto**.

---

##  PCB y nuestro simulador

Nuestro simulador no implementa un PCB completo como el de un sistema operativo real, pero cada proceso que creamos sí posee varios datos que nos ayudan a representar parte del concepto:

```text
PID
Nombre
Memoria
Duración
Tiempo restante
Estado
```

Por ejemplo:

```text
PID: 1
Nombre: Chrome
Memoria: 300 MB
Tiempo restante: 8 s
Estado: Ejecutando
```

Podemos considerar estos datos como una **representación simplificada de la información de control** que mantenemos sobre cada proceso.

!!! warning "Importante"
    SO Explorer simplifica el funcionamiento de un sistema operativo con fines educativos. Los objetos utilizados por nuestro simulador **no son PCB reales**, aunque nos permiten relacionar la simulación con algunos de los datos que un sistema operativo necesita controlar.

---

##  En resumen

El **PCB** es una estructura que utiliza el sistema operativo para mantener la información necesaria para administrar cada proceso.

Entre sus datos más importantes encontramos:

- 🆔 **PID:** identifica el proceso.
- ⚙️ **Registros:** conservan información del procesador.
- 📍 **Contador de programa:** indica la próxima instrucción.
- 🧠 **Información de memoria:** ayuda a controlar la memoria asociada.
- 📂 **Archivos abiertos:** registra recursos utilizados.
- 🔄 **Estado y control:** permite conocer y administrar la situación del proceso.

> **Sin esta información, al sistema operativo le resultaría imposible llevar un control adecuado de todos los procesos que administra.**