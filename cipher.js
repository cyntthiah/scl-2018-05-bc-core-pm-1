window.cipher = {
    encode: (texto, numero) => {
        /* Acá va tu código */
            var string = texto.toUpperCase();
            var offset = parseInt(numero);
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
            return resultado;
        },

    decode: (Texto, numero) => {
        /* Acá va tu código */

        var string = Texto.toUpperCase();
        var offset = parseInt(numero);
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
        return resultado;
    }
}
