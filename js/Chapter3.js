//Objects
// let userProduct = prompt("What would you like to shop for?")
// let userAmount = prompt("How many do you need?")
// let userPrice = prompt("How much does it cost?")

// const ShoppingList = {
//     product: userProduct,
//     amount: userAmount,
//     price: {
//         value: userPrice,
//         unit: "each"
//     }
// }

function ProcessShoppingList(shoppinglist){
    let totalPrice = shoppinglist.amount * shoppinglist.price.value
    return totalPrice.toFixed(2)
}

//console.log(ShoppingList.amount + " " + ShoppingList.product + " will cost: $" + ProcessShoppingList(ShoppingList))

//Class
class ShoppingList{
    constructor(_product, _amount, _price){
        this.product = _product
        this.amount = _amount
        this.price = _price
    }

    ProcessShoppingList(){
        let totalPrice = this.amount * this.price.value
        return totalPrice.toFixed(2)
    }
}

let list1 = new ShoppingList("Apples", 100, {value: 0.99, unit: "per"})
let list2 = new ShoppingList("Bananas", 25, {value: 2.25, unit: "bundle"})

// console.log(list1.ProcessShoppingList())
// console.log(list2.ProcessShoppingList())

//Data Sctructures and Algorithims
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [3, 4, 5, 6, 7, 8]

//This gets all the matching values and return a new array
const myFunnySolution = (arr1, arr2) => {
    let matchingArr = [] 
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                matchingArr.push(arr2[j])
                break
            }
        }
    }
    return matchingArr
}

// console.log(findMatchingArr(arr1, arr2))

// let matchingArr = [] 
// arr1.map((i) => {
//     arr2.map((j) => {
//         if(i == j){
//             matchingArr.push(j)
//         }
//     })
// })
// console.log(matchingArr)

arr2 = arr2.filter(item => arr1.includes(item))
//console.log(arr2)