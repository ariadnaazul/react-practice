import React from 'react'
import DestructurarProps from './DestructurarProps';

function Props(props) {

    const subject = props.subject; //vaiable que tomo como valor el valor de props.suject
    const saludo = props.saludo; //Podemos ingresar varios props en el llamado al componente. 
   
    console.log(props);
    return (
        <section>
            <h3>{saludo} {subject}</h3> {/*Leyendo variables que toman el valor del prop*/}
            <p>Un prop es cualquier dato que se pasa a un componente de React.
                Son propiedades de componentes.
                Los props se escriben dentro de las llamadas a los componentes y utilizan la misma sintaxis que los atributos HTML: prop="value". 
                Al crear un componente que tome como parámetro el valor del prop, podemos usar este en funciones.
                Los props de componentes siempre se recopilan en objetos.
                Podemos usar los props dentro del HTML si los asignamos como valor de una variable.
            </p>
            
            <DestructurarProps/>
        </section>

    )
}

export default Props