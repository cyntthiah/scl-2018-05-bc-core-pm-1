window.cipher = {
  encode: () => {
    /* Acá va tu código */
    function EncodeCaesar(texto, numero) {
      var cadena1 = texto.toUpperCase();
      var cadena2 = "";
      console.log(cadena1) 
      for (i = 0; i < cadena1.length; i++) {
  
          var numero1 = cadena1.charCodeAt(i); 
          if (numero1 == 32) // 
          {
              cadena2 = cadena2 + String.fromCharCode(numero1);  
          }
          else {
              var numero2 = ((numero1 - 65) + numero) % 26 + 65;  
              console.log(numero1 + "-" + numero2); 
              cadena2 = cadena2 + String.fromCharCode(numero2); 
          }
          console.log(cadena2); 
      }
  
      console.log(cadena2) 
      return cadena2;
  }
  },
  decode: () => {
    /* Acá va tu código */
  }
}