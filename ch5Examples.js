
//pasar una f como arg

//repite una accion dada
repeat = (n, action) => {
  
  for (let i = 0; i < n; i++) action(i)
}

mostrarCuadrado = num => console.log(num * num)


let labels = []

repeat(5, i => labels.push(i)) //la funcion q paso como parametro la declaro ahi


//console.log(labels)
repeat(5, mostrarCuadrado)