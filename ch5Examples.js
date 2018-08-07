
//pasar una f como arg

//repite una accion dada
repeat = (n, action) => {
  
  for (let i = 0; i < n; i++) action(i)
}

mostrarCuadrado = num => console.log(num * num)

repeat(5, mostrarCuadrado)

let labels = []

repeat(5, i => labels.push(i)) //la funcion q paso como parametro la declaro ahi


console.log(labels)
//recibe un numero, crea una f q dice cuando el arg es >
mayorQue = num => { return mayor => mayor > num}

let mayorQueAlgo = mayorQue(10) //f q dice si arg es > 10
console.log(typeof mayorQueAlgo) // function
console.log(mayorQueAlgo(11))

unless = (test, entonces) => {if (!test) entonces() }

repeat(5, n => { 
	unless(n % 2 == 1, () => {
		console.log(n, "is even")
		})
})

let array = ["Hola", "Como", "andas", 1, [4, 3, 2, 1]], array2 = []
array.forEach(i => array2.push(i))
console.log(array2)

filtrar = (array, filtro) => {
  
  let filtrados = []
  for (let i of array) {
    if (filtro(i)) {
      filtrados.push(i);
    }
  }
  return filtrados;
}
//filtra aquellos elementos de array q sean cadenas
console.log(filtrar(array, e => typeof e == "string"))
//del lenguaje
let array3 = array2.filter( e => typeof e == "string")

console.log(array3.map( m => m.toUpperCase()))