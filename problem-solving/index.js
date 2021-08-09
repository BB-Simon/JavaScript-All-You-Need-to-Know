// 1. fist problem
function seerToMon(seer){
    // check if the input is not a number
    if(typeof seer != "number"){
        return "Please provide a number"
    }
    // check if the input is a negative number
    if(seer < 0){
        return "Please provide a positive number"
    }

    // convert seer to mon then return it
    return (seer / 40).toFixed(2);
}

// 2. second problem
function totalSales(shirtQuantity, pentQuantity, shoeQuantity){
    // check if the value is not a number
    if(typeof shirtQuantity != "number" || typeof pentQuantity != "number" || typeof shoeQuantity != "number"){
        return 'Please provide a number'
    }
    // check if the value is negative
    if(shirtQuantity < 0 || pentQuantity < 0|| shoeQuantity < 0){
        return 'Please provide a positive number'
    }
    
    // multiplied price by quantity of product
    const shirtPrice = shirtQuantity * 100;
    const pentPrice = pentQuantity * 200;
    const shoePrice = shoeQuantity * 500;
    // total price of all products
    return shirtPrice + pentPrice + shoePrice;
}

// 3. third problem
function deliveryCost(deliveryQuantity){
    // check if the value is not a number
    if(typeof deliveryQuantity != "number"){
        return "Please provide a number"
    }
    // check if the value is a negative number
    if(deliveryQuantity < 0){
        return "Please provide a positive number"
    }

    // cost per category
    const costOfFirstHundred = 100;
    const costOfSecondHundred = 80;
    const costOfAfterTwoHundreds = 50;

    if(deliveryQuantity <= 100){
        // total cost of 1 - 100 inclusive
        return deliveryQuantity * costOfFirstHundred
    } else if(deliveryQuantity <= 200){
        // cost of 1 - 100 inclusive
        const firstHundredCost = 100 * costOfFirstHundred
        // cost of 101 - 200 inclusive
        const secondHundredCost = (deliveryQuantity - 100) * costOfSecondHundred
        // total cost of 1 - 200 inclusive
        return firstHundredCost + secondHundredCost
    } else {
        // cost of 1 - 100 inclusive
        const firstHundredCost = 100 * costOfFirstHundred;
        // cost of 101 - 200 inclusive
        const secondHundredCost = 100 * costOfSecondHundred;
        // cost of 201 - and so on
        const restCost = (deliveryQuantity - 200) * costOfAfterTwoHundreds;
        // total cost of 1 to more ten 200 and so on
        return firstHundredCost + secondHundredCost + restCost; 
    }
}

// 4. fourth problem
function perfectFriend(friends){
    // check if is it not an array
    if(typeof friends != "object") {
        return "Please provide an array of friends!"
    }
    for(let friend of friends){
        // check if each element of the array is string
        if(typeof friend != "string"){
            return "Please provide an array contains only string characters"
        } else if(friend.length === 5){
            // first friend who have five characters on his name
            return friend
        }
    }
}
 