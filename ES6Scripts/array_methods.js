let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
   ];
   
// Exercise A & C
function getItemName(itemName) // create function to get the item name 
{
    return itemName.item; // return the item name 
}

function displayName(name) // create function to display the names 
{
    console.log(name);
}


cart.sort(function(a, b) { // Sorting through the array of objects by NAME
    if (a.item < b.item) return -1;
    else if (a.item == b.item) return 0;
    else return 1;
});

    function displayCart(arrayElement) // create fuction to display the names and prices
    {
        console.log(arrayElement.item + " : " + arrayElement.price);
    }

// Output C
cart.forEach(displayCart);
console.log("------------------------");

let itemsList = cart.map(getItemName); // using the map() function to call the getItemName function to return the item names 
itemsList.forEach(displayName); // using the forEach() to display the list of items 

//-----------------------------------------------------------------------------------------------------

// Exercise B

let total = cart.reduce(getTotalCost, 0); 
function getTotalCost(currentTotal, arrayElement)
{
    return currentTotal + (arrayElement.price * arrayElement.quantity);
}

// Output
console.log("---------------------")
console.log("Your total is: " + total);