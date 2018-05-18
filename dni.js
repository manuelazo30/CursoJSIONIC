function Dni(numero1) {
    this.numero = numero1;
}

Dni.prototype =
    {
        calcularLetra: function () {
            var letra = '';
            var SECUENCIA_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";
            letra = SECUENCIA_DNI.charAt(this.numero % 23);
            return letra;
        }
    }

    // Defino un método "estático"
Dni.esValido = function (elnumero) {
    var ok = false;

    ok = !isNaN(elnumero.substr(0,8)) && (elnumero > 0);

    return ok;
}

var miDni = new Dni("46939614");
console.log("La Letra del DNI " + miDni.numero + " es " + miDni.calcularLetra());
console.log(miDni.__proto__);
console.log(Dni.esValido("4693614H"));
console.log(Dni.esValido(98));