import React from 'react'

function JSXSintaxis() {
    const HTMLTitle = <h2>Sintaxis JSX</h2>
    console.log (HTMLTitle);

    const printText = () => 'Esto es el resultado de ejecutar una función.';
    const suma = (a, b) => (a+b);
    const printArray = ['elemento0 ', 'elemento1 ', 'elemento2 ', 'elemento3 ' ];
    const alertBtn = <button onClick={()=>alert('hola')}>Presiona para ver el alert</button> //Función anonima que ejecuta la función alert(), porque en este caso si queremos llamar a la ejecución y no al resultado, ya que queremos controlar el momento en el cual se ejecuta la función mediante un evento.

    //DESTRUCTURACIÓN
    const obj = {
      className: 'admin',
      name: 'Ari'
    }
    const {className} = obj;
    console.log(className);  //Output: admin 
    //Si usaramos palabras reservadas como class, por dentro tener que estructurar y destructurar estas props es confuso

    //ESTILOS
    const pinkText = (
      <p
        style={{
          color: "hotpink",
          backgroundColor: "black",
          ['padding-bottom']: "25px", //Esta es otra forma de escribir las propiedades del objeto style usando atributos css en lugar de props
          textAlign: 'center',
          paddingTop: '25px' //La elección de comillas simples o dobles es indistinta pero conviene elegir un tipo para mayor claridad
        }}
      >
        Esto es un texto rosa
      </p>
    )

  return (
    <section>
        {
            HTMLTitle
        }
        <p>JSX es una extensión de JavaScript que permite la creación de árboles DOM utilizando una sintaxis similar a XML, de ahí su nombre JavaScript XML.</p>
        <p>Al transpilar el código las etiquetas HTML se convierten en un reactCreateElement</p>
        <p>Las etiquetas devuelven objetos que representan un nodo del DOM que se acabará renderizando como un nodo real del DOM html</p>

        <h3>CHILDREN</h3>
          <p>Los children de una etiqueta o elementos hijos pueden ser otras etiquetas o pueden ser StringSimple</p>
          <p>En React estos children pueden ser también expresiones que tras ser evaluadas nos devuelvan un valor. Estas expresiones se escriben entre {'llaves'}.</p>
          <p>Si entre llaves escribieramos booleanos, null o undefined se va a transfromar en nada.</p>
          <p>Pero podemos escribir variables, strings, y números.</p>
          <p>No podemos escribir objetos porque no son permitidos.</p>
          <p>Podemos escribir funciones y nos dará warning como resultado. Debemos en cambio leer el resultado de ejecutar la función, añadiendo los parentesis al final. Como esto: {printText()} O esto, resultado de operar aritmeticamente: {suma(10, 5)}</p>
          <p>Tambien podemos escribir arrays: {printArray}</p>

        <h3>Funciones</h3>
        {alertBtn}

        
        <h3>Atributos</h3>
            <p>Los atributos html en JSX se llaman props y tienen una sintaxis especial</p>
            <p>Las palabras reservadas JS se deben evitar. Las clases en JSX se asignan con 'className' ya que class en JS es una palabra reservada.</p>
            <p>En este sentido, la palabra 'for' que usamos en los labels también está reservada, por lo que se convierte en 'htmlFor'</p>
            <p>Veamos otros ejemplos</p>
            <ul>
                <li>tabindex se debe transformar a camel-case: tabIndex</li>
                <li>La propiedad aria-loquesea y data-loquesea se sigue manteniendo en guion y minuscula igual que en HTML</li>
            </ul>

        <h3>Styles</h3>
        <p>Al utilizar css inline estamos usando un objeto. Style en html es un simple string pero en react es un objeto que tiene propiedades, las cuales van en camel-case.</p>
        {pinkText}
        <button> <a href="https://es.legacy.reactjs.org/docs/dom-elements.html#style">Ver más</a></button>
    </section>
  );
}

export default JSXSintaxis