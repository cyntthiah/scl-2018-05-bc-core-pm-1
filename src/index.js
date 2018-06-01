function EncodeCaesar() {
    var offset = parseInt(document.getElementById("espacios").value);
    var string = (document.getElementById("TextoIngresado").value).toUpperCase();
    var resultado = "";
            console.log(string)
            for (var i = 0; i < string.length; i++) {

                var NumeroOriginal = string.charCodeAt(i);
                if (NumeroOriginal == 32) {
                    resultado = resultado + String.fromCharCode(NumeroOriginal);
                }
                else {
                    var NumeroCodificado = ((NumeroOriginal - 65) + offset) % 26 + 65;
                    console.log(NumeroOriginal + "-" + NumeroCodificado);
                    resultado = resultado + String.fromCharCode(NumeroCodificado);
                }
                console.log(resultado);
            }

            console.log(resultado)
            document.getElementById("TextoResultado").value = resultado;
}

function DecodeCaesar() {
    var offset = parseInt(document.getElementById("espacios").value); // al ser un textarea se invocara por
    var string = (document.getElementById("TextoIngresado").value).toUpperCase();
    var resultado = "";

        console.log(string);
        for (var i = 0; i < string.length; i++) {
            var NumeroCodificado = string.charCodeAt(i);
            if (NumeroCodificado == 32) {
                resultado = resultado + String.fromCharCode(NumeroCodificado);
            }
            else {

                var NumeroOriginal = (NumeroCodificado - offset + 65) % 26 + 65;
                console.log(NumeroCodificado + "-" + NumeroOriginal);
                resultado = resultado + String.fromCharCode(NumeroOriginal);
            }

        }
        console.log(resultado);
        document.getElementById("TextoResultado").value = resultado;
}

function ClickLimpiar() {
    document.getElementById("TextoIngresado").value = "";
    document.getElementById("TextoResultado").value = "";
}
