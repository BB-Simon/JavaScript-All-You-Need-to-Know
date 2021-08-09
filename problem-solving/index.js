function seerToMon(seer){
    // convertj seer to mon then return it
    return (seer / 40).toFixed(2);
}

// const seerConvertedToMon = seerToMon(102)
// console.log(seerConvertedToMon);

function totalSales(shirtQuantity, pentQuantity, shoeQuantity){
    // price by quantity per product
    const shirtPrice = shirtQuantity * 100;
    const pentPrice = pentQuantity * 200;
    const shoePrice = shoeQuantity * 500;
    // total price of all products
    return shirtPrice + pentPrice + shoePrice;
}

// const totalPrice = totalSales(0, 1, 0)
// console.log(totalPrice);

function deliveryCost(deliveryQuantity){
    const costOfFirstHundred = 100;
    const costOfSecondHundred = 80;
    const costOfAfterTwoHundreds = 50;
    if(deliveryQuantity <= 100){
        // total cost of 1 - 100
        return deliveryQuantity * costOfFirstHundred
    } else if(deliveryQuantity <= 200){
        // cost of 1 - 100
        const firstHundredCost = 100 * costOfFirstHundred
        // cost of 101 - 200
        const secondHundredCost = (deliveryQuantity - 100) * costOfSecondHundred
        // total cost of 1 - 200
        return firstHundredCost + secondHundredCost
    } else {
        // cost of 1 - 100
        const firstHundredCost = 100 * costOfFirstHundred;
        // cost of 101 - 200
        const secondHundredCost = 100 * costOfSecondHundred;
        // cost of 201 - and so on
        const restCost = (deliveryQuantity - 200) * costOfAfterTwoHundreds;
        // toyal cost of 1 to more ten 200 and so on
        return firstHundredCost + secondHundredCost + restCost; 
    }
}

const totalDeliveryCost = deliveryCost(144)
console.log(totalDeliveryCost);

function perfectFriend(friends){
    for(let friend of friends){
        if(friend.length === 5){
            return friend
        }
    }
}

// const friends = ["souvo chowdery", "Jannat", "jimon", "simon", "takmina"]
// const myFriend = perfectFriend(friends)
// console.log(myFriend);  