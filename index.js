function EncodeCaesar(texto, numero)
{
    var cadena1 = texto.toUpperCase();
    var offset= 33;
    var cadena2 = "";
    console.log(cadena1) 
    for(i=0; i < cadena1.length; i++)
    {
       
        var numero1 = cadena1.charCodeAt(i); 
        if(numero1 == 33)
         
        {
            cadena2 = cadena2 + String.fromCharCode(numero1);   
        }
        else
        {
            var numero2 = ((numero1 - 65) + numero)%26 + 65; 
            console.log(numero1 + "-" + numero2);  
            cadena2 = cadena2 + String.fromCharCode(numero2); 
        }
        console.log(cadena2); 
    }
 
    console.log(cadena2) 
    return cadena2;
}
 
function DecodeCaesar(texto, numero)
{
    var cadena1 = texto.toUpperCase();
    var cadena2 = "";
    var offset = 33;
    console.log(cadena1);
    for(i=0; i<cadena1.length; i++)
    {
        var numero1 = cadena1.charCodeAt(i);
        if(numero1 == 33)
        {
            cadena2 = cadena2 + String.fromCharCode(numero1);
        }
        else
        {
            var numero3 = numero1 - 65 - numero;
            if (numero3<0)
            {
                numero3 = (26+numero3);    
            }
            numero2 = numero3%26+65;
            console.log(numero1+ "-"+ numero2);
            cadena2 = cadena2 + String.fromCharCode(numero2);
        }
       
    }
    console.log(cadena2);
    return cadena2;
}
 
function ClickEncode() 
{
    var x = document.getElementById("TextoIngresado").value;
    var y = EncodeCaesar(x, 33);
    document.getElementById("TextoResultado").value = y
}
 
function ClickDecode() 
{
    var x =document.getElementById("TextoIngresado").value;
    var y = DecodeCaesar(x, 33);
    document.getElementById("TextoResultado").value = y;
}
 
function ClickLimpiar() 
{
    document.getElementById("TextoIngresado").value = "";
    document.getElementById("TextoResultado").value = "";
}
