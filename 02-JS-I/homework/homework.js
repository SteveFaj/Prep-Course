// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola';


// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 15;


// Crea una variable booleana:
const nuevoBool = 3 > 2;



// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;


// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;


// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;



// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x, y)
 {
   suma = x + y;
  return suma
}

function resta(x, y)
 {
resta = x - y;  
  return resta;
}
function multiplica(x, y) 
{
multiplica = x * y; 
return multiplica;
}  
  

function divide(x, y) 
{
divide = x / y;  
  return divide;
}

function sonIguales(x, y) 
{
  if (x == y)
  {
    return true
  }
  else
  {
    return false
  }
}


function tienenMismaLongitud(str1, str2)
 { 
return str1.length == str2.length
 }
  
function menosQueNoventa(num) 
{
  if (num < 90)
  {
    return true
  }
  else
  {
    return false
  }
}


function mayorQueCincuenta(num)
{
  if (num > 50)
  {
    return true
  }
  else
  {
  return false
  }
}

function obtenerResto(x, y) 
{
  var resto = x % y;
  return resto;
}

function esPar(num) 
{
 if (num%2 == 0)
 {
  return true
 } 
  else
  {
    return false
  }
}

function esImpar(num)
{
 if (num%2 == 0)
 {
  return false
 } 
  else
  {
    return true
  }
 } 

function elevarAlCuadrado(num)
{
  return Math.pow(num, 2);
}

function elevarAlCubo(num) 
{
    return Math.pow(num,3); 
}

function elevar(num, exponent)
{
    return Math.pow(num, exponent); 
}

function redondearNumero(num) 
{
    return Math.round(num);  
}

function redondearHaciaArriba(num) 
{
    return Math.ceil(num)  
}

function numeroRandom()
{
 return Math.random()*1; 
}
  
function esPositivo(numero)
{
  if (Math.sign(numero) == 1)
  {
    return "Es positivo"
  }
  else if (Math.sign(numero) == -1)
  {
    return "Es negativo"
  }
  else
  {
    return false
  }
}

function agregarSimboloExclamacion(str) 
{
return str + "!"; 
}

function combinarNombres(nombre, apellido) 
{
var conc = nombre + " " + apellido;
return conc;
}

function obtenerSaludo(nombre)
{
  return "Hola " + nombre + "!";
}
  
function obtenerAreaRectangulo(alto, ancho) 
{
  var areaRec = alto * ancho;
  return areaRec;
}
 
function retornarPerimetro(lado)
{
  var perimetro = lado * 4;
  return perimetro;
}

function areaDelTriangulo(base, altura)
{
  var area = (base * altura) / 2;
  return area;
}

function deEuroAdolar(euro)
{
  var dolar = euro * 1.20
  return dolar;
}

function esVocal(letra)
{
 if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u")
  {
    return "Es vocal";
  }
if(letra.length > 1)
  {
    return "Dato incorrecto";
  }
  else 
  {
    return "Dato incorrecto";
  }
}

//Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
