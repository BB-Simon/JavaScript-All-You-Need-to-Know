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
    return grades.map(n => n >= 38 && n % 5 >= 3 ? n + (5 - (n % 5)) : n)

}
gradingStudents([73, 67, 38, 33])

/**
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following @parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 **/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // first solution
    // let app = 0
    // let or = 0
    // for(let i = 0; i < apples.length; i++) {
    //     if(a + apples[i] >= s && a + apples[i] <=t){
    //         app++
    //     }
    // }
    // for(let i = 0; i < oranges.length; i++) {
    //     if(b + oranges[i] >= s && b + oranges[i] <=t){
    //         or++
    //     }
    // }
    // console.log(app);
    // console.log(or);

    // second solution
  const countApples = apples.reduce((x, apple) => a + apple >= s && a + apple <= t ? x + 1 : x,0)
  const countOranges = oranges.reduce((x, orange) => b + orange >= s && b + orange <= t ? x + 1 : x,0)

  console.log(countApples);
  console.log(countOranges);

}

countApplesAndOranges(2, 3, 1, 5, [-2], [-1])


/**
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 **/ 
function kangaroo(x1, v1, x2, v2) {
    if (v1 < v2 || (x2 - x1) % (v1 - v2) !== 0) {
        return 'NO';
    } else {
        return 'YES';
    }
}
kangaroo(0, 2, 5, 3)

/** 
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 **/
function getTotalX(a, b) {
    let count = 0
    const max = Math.max(...a)
    const min = Math.min(...b)

    for(let i=max; i<=min ;i++){ 
        if((a.every(e => i % e === 0)) && b.every(e => e % i === 0)) count++
    }
    return count
}

getTotalX([2, 4], [16, 32, 96])

/**
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 **/
function breakingRecords(scores) {
    // first solution
//    let arr = [0, 0];
   let min = scores[0]
   let max = scores[0]
//    for(let i = 0; i < scores.length; i++) {
//         if(scores[i] > max) {
//             arr[0] +=1
//             max = scores[i]
//         }
//         if(scores[i] < min) {
//             arr[1] +=1
//             min = scores[i]
//         }
//    }

    // second solution
    const  arr = scores.reduce((arr, score) => {
        if(score > max) {
            arr[0] += 1
            max = score
        } else if(score < min) {
            arr[1] += 1
            min = score
        }
        return arr
    } , [0, 0])
   return arr
}
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])


/**
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
**/
function birthday(s, d, m) {
    // first solution
    // let day = 0
    // let arr = [...s]
    // for(let i = 0; i < s.length; i++){
    //     let c = 0
    //     for(let j = 0; j < m; j++){
    //         if(arr[j] !== undefined){
    //             c+= arr[j]
    //         }
    //     }
    //     if(c === d) day+= 1
    //     arr.shift()

    // }
    // return day

    // second solution
    let count = 0;
    let sum;
        
    for (var i = 0; i < s.length; i++){
        sum = s.slice(i, m + i).reduce((prev, curr) => prev + curr);
        if (sum === d){
            count++;
        }
    }
    console.log(count);

}
birthday([4], 4, 1)

/**
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
**/
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
    for(let i = 0; i < ar.length; i++) {
        for(let j = i; j < n; j++) {
            if((ar[i] + ar[j]) % 2 === 0){
                console.log(count++);
            }
        }
    }
}
divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])



const  config = {
    // as we have two types of listings, we have two types of categories 1. product 2. service
    product: {
    // "key" is the option you see in Flex Console.
    // "label" is set here for the UI only.
    // Note: label is not added through the translation files
    // to make filter customizations a bit easier.
    options: [
        { key: 'constructionTools&equipment', label: 'Construction tools & equipment' },
        { key: 'home&garden', label: 'Home & garden' },
        { key: 'electronics', label: 'Electronics' },
        { key: 'party', label: 'Party' },
        { key: 'vehicles', label: 'Vehicles' },
        { key: 'sports&leisure', label: 'Sports & leisure' },
        { key: 'creativity', label: 'Creativity' },
        { key: 'spaces', label: 'Spaces' },
        { key: 'outdoorActivity', label: 'Outdoor activity' },
        { key: 'clothesFashion', label: 'Clothes/Fashion' },
        { key: 'cameras', label: 'Cameras' },
        { key: 'other', label: 'Other' },
    ],
    },
    service: {
    // "key" is the option you see in Flex Console.
    // "label" is set here for the UI only.
    // Note: label is not added through the translation files
    // to make filter customizations a bit easier.
    options: [
        { key: 'home&garden', label: 'Home & garden' },
        { key: 'techyServices', label: 'Techy services' },
        { key: 'party', label: 'Party' },
        { key: 'vehicles', label: 'Vehicles' },
        { key: 'sports&leisure', label: 'Sports & leisure' },
        { key: 'education', label: 'Education' },
        { key: 'creativity', label: 'Creativity' },
        { key: 'transportation', label: 'Transportation' },
        { key: 'photographer', label: 'Photographer' },
        { key: 'other', label: 'Other' },
    ],
    }
}

const combinedProductAndServiceOptions = config => {
    const arr = [...config['product'].options, ...config['service'].options];
    const r = Array.from(new Set(arr.map(a => a.key))).map(key => {
     return arr.find(a => a.key === key)
    })
    r.map((o, i) => o.key === "other" && r.push(r.splice(i, 1)))

    return r;
}

combinedProductAndServiceOptions(config);

/** 
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
*/

function diagonalDifference(arr) {
    // Write your code here
    let a = 0
    let b = 0

    for(let i = 0,j = arr.length - 1; i < arr.length && j >= 0; i++, j--){
        a+=arr[i][i]
        b+=arr[i][j]
        console.log(i);
        console.log(arr.length -1 - i);
    }
    
    return Math.abs(a - b);
}

const arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
];

diagonalDifference(arr)

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let l = arr.length;
    let p = 0;
    let n = 0;
    let z = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            p++
        } else if(arr[i] < 0) {
            n++
        }else {
            z++
        }
    }
    console.log((p/l).toFixed(6))
    console.log((n/l).toFixed(6))
    console.log(z)
    console.log((z/l).toFixed(6))

}
plusMinus([-4, 3, -9, 0, 4, 1])

/**
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    let stair = 0;
    let result = "";

    for(let i = n; i > 0; i--) {
        stair++
        i-1
        for(let x = 1; x < i; x++){
            result+=" "
        }
        for(let j = 0; j < stair; j++){
            result+=`#`;
        }
        result+="\n"
    }
    console.log(`res: ${result}`);

}

staircase(6)

function miniMaxSum(arr) {
    // Write your code here
    const count = arr.length;
    let sum = [];
    
    for(let i = 0; i < count; i++) {
        let t = 0
        let tem = [...arr]
        tem.splice(i, 1)
        for(let j = 0; j < tem.length; j++) {
            t+=tem[j];
        }
        sum.push(t)
    }
    console.log( Math.min(...sum), Math.max(...sum));
}
miniMaxSum([5, 5, 5, 5 , 5])