//Create Product class
class Product{
    //Constructor to create product details
    constructor(_type, _stock, _price){
        this.type = _type
        this.stock = _stock
        this.price = _price //Keep in mind that this will be an object "{value: _, unit: _}"
    }
}

//Declare array variable to store our products in
let products = []

//Get access to HTML element
let divNewItem = document.getElementById("new-item")

//Show a div element
const showNewItemMenu = () =>{
    //Change the CSS style by checking what it currently is
    if( divNewItem.style.display == "none"){
        divNewItem.style.display = 'block'
    } else {
        divNewItem.style.display = 'none'
    }
}

//Close new item menu
const closeNewItemMenu = () =>{
    divNewItem.style.display = 'none'
}

//Update products menu
/*
    Description: Reset the product list and recreate it with the current list of products
*/
const updateProductsMenu = () => {
    //Set the HTML to nothing, as in "reset" the list
    let divProductList = document.getElementById("product-list")
    divProductList.innerHTML = ''

    //If we have no products, do nothing i.e. "return" out of the function
    if(products.length == 0){
        return
    }

    //Loop each product in products array
    for(let i = 0; i < products.length; i++){
        //Get the current product at index "i"
        let currentProduct = products[i]

        //Create an HTML tag/element
        let elementForDivProduct = document.createElement("div")
        elementForDivProduct.className = 'product'
    
        let elementForEditBtn = document.createElement("button")
        elementForEditBtn.id = "btnEdit"
        elementForEditBtn.innerHTML = "Edit"
        elementForEditBtn.onclick = function(){editProduct(i)}
    
        let elementForDeleteBtn = document.createElement("button")
        elementForDeleteBtn.id = "btnDelete"
        elementForDeleteBtn.innerHTML = "Delete"
        elementForDeleteBtn.onclick = function(){deleteProduct(i)}
    
        let elementForProductType = document.createElement("h4")
        let elementForProductStock = document.createElement("p")
        let elementForProductPrice = document.createElement("p")
    
        //Set the HTML tag/element value to the value of the currentProduct
        elementForProductType.innerHTML = "Type: " + currentProduct.type
        elementForProductStock.innerHTML = "Stock: " + currentProduct.stock
        elementForProductPrice.innerHTML = "Price: $" + currentProduct.price.value + " - " + currentProduct.price.unit
    
        //Attach/append each element back to the "parent" or the "outer containing div"
        elementForDivProduct.appendChild(elementForDeleteBtn)
        elementForDivProduct.appendChild(elementForEditBtn)
        elementForDivProduct.appendChild(elementForProductType)
        elementForDivProduct.appendChild(elementForProductStock)
        elementForDivProduct.appendChild(elementForProductPrice)
    
        //Attach/append everything back to the "product-list" div
        divProductList.appendChild(elementForDivProduct)
    }
}

//Create a new item
const createNewItem = () => {
    //Get the values from the new item inputs from the form
    let newProductType = document.getElementById("productType").value
    let newProductStock = document.getElementById("productStock").value
    let newProductPriceValue = document.getElementById("productPriceValue").value
    let newProductPriceUnit = document.getElementById("productPriceUnit").value

    //Create a new product Object from the Class
    let newProduct = new Product(
        newProductType,
        newProductStock,
        {
            value: newProductPriceValue,
            unit: newProductPriceUnit
        }
    )

    //Add the product to the list
    products.push(newProduct)

    //Close the new item menu
    closeNewItemMenu()

    //Update the list of products
    updateProductsMenu()
}

//Delete a product
const deleteProduct = (index) =>{
    //Built in JS popup to confirm delete
    let confirmDelete = confirm("Are you sure you want to delete?")

    //If user clicked okay, remove the product
    if(confirmDelete == true){
        //"Splice" means remove
        //Index is the product we want to delete
        //1 is how many index's we want to delete after our product, which includes ours
        //So 1 means just our index
        products.splice(index, 1)
    }

    //Update the list of products
    updateProductsMenu()
}

//Get the edit div
//Note: This is declared outside the functions so we can use it in 2 different functions
let editDiv = document.getElementById("edit-div")

//Edit product function
const editProduct = (i) => {
    //Get the product from the index
    let productToEdit = products[i]

    //Set the values on the pop up form
    let productTypeEdit = document.getElementById("productTypeEdit")
    productTypeEdit.value = productToEdit.type 

    let productStockEdit = document.getElementById("productStockEdit")
    productStockEdit.value = productToEdit.stock 

    let productPriceValueEdit = document.getElementById("productPriceValueEdit")
    productPriceValueEdit.value = productToEdit.price.value

    let productPriceUnitEdit = document.getElementById("productPriceUnitEdit")
    productPriceUnitEdit.value = productToEdit.price.unit

    //Show the pop up
    editDiv.style.display = "flex"
}

//Close the edit item pop up
const closeEditItemMenu = () => {
    editDiv.style.display = "none"
}

//Save edits from edit pop up
const saveItem = () => {
    //Get values from the edit pop up form
    let saveProductType = document.getElementById("productTypeEdit").value
    let saveProductStock = document.getElementById("productStockEdit").value
    let saveProductPriceValue = document.getElementById("productPriceValueEdit").value
    let saveProductPriceUnit = document.getElementById("productPriceUnitEdit").value

    //Loop each product in our array
    for(let i = 0; i < products.length; i++){
        //If the product matches the one we edited, save the changes
        if(saveProductType == products[i].type){
            //To save the changes, set the current product to a newer version
            //i.e. create a new Product Object and overwrite the old one
            products[i] = new Product(
                saveProductType,
                saveProductStock,
                {
                    value: saveProductPriceValue,
                    unit: saveProductPriceUnit
                }
            )
        }
    }

    //Close the edit pop up
    editDiv.style.display = "none"

    //Update products list
    updateProductsMenu()
}