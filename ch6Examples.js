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

  getEdad() {return this.edad}
  getColorPelo() {return this.colorPelo}
  getPaisOrigen() {return this.paisOrigen}
  getType() {return this.type}

  setEdad(edad) {this.edad = edad}
  setColorPelo(colorPelo) {this.colorPelo = colorPelo}
  setPaisOrigen(paisOrigen) {this.paisOrigen = paisOrigen}

  //metodos

  speak(line) {return "The " + this.type + " rabbit says " + line}
}

let killerRabbit = new Rabbit("killer", 2, "Rojo", "Mexico")
let blackRabbit = new Rabbit("black")

/*console.log("Tipo de conejo: " + killerRabbit.getType() + 
			"\nEdad: " + killerRabbit.getEdad() +  
			"\nColor del pelo: " + killerRabbit.getColorPelo() + 
			"\nPais de origen: " + killerRabbit.getPaisOrigen())

console.log("Tipo de conejo: " + blackRabbit.getType() + 
			"\nEdad: " + blackRabbit.getEdad() +  
			"\nColor del pelo: " + blackRabbit.getColorPelo() + 
			"\nPais de origen: " + blackRabbit.getPaisOrigen())

blackRabbit.setEdad(4)
blackRabbit.setColorPelo("Negro")
blackRabbit.setPaisOrigen("EEUU")

console.log("Tipo de conejo: " + blackRabbit.getType() + 
			"\nEdad: " + blackRabbit.getEdad() +  
			"\nColor del pelo: " + blackRabbit.getColorPelo() + 
			"\nPais de origen: " + blackRabbit.getPaisOrigen())
*/
//matriz

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

  getWidth() { return this.width }
  getHeight() { return this.height }

  get(x, y) {
    return this.content[y * this.width + x]
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value
  }

  display() {

  	for (let y = 0; y < this.height; y++) {
  		let filaActual = ""
      for (let x = 0; x < this.width; x++) 
        	filaActual = filaActual +" " + this.content[y * this.width + x]
      		console.log(filaActual)
    }
  }
}

suma = (m1, m2) => {

  	if(sumables(m1, m2)) {
  		let h = m1.getHeight()
  		let w = m1.getWidth()
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

sumables = (m1, m2) => { return m1.getHeight() == m2.getHeight() && m1.getWidth() == m2.getWidth() }

let matriz1 = new Matrix(4, 4, 2)
let matriz2 = new Matrix(4, 4, 3)

matriz1.display()
matriz2.display()

let matriz3 = suma(matriz1, matriz2)
matriz3.display()