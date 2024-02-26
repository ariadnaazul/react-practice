import React from 'react' //React no es un archivo local sino que aparece como una dependencia en el package.json
import reactLogo from './../assets/react.svg'


//Aqui estamos creando un componente y al imprimir en consola 'texto' nos damos cuenta que Title es un objeto que tiene una propiedad texto cuyo valor es 'Componentes como etiquetas'. El problema es que esto no funciona porque los objetos no son validos como React Child
/*const Title = texto => { 
    console.log(texto);
    return <h3 className='title'>{texto}</h3>;
};*/


//La forma correcta es indicar que el componente recibe props y de esas props podemos sacar la propiedad 'texto'
//Podemos definir otros componentes por fuera del componente que estamos exportando o podríamos definirlo dentro
const Title = props => {
    console.log(props);
    return <h3 className='title'>{props.texto}</h3>; 
};

const Childrens = props => {
    return <div>{props.children}</div>;
}

//Hay veces que las propiedades pueden aparecer como error si esa propiedad no se encuentra en la validación de la props. Eslint asume que vas a usar una validación utilizando propstype. No es necesario usarla, asi que podemos desactivarla.

function ReactComponents() {
    const subject = "React"; //Declaración de variable
    return (
        <section>
            <h1>Practica en {subject}</h1> {/*Leer una variable js en código HTML*/}
            <h2>Componente</h2>
            <p>La estructura de los componentes en React está constituida en general por:</p>
            <ol>
                <li>Declaraciones import</li>
                <li>El componente</li>
                <li>Una declaración export default</li>
            </ol>
            <p className='nota'>Al escribir rfce accedemos al snippet de esta estructura</p> 

            <h3>Nomenclatura de componentes</h3>
            <p>Al escribir el nombre de un componente se utilizan nombres de variables tipo pascal-case, como HelloWorld. Si escribimos el nombre del componente como "helloWorld" (camel-case) o "helloworld" va a dar error en el navegador.</p>

            <h3>Etiquetas HTML</h3>
            <p>Todo el contenido del componente debe ir dentro de una unica etiqueta general. Puede ser un header, un nav, un div, pero todo el contenido HTML irá dentro de las mismas etiquetas que encierran el formato.</p>
            

            <h3>Comentarios JSX</h3>
            <p>Los comentarios HTML no funcionan en JSX.
                En cambio podemos usar comentario JS dentro de llaves
            </p>
            {//Esto es un comentario JSX. La llave de cierre debe bajar de linea cuando usamos //
            }

            {/*Esto también es un comentario JSX. Aquí la llave de cierre no debe bajar de linea */}

            
            <h3>Variables en JSX</h3>
            <p>JSX nos permite declarar variables como JS y leerlas dentro de HTML</p>
            <img src={reactLogo} className='App-logo' alt="logo" />
            <p>Al encontrarse con {reactLogo}, React sabrá que nos referimos a la importación del logotipo en la línea 2 de nuestra aplicación, y luego recuperará el archivo del logo y lo renderizará.</p>


            <h3>Importar componentes</h3>
            <p>JSX permite importar componentes dentro de componentes igual que los importamos en el main.js</p> 

            <Title texto="Componentes como etiquetas"/>
            <p>Los componentes se pueden escribir como etiquetas</p>

            <Childrens><button>Este texto es children de Title.</button></Childrens>
            <p>Dentro del objeto Title se crea la propiedad children que representa a los hijos de esta etiqueta.</p>
            <p>Para escribir su valor podemos rellenar el espacio entre la apertura y el cierre en lugar de pasar el valor como una propiedad. Incluso podemos crear etiquetas.</p>

        
        </section>
        
    )
}

export default ReactComponents