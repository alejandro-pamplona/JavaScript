// if / else if / else

numero = 0;

if (numero > 0) {
    console.log(`El número es positivo: ${numero}`);
}else if(numero < 0){
    console.log(`El número es negativo: ${numero}`);
}
else{
    console.log(`El número es cero: ${numero}`);
}

// Operador ternario
(numero > 0) ? console.log(`El número es positivo: ${numero}`) : (numero < 0) ? console.log(`El número es negativo: ${numero}`) : console.log(`El número es cero: ${numero}`);

//Ejercicio

edad = 18;

if (edad >= 18) {
    console.log(`Eres mayor de edad: ${edad}`);
}else{
    console.log(`Eres menor de edad: ${edad}`);
}
