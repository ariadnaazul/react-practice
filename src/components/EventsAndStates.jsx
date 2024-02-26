import React, { useState } from "react"; // importa la función useState para usarla en cualquier parte del documento


function EventsAndStates() {
    return (
        <section>
            <h2>Interactividad: Eventos y Estados.</h2>
            <p>En React los controladores de eventos se escriben inline. Puede parecer contraintuitivo debido a las recomendaciones de buenas prácticas de no ensuciar código HTML con CSS y JS innecesarios. Pero JSX es en principio JS.</p>
            <button type="button" onClick={() => alert("hi!")}> 
                Say hi! 
            </button>

            <h3>Callback Props</h3>
            <p>No podemos pasar información de un child a un parent de la misma forma que pasamos información de un parent a un child con props; en cambio podemos usar 'callback props'.</p>
            <p>Esto consiste en crear una función en el elemento padre que espera recibir data del elemento hijo. Entonces podemos pasar esta función al elemento hijo como un prop. Entonces podemos llamar esta función en el elemento hijo para pasarle información al elemento padre.</p>

            <h3>States</h3>
            <p>It's not possible to update the props a component receives; only to read them.</p>
            <p>React provee una variedad de funciones especiales llamadas 'hooks' que nos permiten añadir nuevas funcionalidades a los componentes. useState es una de ellas.
                useState() crea un estado para un componente. Toma un solo parametro que es el valor inicial del estado. Devuelve dos cosas: El estado y una función que puede usarse para actualizar el estado. 
            </p>
            <ul>
                <li>Seteamos el valor iniciar</li>
                <li>Definimos una función cuyo trabajo es cambiar el valor del estado y la llamamos setNombreDelEstado</li>
                <li>Usamos destructuración</li>
            </ul>
            
            <h3>ID</h3>
            <p>Correr 'npm install nanoid' para instalar la librería que nos permite crear id únicas.
                Luego importar nanoid y utilizar el snippet: id: {'`todo-${nanoid()}`'} 
            </p>
        </section>
    )
}

export default EventsAndStates