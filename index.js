function saturdayFun(string = 'roller-skate') {
  return `This Saturday, I want to ${string}!`
}
saturdayFun()
saturdayFun('bathe my dog')

function mondayWork(string = 'go to the office') {
  return `This Monday, I will ${string}.`
}
mondayWork()
mondayWork('work from home')

function wrapAdjective(string = '*') {
  return function (special) {
    return `You are ${string}${special}${string}!`
  }
}
console.log(wrapAdjective()('a hard worker'))
console.log(wrapAdjective('||')('a hard worker'))

let Calculator = {
  add: function (a, b) {
    return a + b
  },
  subtract: function (a, b) {
    return a - b
  },
  multiply: function (a, b) {
    return a * b
  },
  divide: function (a, b) {
    return a / b
  },
}
console.log(Calculator.add(1, 3))
console.log(Calculator.subtract(1, 3))
console.log(Calculator.multiply(1, 3))
console.log(Calculator.divide(10, 5))

let arrayOfTransforms = [
  function (a) {
    return a * 2
  },
  function (a) {
    return a + 1000
  },
  function (a) {
    return a % 7
  },
]
function actionApplyer(integer, array) {
  if (array.length === 0) {
    return integer
  } else {
    let fun1 = arrayOfTransforms[0](integer)
    let fun2 = arrayOfTransforms[1](fun1)
    let result = arrayOfTransforms[2](fun2)
    return result
  }
}
console.log(actionApplyer(0, []))
console.log(actionApplyer(13, []))
