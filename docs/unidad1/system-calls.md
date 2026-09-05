# 🔐 Llamadas al Sistema y Protección

Las aplicaciones que utilizamos todos los días necesitan realizar acciones que involucran recursos importantes de la computadora.

Por ejemplo, un programa puede necesitar **leer un archivo, utilizar memoria, comunicarse por la red o trabajar con algún dispositivo**. Sin embargo, permitir que cualquier aplicación tenga acceso completo al hardware podría causar problemas de seguridad o afectar el funcionamiento del sistema.

Para evitarlo, el sistema operativo funciona como intermediario y proporciona un mecanismo conocido como **llamada al sistema o System Call**.

---

## ¿Qué es una llamada al sistema?

Una **llamada al sistema** es una forma controlada mediante la cual un programa puede solicitar un servicio al sistema operativo.

En lugar de acceder directamente a un recurso protegido, la aplicación realiza una solicitud y el sistema operativo se encarga de realizar la operación correspondiente.

!!! example "Un ejemplo sencillo"
    Imaginemos que un programa necesita leer información de un archivo.

    La aplicación no necesita controlar directamente el dispositivo de almacenamiento. Solicita al sistema operativo la operación y este se encarga de realizarla de manera controlada.

Podemos visualizarlo así:

**📱 Aplicación → 📞 System Call → ⚙️ Sistema Operativo → 🖥️ Recurso**

Después de realizar la operación, el sistema operativo devuelve el resultado a la aplicación.

---

##  ¿Por qué no dejamos que las aplicaciones hagan todo directamente?

Si cualquier programa pudiera modificar libremente la memoria, controlar dispositivos o ejecutar cualquier instrucción del procesador, un error podría afectar a todo el sistema.

Por esta razón existen diferentes niveles de privilegio.

El sistema operativo utiliza principalmente dos modos de ejecución:

| Modo | Características |
|---|---|
| 👤 **Modo Usuario** | Aquí se ejecutan normalmente las aplicaciones. Tiene permisos limitados y no puede acceder libremente a recursos críticos. |
| ⚙️ **Modo Kernel** | Aquí se ejecuta el núcleo del sistema operativo. Posee mayores privilegios y puede realizar operaciones sobre el hardware y recursos protegidos. |

!!! warning "¿Por qué es importante?"
    Esta separación ayuda a evitar que una aplicación pueda realizar directamente operaciones que podrían poner en riesgo la estabilidad o seguridad del sistema.

---

##  Modo Usuario

El **modo usuario** es el entorno restringido en el que normalmente trabajan las aplicaciones.

Un navegador, un editor de texto o cualquier otro programa no debería tener control completo sobre todos los recursos de la computadora.

Cuando necesita realizar una operación que requiere mayores privilegios, debe solicitarla al sistema operativo.

Por ejemplo:

**Aplicación en modo usuario**  
↓  
Necesita realizar una operación protegida  
↓  
Realiza una llamada al sistema  
↓  
El sistema operativo atiende la solicitud

---

##  Modo Kernel

El **kernel** es la parte central del sistema operativo y trabaja con un nivel de privilegio mayor.

Desde este modo se pueden realizar operaciones que una aplicación común no tiene permitido ejecutar directamente.

Entre ellas pueden encontrarse acciones relacionadas con:

- Administración de memoria.
- Control de dispositivos.
- Manejo de procesos.
- Acceso a archivos.
- Comunicación con el hardware.

!!! note "Una forma sencilla de recordarlo"
    El **modo usuario** tiene restricciones para proteger el sistema, mientras que el **modo kernel** posee los privilegios necesarios para administrar sus recursos.

---

##  ¿Qué ocurre durante una System Call?

Cuando una aplicación necesita un servicio protegido, ocurre una transición controlada.

Podemos resumir el proceso de esta manera:

**1️⃣ La aplicación está trabajando en modo usuario.**

**2️⃣ Necesita un servicio del sistema operativo.**

**3️⃣ Realiza una llamada al sistema.**

**4️⃣ El control pasa de forma controlada al modo kernel.**

**5️⃣ El sistema operativo realiza la operación solicitada.**

**6️⃣ El resultado regresa a la aplicación y esta continúa su ejecución.**

Este mecanismo permite que las aplicaciones utilicen los servicios del sistema operativo sin recibir acceso completo a los recursos protegidos.

---

##  Interrupciones y Traps

Para comprender este cambio también aparecen dos conceptos importantes: las **interrupciones** y las **traps**.

Una **interrupción** es una señal que provoca que el procesador detenga momentáneamente lo que estaba realizando para atender un evento que necesita atención.

Una **trap** es una transferencia de control hacia el sistema operativo provocada durante la ejecución de un programa. Este tipo de mecanismo puede utilizarse para entrar de manera controlada al kernel cuando se necesita ejecutar una operación privilegiada.

!!! info "Lo importante para esta unidad"
    No necesitamos pensar en una System Call simplemente como una función cualquiera. Lo importante es entender que existe un mecanismo controlado que permite pasar de una aplicación con privilegios limitados hacia el sistema operativo para solicitar un servicio.

---

##  Ejemplos de servicios solicitados al Sistema Operativo

Las llamadas al sistema pueden utilizarse para diferentes tipos de operaciones.

| Tipo de operación | Ejemplo |
|---|---|
| 📁 **Archivos** | Abrir, leer, escribir o cerrar un archivo. |
| ⚙️ **Procesos** | Crear, ejecutar o finalizar procesos. |
| 🧠 **Memoria** | Solicitar o administrar espacio de memoria. |
| 🖨️ **Dispositivos** | Trabajar con recursos de entrada y salida. |
| 🌐 **Comunicación** | Enviar o recibir información mediante mecanismos de comunicación. |

---

## Una analogía para entenderlo

Podemos imaginar al sistema operativo como el personal encargado de un área restringida.

Una persona no puede entrar directamente y tomar lo que necesita. Primero realiza una solicitud, una persona autorizada entra al área protegida, realiza la operación y posteriormente entrega el resultado.

De forma parecida:

**👤 Aplicación = persona que realiza la solicitud**

**📞 System Call = solicitud autorizada**

**⚙️ Kernel = encargado con permisos**

**🖥️ Hardware y recursos = área protegida**

Esta separación permite mantener un mayor control sobre quién puede utilizar los recursos importantes del sistema.

---

##  En resumen

!!! note "Idea principal"
    Las llamadas al sistema permiten que las aplicaciones soliciten servicios al sistema operativo de una manera controlada. La separación entre **modo usuario** y **modo kernel** protege los recursos del sistema y evita que las aplicaciones tengan acceso directo a operaciones privilegiadas.

Las **System Calls** funcionan entonces como un puente entre los programas que utilizamos y las funciones internas que puede realizar el sistema operativo.