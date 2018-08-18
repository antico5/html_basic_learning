/*Ejemplos del Cap 6 de EloquentJS:
Programacion orientada a objetos - Definicion de Clases (2015 en adelante)*/

class Rabbit {
  
  constructor(type, edad = "Desconocida", colorPelo = "Desconocido", paisOrigen = "Desconocido") {
    this.type = type
    this.edad = edad
    this.colorPelo = colorPelo
    this.paisOrigen = paisOrigen
  }
  //geters & seters
  get Edad() {return this.edad}
  get ColorPelo() {return this.colorPelo}
  get PaisOrigen() {return this.paisOrigen}
  get Type() {return this.type}

  set Edad(edad) {this.edad = edad}
  set ColorPelo(colorPelo) {this.colorPelo = colorPelo}
  set PaisOrigen(paisOrigen) {this.paisOrigen = paisOrigen}
  //metodos
  speak(line) {return "The " + this.type + " rabbit says " + line}
}

let killerRabbit = new Rabbit("killer", 2, "Rojo", "Mexico")
let blackRabbit = new Rabbit("black")

console.log("Tipo de conejo: " + killerRabbit.Type + 
			"\nEdad: " + killerRabbit.Edad +  
			"\nColor del pelo: " + killerRabbit.ColorPelo + 
			"\nPais de origen: " + killerRabbit.PaisOrigen)

console.log("Tipo de conejo: " + blackRabbit.Type + 
			"\nEdad: " + blackRabbit.Edad +  
			"\nColor del pelo: " + blackRabbit.ColorPelo + 
			"\nPais de origen: " + blackRabbit.PaisOrigen)

blackRabbit.Edad = 4
blackRabbit.ColorPelo = "Negro"
blackRabbit.PaisOrigen = "EEUU"

console.log("Tipo de conejo: " + blackRabbit.Type + 
			"\nEdad: " + blackRabbit.Edad +  
			"\nColor del pelo: " + blackRabbit.ColorPelo + 
			"\nPais de origen: " + blackRabbit.PaisOrigen)

//clase matriz

class Matrix {

  constructor(width, height, element = 0) {
    this.width = width
    this.height = height
    this.content = []
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element
      }
    }
  }
//geters & seters
  get Width() { return this.width }
  get Height() { return this.height }
  get Content() {return this.content}

  set Content(c) { for(let i in c) this.content[i] = c[i]}
//metodos
  get(x, y) { return this.content[y * this.width + x] }
  set(x, y, value) { this.content[y * this.width + x] = value }
  display() {

  	for (let y = 0; y < this.height; y++) {
  		let filaActual = ""
      for (let x = 0; x < this.width; x++) 
        	filaActual = filaActual +" " + this.content[y * this.width + x]
      		console.log(filaActual)
    }
  }
}
//una opcion para la funcion suma, medio engorroso de leer ? 2 for anidados
suma = (m1, m2) => {

  	if(sumables(m1, m2)) {
  		let h = m1.Height
  		let w = m1.Width
  		let matrizAux = new Matrix(w, h)
  		for (let y = 0; y < h; y++) {
      		for (let x = 0; x < w; x++) {
      			let e = m1.get(x, y) + m2.get(x, y)
        		matrizAux.set(x, y, e)
      		}
    	}
    	return matrizAux
  	}
  	else {
  		console.log("Matrices no sumables")
  		return new Matrix()
  	}
}
// otra opcion, mas legible
suma2 = (m1, m2) => {

    if(sumables(m1, m2)) {
      let result = []
      let matrizAux = new Matrix(m1.Width, m1.Height, 0)
      for(let i in m1.Content) 
        result.push(m1.Content[i] + m2.Content[i])
      matrizAux.Content = result
      return matrizAux
    }
    else {
      console.log("Matrices no sumables")
      return new Matrix()
    }
}

 //son sumables si tienen misma n y m
sumables = (m1, m2) => { return m1.Height == m2.Height && m1.Width == m2.Width }

let matriz1 = new Matrix(4, 4, 2)
let matriz2 = new Matrix(4, 4, 3)

matriz1.display()
matriz2.display()

let matriz3 = suma(matriz1, matriz2)
let matriz4 = suma2(matriz1, matriz3)
matriz3.display()
matriz4.display()