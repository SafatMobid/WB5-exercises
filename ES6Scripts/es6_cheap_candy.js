let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Hersey", price: 2.79},
    {product: "Skittles", price: 2.89}
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];
   
   //FINDS ONLY FIRST VALUE THAT MATCHES IF STATEMENT
/*    let under5dollar =
    products.find((arrayValue) => arrayValue.price < 4);

    if (under5dollar != undefined)
    {
        console.log(under5dollar.product + " $" + under5dollar.price)
    }
 */
    
    let allUnder4 = products.filter((arrayValue)=> arrayValue.price < 4.00);

    console.log(allUnder4);
//--------------------------------------------------------------------------------------//
let findMM = products.filter(candy => 
    {
    let firstM = candy.product.indexOf("M");
    let getMandM = candy.product.substring(firstM, firstM + 3);

    if (getMandM == "M&M") 
    {
        return true;
    }

    });
console.log(findMM);
//--------------------------------------------------------------------------------------//
let findFish = products.filter((arrayValue)=> arrayValue.product == "Swedish Fish");

console.log(findFish)