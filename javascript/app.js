// Proyecto 1 -  Counter (Contador)

// Que es un contador? Un contador es un display que muestra un numero que va a variar segun lo que le ordenemos.

// Que va a hacer ese contador?

// 1. Va a poder incrementar su valor.
// 2. Va a poder decrementar su valor.
// 3. Va a poder resetear el valor.

// Que va a necesitar?

// 1. Display: Un lugar en el cual mostrar el valor.
// 2. Boton de incremento, de decremento y de reset.

const display = document.querySelector(".display");

const suma = document.querySelector("#suma");
const resta = document.querySelector("#resta");
const reset = document.querySelector("#reset");

let valor = 0;

display.innerHTML = valor;

// Funcion por declaracion

function sumar() {
	// Capturo el valor inicial de valor y le sumo uno.
	valor++;
	// Imprimo ese valor en el span / html / lo que sea
	imprimirValor();
}

function restar() {
	// Capturo el valor inicial de valor y le resto uno.
	valor--;
	// Imprimo ese valor en el span / html / lo que sea
	imprimirValor();
}

function resetear() {
	// Vuelvo el valor cero.
	valor = 0;
	// Imprimo ese valor en el span / html / lo que sea
	imprimirValor();
}

function imprimirValor() {
	display.innerHTML = valor;
}

suma.addEventListener("click", sumar);
resta.addEventListener("click", restar);
reset.addEventListener("click", resetear);

// Funcion flecha o arrow function
const nuevaFc = () => 20 + 20;

// Expresion de funcion
const nuevaFc2 = function () {
	return 20 + 20;
};

const res = nuevaFc();
const res2 = nuevaFc2();

console.log(res);
console.log(res2);
