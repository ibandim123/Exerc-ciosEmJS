const arr:number = [-4, 3, -9, 0, 4, 1]

let positiveNumbers = arr.filter((element)=>{
  return element > 0
})

let negativeNumbers = arr.filter((element)=>{
  return element < 0
})

let zero = arr.filter((element)=>{
  return element == 0
})

let arrLength:number = arr.length

let positiveValues = positiveNumbers.length/arrLength

let negativeValues = negativeNumbers.length/arrLength

let zeroValues = zero.length/arrLength

console.log(positiveValues.toFixed(6))
console.log(negativeValues.toFixed(6))
console.log(zeroValues.toFixed(6))


