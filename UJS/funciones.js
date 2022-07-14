//declarar una funcion en javaScript
function miFuncion(a, b) 
{
    return a+b;
}
console.log(miFuncion(4, 5));

//funciones de tipo expresion o funcion anonima
let sumar = function(a, b){ return a+a};
let resultado = sumar(4,5);
console.log( resultado );

 
/*
*funcion de tipo de self invoking
*
*son funciones que se mandan a llamar a si mismas
*la desventaja es que se manda a llamar en el mismo lugar donde se declara
*y solo se puede mandar a llamar una vez 
*/
(function(a, b)
{
    console.log("resultado es: "+ (a+b));
})(5,5);

/* 
* para saber cuantos argumentos recibe una funcion se utiliza la propiedad argument
* para saber cuales son los argumentos utilizamos la propiedad arguments pero ponemos la posicion del
* argumento que deseamos conocer ejemplos arguments[0]
*ejemplo
*/

function segundaFuncion(a, b) 
{
    console.log( arguments[0] );
    console.log( arguments[1] );

    return arguments.length;   
}
console.log(segundaFuncion(4,5));
/* 
*de esta manera podemos saber cuantos argumentos esta recibiendo la funcion
*/

/* 
*funciones flecha
*estas funciones se caracterizan por no usar la palabra reservada function
*utilizan un variable que sirve de referencia y la variable es de tipo const
*para asi no poder cambiar el valor que se le asigne
*ejemplo
*/

const sumarFuncionTipoFlecha = (a, b) => a + b; 
/* 
* no se usa la palabra reservada return porque la funcion flecha sabe que tiene que retornar el valor 
* resultante de la operacion que le codificaque
*/
resultado = sumarFuncionTipoFlecha(4, 5);
console.log(resultado);


/* 
* funcions por pase de referencia
*
* funciones por paso de referencia son aquellas las cuales solo tienen relacion
* con el valor de la variable mas no con la variable misma
* ejemplo
*/

let x = 10;

function cambiaValor(a) 
{
    a = 20;    
}
console.log(x);


/* 
* paso por refencia
* el paso por refencia en funciones pasa con objetos ya que por medio de las
* variables de instacia podemos referenciar un objeto
*/

const persona = 
{
    nombre : "juan", 
    apellido : "perez"
}

console.log(persona);

function cambiaValoresObjeto(p1) 
{
    p1.nombre = "carlos";
    p1.apellido = "urbina";    
}

cambiaValoresObjeto(persona);
console.log(persona);
