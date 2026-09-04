# 💻 Proceso vs. Programa

Cuando hablamos de sistemas operativos es muy común confundir los términos **programa** y **proceso**, ya que están bastante relacionados. Sin embargo, no significan exactamente lo mismo.

La forma más sencilla de diferenciarlos es pensar que **un programa es algo que tenemos almacenado en la computadora, mientras que un proceso aparece cuando ese programa se pone en funcionamiento**.

> 💡 **En pocas palabras:** el programa contiene las instrucciones y el proceso es el encargado de llevarlas a cabo cuando lo ejecutamos.

---

## 📄 ¿Qué es un programa?

Un **programa** es básicamente un conjunto de instrucciones que fueron creadas para que la computadora pueda realizar una tarea específica.

Por ejemplo, cuando tenemos instalado un navegador, un editor de texto o un videojuego, todos ellos son programas que se encuentran guardados en el almacenamiento de nuestra computadora.

Mientras no los abramos, simplemente están ahí guardados. Por eso se dice que un programa es una entidad **pasiva**, ya que por sí solo no está realizando ninguna acción.

Algunos ejemplos que utilizamos prácticamente todos los días son:

- Navegadores web.
- Editores de texto.
- Reproductores de música o video.
- Videojuegos.
- Compiladores y herramientas de programación.

!!! tip "Ejemplo sencillo"
    Si tenemos Google Chrome instalado pero no lo hemos abierto, Chrome sigue siendo un **programa almacenado**. En ese momento todavía no estamos ejecutándolo.

---

## ⚙️ ¿Qué es un proceso?

Aquí es donde aparece la diferencia.

Un **proceso** se crea cuando ejecutamos un programa. En ese momento el sistema operativo tiene que comenzar a administrarlo y proporcionarle los recursos que necesita para funcionar.

Entre estos recursos o datos podemos encontrar:

- Tiempo de **CPU** para ejecutar sus instrucciones.
- Espacio en la **memoria RAM**.
- Un identificador conocido como **PID**.
- Información sobre el estado en el que se encuentra.
- Archivos y otros recursos que necesite utilizar.

Por esta razón se considera que un proceso es una entidad **activa**, porque ya se encuentra realizando alguna tarea dentro del sistema.

!!! info "Algo interesante"
    Un mismo programa puede llegar a tener varios procesos asociados. Es decir, programa y proceso no tienen necesariamente una relación de uno a uno.

---

## 🔎 Programa vs. Proceso

Para verlo de una forma más clara, podemos comparar sus principales características:

| Característica | Programa | Proceso |
|---|---|---|
| **Naturaleza** | Es pasivo | Es activo |
| **Dónde se encuentra** | Almacenado en el dispositivo | Utiliza memoria mientras se ejecuta |
| **Ejecución** | No necesariamente está funcionando | Está siendo administrado por el sistema operativo |
| **Recursos** | No necesita recursos para ejecutarse mientras permanece almacenado | Necesita CPU, memoria y otros recursos |
| **PID** | No posee | Tiene un identificador de proceso |
| **Estado** | No tiene estados de ejecución | Puede pasar por diferentes estados |

---

## 💡 Veámoslo con un ejemplo

Imaginemos que tenemos un navegador instalado en nuestra computadora.

Mientras el navegador permanece guardado y no lo hemos abierto, hablamos de un **programa**. Pero en el momento en que hacemos doble clic para utilizarlo, el sistema operativo comienza a trabajar.

Carga lo necesario en memoria, le asigna recursos, crea la información necesaria para controlarlo y comienza su ejecución. Es en ese momento cuando hablamos de un **proceso**.

Podemos visualizarlo de esta manera:

**📄 Programa almacenado**  
↓  
**🖱️ El usuario decide ejecutarlo**  
↓  
**⚙️ El sistema operativo crea un proceso**  
↓  
**🧠 Le asigna los recursos necesarios**  
↓  
**▶️ El proceso comienza a ejecutarse**

!!! note "Entonces, ¿cuál es la diferencia?"
    Podemos pensar en el **programa** como las instrucciones de lo que queremos hacer y en el **proceso** como esas instrucciones llevándose a cabo dentro de la computadora.