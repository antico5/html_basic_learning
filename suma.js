var array = [1,2,3,4]
var object = {
  nombre: 'Armando',
  edad: 26,
  apellido: 'Andini',
  nombreCompleto: function(){ 'Armando Andini' }
}
var string = 'hola'

// var cuadrado = function(numero){
//   return numero * numero
// }
//
// var mostrar = function(numero){
//   console.log(numero)
// }

var cuadrado = numero => { return numero * numero }

var mostrar = numero => { console.log(numero) }


// for (var i = 0; i < array.length; i++) {
//   array[i]
// }

array.forEach(mostrar)
// result = array.map(mostrar)
console.log(array.map(cuadrado))




// console.log(array2)

// export default cuadrado;
