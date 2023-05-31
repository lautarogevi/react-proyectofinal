// Programacion Sincrónica y Asincrónica.

// La programacion sincronica ejecuta una tarea a la vez, en un orden secuencial

// La programacion asincronica ejecuta varias tareas al mismo tiempo, en orden no secuencial.

// Para practicar podemos usar setTimeout. Recuerden que esta funcion recibe dos parametros: una funcion y un tiempo en milisegundos.

// Me permite simularm el retraso de una peticion a un servidor.

// PROMESAS: Un objeto que representa un evento a futuro.
// En general representa el resultado eventual de una peticion asincrona

// Las promesas tienen 3 estados: pendiente, cumplida o rechazada.



const Promesas = () => {
// Programacion sincronica:
    console.log("Tarea 1");
    console.log("Tarea 2");

// Programacion asincronica:
    setTimeout( () => {
        console.log("Tarea A")
    }, 2000)

    setTimeout( () => {
        console.log("Tarea B")
    }, 1000)

// Promesas
    const tusFalsasPromesas = (estado) => {
        return new Promise( (resolve, reject) => {
            if(estado) {
                resolve("Promesa cumplida, me regalaron lo que queria");
            } else {
                reject("Promesa rechazada, me llegó carbón");
            }
        })
    }

    console.log(tusFalsasPromesas(true));

    // THEN Y CATCH: 
    // Podemos concatenar dos metodos que me permiten ejecutar una funcion cuando la promesa se cumpla o se rechace.
    // THEN: Se ejecuta cuando la promesa se cumple.
    // CATCH: Se ejecuta cuando la promesa se rechaza.
    // FINALLY: Se ejecuta siempre.

    tusFalsasPromesas(false)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.error(error);
        })

    // Ahora practicamos con un array de datos.

    const array = ["Tinki Winki", "Lala", "Po", "Dipsy"];

    const solicitarTeletubbies = (estado) => {
        return new Promise ((resuelto, rechazado) => {
            if(estado) {
                resuelto(array);
            } else {
                rechazado("No hay teletubbies hoy");
            }
        })
    }

    solicitarTeletubbies(true)
        .then(respuesta => {
            console.table(respuesta);
        })
        .catch(error => console.error(error))
        .finally( () => console.log("Proceso finalizado."))

    return (
        <div>Promesas</div>
    )
}

export default Promesas