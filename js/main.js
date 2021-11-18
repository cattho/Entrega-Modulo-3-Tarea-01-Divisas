let monedas = ["Elige tu moneda","Dolar", "Peso Mexicano", "Peso Colombiano", "Euro", "Libra Esterlina"];
let valordivisas = [0, 1, 20.73, 3945.7, 0.88, 0.74]; //iguale todas las monedas al valor del dolar el dia 18/11/2021
let list1 = document.getElementById('divisa1');
let list2 = document.getElementById('divisa2');
let listaing = document.createDocumentFragment();
let listaout = document.createDocumentFragment();
let resultado = document.getElementById('resultado');

monedas.forEach(item => {
    let ingreso = document.createElement('option');
    ingreso.textContent = item;
    listaing.appendChild(ingreso);
  
    let salida = document.createElement('option');
    salida.textContent = item;
    listaout.appendChild(salida);
  
  });
  list1.appendChild(listaing);
  list2.appendChild(listaout);

  let convert = document.getElementById('convirtiendo');
  let loginForm = document.getElementById('form');
      loginForm.addEventListener("submit", Conversion);

  

 function Conversion(x) {
    x.preventDefault();
    
    let formData = new FormData(x.target);
    let formValues = Object.fromEntries(formData);
    let valor = document.getElementById('valor').value;
    let divisa1 = formValues.divisa1;
    let divisa2 = formValues.divisa2;

     if (isNaN(valor)==true && valor< 0)  {
         resultado.setAttribute('value', "La cantidad ingresada no es válida");
         resultado.setAttribute('style', "background-color: #feb1a4;");
       } else {
          if (revision(divisa1) && revision(divisa2)) {
            const efecto = convertir(valor, divisa1, divisa2);
            resultado.setAttribute('value', efecto);
            resultado.setAttribute('style', "background-color: #fff;");
          } else {
           return;
         }
        }
      }


      function revision(divisa1, divisa2) {
          if (divisa1&&divisa2 == monedas[0]) {
            alert('Elige una moneda válida');
            return false;
          }
          return true;
        } 


        
  function convertir(valor, divisa1, divisa2) {
    switch (divisa1) {
      // Ingreso dolar
      case monedas[1]:
        if (divisa2 === monedas[1])
          return valor;
        else if (divisa2 === monedas[2])
          return valor * valordivisas[2];
        else if (divisa2 === monedas[3])
          return valor * valordivisas[3];
        else if (divisa2 === monedas[4])
          return valor * valordivisas[4];
        else if (divisa2 === monedas[5])
          return valor * valordivisas[5];
  
        // Ingreso Peso Mex
      case monedas[2]:
        if (divisa2 === monedas[1])
          return valor / valordivisas[2];
        else if (divisa2 === monedas[2])
          return valor;
        else if (divisa2 === monedas[3])
          return valor * (valordivisas[3] / valordivisas[2]);
        else if (divisa2 === monedas[4])
          return valor * (valordivisas[4] / valordivisas[2]);
        else if (divisa2 === monedas[5])
          return valor * (valordivisas[5] / valordivisas[2]);
  
        // Ingreso Peso Col
      case monedas[3]:
        if (divisa2 === monedas[1])
          return valor / valordivisas[3];
        else if (divisa2 === monedas[2])
          return valor * (valordivisas[2] / valordivisas[3]);
        else if (divisa2 === monedas[3])
          return valor;
        else if (divisa2 === monedas[4])
          return valor * (valordivisas[4] / valordivisas[3]);
        else if (divisa2 === monedas[5])
          return valor * (valordivisas[5] / valordivisas[3]);
  
        // Ingreso Euro
      case monedas[4]:
        if (divisa2 === monedas[1])
          return valor / valordivisas[4];
        else if (divisa2 === monedas[2])
          return valor * (valordivisas[2] / valordivisas[4]);
        else if (divisa2 === monedas[3])
          return valor * (valordivisas[3] / valordivisas[4]);
        else if (divisa2 === monedas[4])
          return valor;
        else if (divisa2 === monedas[5])
          return valor * (valordivisas[5] / valordivisas[4]);
  
        // Ingreso Libras
      case monedas[5]:
        if (divisa2 === monedas[1])
          return valor / valordivisas[5];
        else if (divisa2 === monedas[2])
          return valor * (valordivisas[2] / valordivisas[5]);
        else if (divisa2 === monedas[3])
          return valor * (valordivisas[3] / valordivisas[5]);
        else if (divisa2 === monedas[4])
          return valor * (valordivisas[4] / valordivisas[5]);
        else if (divisa2 === monedas[5])
          return valor;
        return valor;
    }
}
