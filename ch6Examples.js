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

console.log("Tipo de conejo: " + killerRabbit.getType() + 
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