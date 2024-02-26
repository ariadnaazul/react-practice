import React from 'react'


const Mensajes = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}

//Props destructurados
const MensajesDestructuring = ({title, descripcion}) =>{
    return (
        <div>
            <h3>{title}</h3>
            <p>{descripcion}</p>
        </div>
    )
}


function DestructurarProps () {
  return (
    <div>
        <Mensajes title="Destructurando props"/>
        <p>Una manera de trabajar con props es pasarle props como argumento a la función. Pero esto implica que cuando escribamos el 'return' debamos escribir props.elemento1, props.otroElemento.</p>
        <p>Destructurar los props puede ser util para:</p>
        <ul>
            <li>Ver la información representada en el código de forma más explicita.</li>
            <li>Conocer que props admite la función.</li>
            <li>Llamar a los props tan sólo por su nombre, por ejemplo, elemento1.</li>
        </ul>
        <MensajesDestructuring title="Esta función toma props destructurados" descripcion="En lugar de escribri prop como argumento, escribimos los nombres de cada prop separados por coma."/> 
    </div>
  )
}

export default DestructurarProps