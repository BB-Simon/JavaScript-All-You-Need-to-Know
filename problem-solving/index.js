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

/**
 * Will check is the x number is an even number or odd number
 * @param number:  the x number to check
 * @return string: true if the x number is an even number
 * **/
 
function isEven(x) {
    if(x % 2 === 0) {
        return "even"
    }
    return "Odd"
}
const checkIsEven = isEven(4);


function hurdleRace(k, height) {
    let maxCount = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[i] > k) {
           let diff = height[i] - k;
            if (diff > maxCount) {
                maxCount = diff;
            }

        }
    }
    if (maxCount === 0) {
        return 0;
    }
    return maxCount;
    
}
const height = [1, 6, 3, 5, 2];
const h = hurdleRace(4, height);

function designerPdfViewer(h, word) {
    const alpah = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const widthOfEachChar = 1;
    const hieghtOfEachChar = [];

    for(let j = 0; j < word.length; j++){
        hieghtOfEachChar.push(h[alpah.indexOf(word[j])])
    }
    const tallestChar = Math.max(...hieghtOfEachChar);

    return tallestChar * widthOfEachChar * word.length;
    
}
const heightOfEachChar = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]
designerPdfViewer(heightOfEachChar, 'zaba');

function utopianTree(n) {
    // Write your code here
    let height = 1;
    for(let i = 1; i <= n; i++){
        if(i%2 === 0){
            height++;
        } else {
            height*=2;
        }
    }
    return height
}

utopianTree(4);


// Angry Professor | Hackerarank
function angryProfessor(k, a) {
    // Write your code here
    let count = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] <= 0){
            count++;
        }
    }
    if(count >= k){
        console.log('No');
    } else {
        console.log('Yes');
    }
}

angryProfessor(3, [-1, -3, 4, 2])

function beautifulDays(i, j, k) {
    // Write your code here
    let count = 0;
    for(let day = i; day <= j; day++){
        const reversedDay = parseInt(day.toString().split("").reverse().join(""))
        console.log(Math.abs(day - reversedDay));
        if(Math.abs(day - reversedDay) % k === 0){
            count++;
        }
    }
    return count;
}

beautifulDays(20, 23, 6)

function permutationEquation(p) {
    // Write your code here
    let arr = []
    for(let i = 1; i <= p.length; i++){
        console.log(i);
        console.log(p[i]);
        arr.push(p.indexOf(p.indexOf(i)+ 1)+1)
    }
    console.log(arr);
    return arr

}
permutationEquation([4, 3, 5, 1,2])


function jumpingOnClouds(c, k) {
    let n = c.length
    let e = 100;
    let current_cloud = 0;
    while (true){
        current_cloud += k;
        console.log(current_cloud);
        if (current_cloud >= n){
            current_cloud -= n;
        }
        console.log(current_cloud);
        e -= 1;
        if (c[current_cloud] == 1){
            e -= 2;
        }
        if (current_cloud == 0){
            console.log(e);
            break;
        }
    }
    return e
}


var c = [0, 0, 1, 0, 0, 1, 1, 0];
jumpingOnClouds(c, 2)

function findDigits(n) {
    // Write your code here
    const arr = n.toString().split("")
    let x = 0
    for(let i = 0; i < arr.length; i++) {
        if(n % arr[parseInt(i)] === 0){
           x++
        }
    }
    return x
}

findDigits(1012)

function viralAdvertising(n) {
    // first way
    let likes = 0
    let sharing = 0;
    for(let i = 1; i <=n; i++){
        if(i === 1){
            likes += Math.floor(5/2)
            sharing += Math.floor(5/2)
        } else {
            sharing = Math.floor(sharing * 3 / 2);
            likes += sharing
        }
    }
    return likes

    // second way
    // let likes = []
    // let sharing = 0;
    // for(let i = 1; i <=n; i++){
    //     if(i === 1){
    //         sharing += Math.floor(5/2)
    //         likes.push(sharing)
    //     } else {
    //         sharing = Math.floor(sharing * 3 / 2);
    //         likes.push(sharing)
    //     }
    // }
    // return likes.reduce((a, b) => a+b, 0)
}
viralAdvertising(3)

function saveThePrisoner(n, m, s) {
    let rem = m % n;
    return (rem + s - 1) % n || n;

}
saveThePrisoner(7, 19, 2)

function circularArrayRotation(a, k, queries) {
    let arr = []
    for(let i = 0; i < k; i++){
        let t = a.pop();
        a.unshift(t)
    }
    for(let i = 0; i < queries.length; i++){
        arr.push(a[queries[i]])
    }
    return arr
}
circularArrayRotation([3, 4, 5], 2, [1, 2])

function gradingStudents(grades) {
    // first solution
    // let arr = []
    // for(let grade of grades){
    //     let roundedGrade = Math.ceil(grade / 5) * 5
    //     if(grade >= 38){
    //         if(Math.abs(grade - roundedGrade) < 3){
    //             arr.push(Math.ceil(grade / 5) * 5)
    //         } else {
    //             arr.push(grade)
    //         }
    //     } else {
    //         arr.push(grade)
    //     }
    // }
    // console.log(arr);
    // return arr

    // second solution
    const arr = grades.map(n => n >= 38 && n % 5 >= 3 ? n + (5 - (n % 5)) : n)
    return arr
}
gradingStudents([73, 67, 38, 33])