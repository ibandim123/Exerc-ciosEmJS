/* A soma mínima e máxima  
*/
const array = [ 1, 2, 3, 4, 5 ]

function miniMaxSum(arr) {
    // Write your code here

  let maxValue =  Math.max.apply(null, arr )
  let minValue =  Math.min.apply(null, arr )
  
  let Sum = arr.reduce((sum, i) => {
  return sum + i
  })
  
  let maxSum = Sum - maxValue
  let minSum = Sum - minValue
  
  console.log(maxSum + ' ' + minSum)
    
}

miniMaxSum(array)
