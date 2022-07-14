'use stric'

let resultado = sumarTodo(4, 4, 5, 6, 8, 10);
console.log( resultado );

function sumarTodo() 
{
    let suma = 0;
    for (let i = 0; i < arguments.length; i++)
    {
        suma += arguments[i];
    }    

    return suma;
}
