//vieja range
/*range = (start, end) => {

    let array = []
	for (let i = start; i <= end; i++) array.push(i) 
  	return array
}*/



sum = array => {

  	let s = 0
	for (let i of array) s += i
  	return s
}

range = (start, end, step = 1) => {
	
  	let array = []
  	if (step > 0) 
      for (let i = start; i <= end; i += step) array.push(i)
  	else
      for (let i = start; i >= end; i += step) array.push(i)
  
  	return array
}

console.log(range(1, 10))
console.log(sum(range(1, 10)))
console.log(range(5, 2, -1))