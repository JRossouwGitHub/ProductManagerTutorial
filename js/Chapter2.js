//Declare variables
let myVariable = "Honda"

//Declare constants
const myValue = "Apple"

//Varialbe types
//String - plain english words: "Hello World"
let mySentence = "This is Sam's toy"
//console.log(mySentence)

//Integers - any whole numbers: 1, 10, 1000
let myInteger = 10 + 5
//console.log(myInteger)

//Float/Double - any decimal number: 1.5, 3.25, 5.002893
//Float < Double
let myDecimal = 1.50123 + 1
//console.log(myDecimal)

//Boolean - true or false
let myBool = 1 < 0
//console.log(myBool)

//Array - a list of items: "Apple", "Banana", "Carrot"
//The first item in the list, starts at index 0
let myList = [
    1, 
    "Banana", 
    1.5, 
    false, 
    [
        "A", 
        "B", 
        "C"
    ]
]
//console.log(myList[0])

//If this is true
//Do something here
//Else if this is true
//Do this
//Else do this instead
if(myBool == true){
   //console.log("1 is greater than 0!")
} 
//else if(condition){
    //Do whatever here
//}
else {
    //console.log("1 is not less than 0!")
}

//Switch
// switch(myVariable){
//     case "dwadada":
//         console.log("myVariable is a Toyota!")
//         break;
//     case "Toyota":
//         console.log("myVariable is NOT a Toyota!")
//         break;
//     default:
//         console.log("myVariable is: " + myVariable)
//         break;
// }

//Loops
//For
//Specify start and end number
let testScores = [45, 23, 76, 50, 78, 49, 98, 68, 37, 100, 57]
let scoreTotal = 0
let scoreAvg = 0

for(
    let i = 0; //Starting point
    i < testScores.length; //Condition to do another loop if true
    i++ //Operation for end of the loop
){
    //scoreTotal = scoreTotal + testScores[i]
}

scoreAvg = scoreTotal / testScores.length
// console.log(scoreTotal)
// console.log(scoreAvg.toFixed(2))
let count = 0
while(count < 10){
    scoreTotal = scoreTotal + testScores[count]
    count++
}
scoreAvg = scoreTotal / testScores.length
// console.log(scoreTotal)
// console.log(scoreAvg.toFixed(2))

const myCars = ["Toyota", "Honda", "Mazda", "Nissan"]
for(let i = 0; i < myCars.length; i++ ){
    let currentCar = myCars[i]
    //console.log("Car: " + myCars[i])
    switch(currentCar){
        case "Honda":
            //console.log("Yes, I want to drive the Honda.")
            break;
        default:
            //console.log("No, I do not want to drive the " + currentCar)
            break;
    }
}

for(let i = myCars.length - 1; i > -1 ; i-- ){
    let currentCar = myCars[i]
    //console.log("Car: " + myCars[i])
    switch(currentCar){
        case "Honda":
            //console.log("Yes, I want to drive the Honda.")
            break;
        default:
            //console.log("No, I do not want to drive the " + currentCar)
            break;
    }
}

//Functions
//Traditional: function myFunctionName(){}
//Arrow: const myFunctionName = () => {}
// function myFunction(car, color){
//     console.log("My " + car + " is " + color)
// }

// myFunction("Toyota", "Red")
// myFunction("Honda", "Blue")

// const addNumbers = (first, second) => {
//     let answer = first + second
//     return answer
// }

// console.log(addNumbers(10, 5))
// console.log(addNumbers(20, 3))
// console.log(addNumbers(101, 15))
// console.log(addNumbers(60, 45))
// console.log(addNumbers(15, 15))
// console.log(addNumbers("This is ", "Sam's toy"))

//Try and Catch
// const myHeight = 175
// try{
//     myHeight = 180
// } catch(error){
//     console.log("Could not change my height.")
// }

//Built in alerts or prompts
//alert("This will alert anything inside here")
// let username = prompt("Please tell me your name:")
// alert("Hello " + username + "!")
// let useCookies = confirm("Please accept the cookies!")
// let numberOfCookies = 0
// if(useCookies == false){
//     alert("Please, they are so yummy!")
// } else {
//     numberOfCookies = prompt("How many cookies do you want?")
// }

// if(numberOfCookies > 0){
//     alert("Please take all " + numberOfCookies + " of my cookies!")
// } else {
//     alert("No cookies for you!")
// }