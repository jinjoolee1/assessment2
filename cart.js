///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((temp, x) => {
    return temp + x.price;
}, 0)

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice (cartTotal, couponValue, tax) {
    const taxAmount = cartTotal * tax;
    const totalWithTax = cartTotal + taxAmount;
    const finalTotal = totalWithTax - couponValue;
        return finalTotal;
}

console.log(calcFinalPrice(35.99, 2.25, .08)); 


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
1. First, we'll need a user ID to identifty each customer. 
2. We will then need an item list to store the details of each item present in the customer's cart.
3. An address to be stored, where the delivery will be delivered to.
4. Promo code. If the user has a promo code for a discount, we will need to store that information as well.
5. Free offer items (such as buy one get one, 2 for 1, x dollars off with purchase of x dollars or more), details of any free items provided with an offer where payment is not required.
6. Payment method.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    name: "John Doe",
    userID: "JohnDoe1234",
    address: "123 Main Street",
    phone: "5555555555",
    promocode: "TRYME",
    
}
