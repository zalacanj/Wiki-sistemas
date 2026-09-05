# 🧩 Clasificación de los Sistemas Operativos

No todos los sistemas operativos funcionan de la misma manera ni están diseñados para cumplir exactamente las mismas necesidades.

Dependiendo de la cantidad de usuarios que pueden atender, las tareas que ejecutan o el tipo de dispositivo donde funcionan, podemos clasificarlos de diferentes formas.

---

##  Según el número de usuarios

Una de las formas más comunes de clasificarlos es observando cuántos usuarios pueden utilizar el sistema.

### Monousuario

Un sistema operativo **monousuario** está pensado principalmente para que una sola persona utilice el sistema en un momento determinado.

Este tipo de sistemas fue común en computadoras personales antiguas.

!!! example "Ejemplo"
    Un ejemplo clásico es **MS-DOS**, utilizado en computadoras personales donde normalmente trabajaba un único usuario.

### Multiusuario

Un sistema **multiusuario** permite que varias personas puedan utilizar los recursos del sistema, incluso de manera simultánea.

Para lograrlo, el sistema operativo debe controlar aspectos como:

- Cuentas de usuario.
- Permisos.
- Recursos compartidos.
- Seguridad.
- Prioridades.

Algunos ejemplos son **Linux, UNIX y Windows Server**.

!!! tip "Una forma sencilla de entenderlo"
    En un sistema multiusuario, varias personas pueden utilizar el mismo sistema sin que todas tengan necesariamente los mismos permisos o acceso a los mismos recursos.

---

##  Según el número de tareas

También podemos clasificarlos dependiendo de cuántas tareas pueden administrar.

### Monotarea

Un sistema **monotarea** permite ejecutar una tarea principal a la vez.

Esto significa que mientras un programa se encuentra ejecutándose, el sistema no está diseñado para administrar varias aplicaciones de forma concurrente como ocurre en los sistemas modernos.

Un ejemplo conocido es **MS-DOS**.

### Multitarea

Los sistemas **multitarea** pueden administrar varios procesos o programas durante el mismo periodo de tiempo.

Para hacerlo, el sistema operativo organiza el uso del procesador y distribuye el tiempo entre las diferentes tareas.

!!! example "Lo vemos todos los días"
    Podemos escuchar música, utilizar un navegador y escribir un documento sin tener que cerrar una aplicación para abrir la siguiente.

Sistemas actuales como **Windows, macOS y Linux** son ejemplos de sistemas multitarea.

---

##  Centralizados y Distribuidos

Otra forma de distinguir sistemas operativos es observar dónde se encuentran y cómo se administran sus recursos.

### Sistema Centralizado

En un sistema centralizado, la mayor parte del procesamiento y los recursos principales se encuentran concentrados en una sola computadora o sistema.

Los usuarios o aplicaciones dependen de esa máquina central para acceder a los recursos que necesitan.

### Sistema Distribuido

En un sistema distribuido, diferentes computadoras conectadas mediante una red pueden colaborar y compartir recursos.

Cada equipo puede realizar una parte del trabajo y comunicarse con los demás.

!!! note "La diferencia principal"
    En un sistema centralizado pensamos principalmente en una máquina que concentra los recursos, mientras que en uno distribuido existen varios equipos que pueden colaborar.

---

##  Según el tipo de dispositivo

Los sistemas operativos también pueden diseñarse tomando en cuenta el dispositivo donde serán utilizados.

###  Sistemas de escritorio

Están diseñados para computadoras personales y portátiles.

Normalmente proporcionan una interfaz gráfica completa, administración de archivos, compatibilidad con distintos periféricos y soporte para muchas aplicaciones.

Ejemplos:

- Windows 10 y Windows 11.
- Ubuntu Desktop.
- macOS.

---

###  Sistemas móviles

Estos sistemas están diseñados especialmente para teléfonos inteligentes y tabletas.

Se enfocan en características como:

- Uso eficiente de la energía.
- Conectividad inalámbrica.
- Pantallas táctiles.
- Movilidad.
- Administración de aplicaciones móviles.

Ejemplos conocidos son **Android e iOS**.

---

##  Sistemas embebidos

Los sistemas operativos **embebidos** funcionan dentro de dispositivos que normalmente tienen una función específica.

Podemos encontrarlos en equipos como:

- Routers.
- Electrodomésticos inteligentes.
- Sistemas de control.
- Dispositivos electrónicos especializados.

En estos casos, el sistema operativo puede ser mucho más pequeño y estar diseñado únicamente para las funciones necesarias del dispositivo.

---

##  Sistemas de Tiempo Real

Los sistemas de tiempo real están diseñados para responder a determinados eventos dentro de un tiempo establecido.

Son especialmente importantes en situaciones donde una respuesta tardía podría provocar un problema.

Podemos encontrarlos en:

- Sistemas industriales.
- Equipos médicos.
- Sistemas automotrices.
- Control de maquinaria.

Algunos ejemplos de sistemas operativos de tiempo real son **FreeRTOS, QNX y VxWorks**.

!!! warning "Recordemos"
    Un sistema de tiempo real no se define simplemente por ser rápido, sino porque debe responder dentro de un tiempo esperado y predecible.

---

## Comparación general

| Clasificación | Tipo | Característica principal |
|---|---|---|
| Usuarios | **Monousuario** | Pensado principalmente para un usuario a la vez. |
| Usuarios | **Multiusuario** | Permite administrar varios usuarios. |
| Tareas | **Monotarea** | Ejecuta una tarea principal a la vez. |
| Tareas | **Multitarea** | Administra múltiples tareas o procesos. |
| Organización | **Centralizado** | Los recursos se concentran principalmente en un sistema. |
| Organización | **Distribuido** | Varios equipos pueden compartir trabajo y recursos. |
| Dispositivo | **Escritorio** | Diseñado para computadoras personales. |
| Dispositivo | **Móvil** | Optimizado para teléfonos y tabletas. |
| Dispositivo | **Embebido** | Utilizado en dispositivos con funciones específicas. |
| Respuesta | **Tiempo Real** | Responde dentro de límites de tiempo establecidos. |

---

##  En resumen

!!! note "Idea principal"
    Los sistemas operativos pueden clasificarse de distintas formas dependiendo de sus características. Un mismo sistema puede pertenecer a varias categorías al mismo tiempo.

Por ejemplo, un sistema como Linux puede funcionar como **multiusuario y multitarea**, además de utilizarse en computadoras de escritorio, servidores u otros tipos de dispositivos.

La clasificación nos ayuda a comprender que cada sistema operativo está diseñado para responder a diferentes necesidades.