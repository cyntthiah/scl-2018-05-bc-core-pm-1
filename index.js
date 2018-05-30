/* Acá va tu código */
function EncodeCaesar(texto, numero) {
    var cadena1 = texto.toUpperCase();
    var cadena2 = "";
    console.log(cadena1) 
    for (i = 0; i < cadena1.length; i++) {

        var numero1 = cadena1.charCodeAt(i); // busca el la letra en el ASCII y guarda el nuemro en la variable nuemro 1
        if (numero1 == 32) // 
        {
            cadena2 = cadena2 + String.fromCharCode(numero1);  //Guarda el espacio sin cambiar su valor
        }
        else {
            var numero2 = ((numero1 - 65) + numero) % 26 + 65;  
            console.log(numero1 + "-" + numero2); 
            cadena2 = cadena2 + String.fromCharCode(numero2); // obtiene la letra que corresponde el valor numero2 en ASCII
        }
        console.log(cadena2); //muestra por consola el valor de cadena por pasando por los ciclos for
    }

    console.log(cadena2) // Muestra por consola el valor final de cadena2
    return cadena2;
}
function DecodeCaesar(texto, numero) {
    var cadena1 = texto.toUpperCase();
    var cadena2 = "";
    console.log(cadena1);
    for (i = 0; i < cadena1.length; i++) {
        var numero1 = cadena1.charCodeAt(i);
        if (numero1 == 32) {
            cadena2 = cadena2 + String.fromCharCode(numero1);
        }
        else {
            var numero3 = numero1 - 65 - numero;
            if (numero3 < 0) {
                numero3 = (26 + numero3);
            }
            numero2 = numero3 % 26 + 65;
            console.log(numero1 + "-" + numero2);
            cadena2 = cadena2 + String.fromCharCode(numero2);
        }

    }
    console.log(cadena2);
    return cadena2;
}

function ClickEncode() 
{
    var x = document.getElementById("TextoIngresado").value;
    var num = document.getElementById("CantidadEspacio").value;
    var y = EncodeCaesar(x, 4);
    document.getElementById("TextoResultado").value = y
}

function ClickDecode() 
{
    var x = document.getElementById("TextoIngresado").value;
    var y = DecodeCaesar(x, 4);
    document.getElementById("TextoResultado").value = y;
}

function ClickLimpiar() 
{
    document.getElementById("TextoIngresado").value = "";
    document.getElementById("TextoResultado").value = "";
}
