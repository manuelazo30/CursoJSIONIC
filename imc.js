/* Definir un constructor de persona con los atributos y métodos necesarios para poder usarlo en el ejemplo de 3imc.html */

function Persona(peso, altura)
{
    this.peso = peso;
    this.altura = altura;
}

Persona.calcularIMC = function 