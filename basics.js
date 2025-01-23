var numOne = 6
var numTwo = 11

var summ = numOne+ numTwo
var division = numOne/numTwo
var divv = Math.trunc(numTwo/numOne)
var remainder = numTwo%numOne


console.log(summ)
console.log(division)
console.log(divv)
console.log(remainder)

let firstName = "Rachel"

let welcome = `Welcome back ${firstName}` //string 

console.log("Welcome back " + " " + firstName)

// console.log(welcome)

console.log(firstName.toLocaleUpperCase)
console.log(firstName.length)
let isStudent = false
let isHall = true

console.log(isHall && isStudent)
console.log(isHall || isStudent)

let fruits = ["mangoes", "oranges", "grapes"]
console.log(fruits)
fruits.push("apples")
console.log(fruits)
fruits.pop()
// fruits.del("oranges")
console.log(fruits)
let myFruits = fruits.splice(1,1)
console.log(myFruits)


let signup = {
    "name" : "Rachel",
    "surname": "Isooba",
    "age":24,
    "country": "Uganda",
    "inClass": false,
    "phone": "0707125552",
    "email": "mbeizacokila@gmail.com",
    "password":"BeMyself2024"

}

console.log(signup)