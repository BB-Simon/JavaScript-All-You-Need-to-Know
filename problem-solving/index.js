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
// const h = hurdleRace(4, height);

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
// designerPdfViewer(heightOfEachChar, 'zaba');

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

// utopianTree(4);


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

// angryProfessor(3, [-1, -3, 4, 2])

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

// beautifulDays(20, 23, 6)

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
// permutationEquation([4, 3, 5, 1,2])


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
// jumpingOnClouds(c, 2)

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

// findDigits(1012)

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
// viralAdvertising(3)

function saveThePrisoner(n, m, s) {
    let rem = m % n;
    return (rem + s - 1) % n || n;

}
// saveThePrisoner(7, 19, 2)

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
// circularArrayRotation([3, 4, 5], 2, [1, 2])

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
// gradingStudents([73, 67, 38, 33])

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

// countApplesAndOranges(2, 3, 1, 5, [-2], [-1])


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
// kangaroo(0, 2, 5, 3)

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

// getTotalX([2, 4], [16, 32, 96])

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
// breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])


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
// birthday([4], 4, 1)

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
// divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])



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

// combinedProductAndServiceOptions(config);

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

// diagonalDifference(arr)

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
// plusMinus([-4, 3, -9, 0, 4, 1])

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

// staircase(6)

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
// miniMaxSum([5, 5, 5, 5 , 5])

/**
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    const max = Math.max(...candles);
    let t = 0;
    for(let i = 0; i < candles.length; i++) {
        if(candles[i] === max) {
            t++
        }
    }
    return t
}
// birthdayCakeCandles([3, 2, 1, 3])

/**
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const [hour, minutes, rest] = s.split(':');
    const seconds = rest.slice(0, 2);
    const modifire = rest.slice(2)
    let hh = hour, mm = minutes, ss = seconds;
    if(modifire.toLowerCase() === "pm" && parseInt(hour, 10) !== 12) {
        hh = parseInt(hour, 10) + 12;
    } else if(modifire.toLowerCase() === "am" && parseInt(hour, 10) === 12) {
        hh = '00'
    }
    console.log(`${hh}:${mm}:${ss}`);
}

// timeConversion('12:45:54PM')


/**
 * Complete the 'quickSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function quickSort(arr) {
    // Write your code here
    const pivot = arr[0]
    const left = [];
    const right = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > pivot){
            right.push(arr[i])
        } else if(arr[i] < pivot){
            left.push(arr[i])
        }
    }

    console.log([...left, pivot, ...right])
}

// quickSort([4, 5, 3, 7, 2])

/**
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Write your code here
    const zeros = Array.from({length:100},()=> 0)
    const range = [...Array(100).keys()]
   
    for(let i = 0; i < range.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(range[i] === arr[j]){
                zeros[i]+=1
            }  
        }
        
    }
    return zeros

}
const f = [63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 
    76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 
    27, 32, 18, 21, 92, 69, 81, 40, 40, 34 ,68, 78, 24, 87, 42, 69, 23, 41, 
    78, 22, 6 ,90 ,99 ,89 ,50 ,30 ,20 , 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48 ,
    33, 60, 65, 16, 82, 67, 61, 32, 21, 79 ,75, 75, 13, 87, 70, 33]

// countingSort(f)

function countingSort2(arr) {
    // Write your code here
    const zeros = []
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const range = []
    for(let i = min; i <= max; i++) {
        range.push(i)
    }
  
    for(let i = 0; i < range.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(range[i] === arr[j]){
                zeros.push(arr[j])
            }  
        }  
    }
    return zeros
}

// countingSort2([19, 10, 12, 10, 24, 25, 22])


// let n = 0;
let x = 0;
// while (n < 3) {
//     n++
//     x = x + n
// }

for(let n = 0; n <= 3; n++){
    x = x + n
}


/**
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    let total = -1;

    for(let i = 0; i < keyboards.length; i++){
        for(let j = 0; j < drives.length; j++){
            let x = keyboards[i] + drives[j];
            if(x > total && x <= b){
                total = keyboards[i] + drives[j];
            }
        }
    }
    console.log(total);
}

const keyboard = [3, 1, 80];
const drives = [5, 2, 8, 12, 34, 45];
// getMoneySpent(keyboard, drives, 100);


/**
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
function camelcase(s) {
    let count = 1;
    for(let i = 0; i < s.length; i++){
        if(/[A-Z]/.test(s[i])) {
            count++;
        }
    }

    return count;
}

// camelcase('saveChangesInTheEditor')

/**
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let seaLevel = 0;
    let flag = false;
    let valleycount = 0;
        
    for(let i = 0; i < steps; i++) {
        if(path[i] == 'D' && seaLevel == 0) flag = true;
        if(path[i] == 'U' && seaLevel == 0) flag = false;
        if(path[i] == 'U') seaLevel++;
        if(path[i] == 'D') seaLevel--;
        if(flag && seaLevel == 0) valleycount++;
    }

    console.log(valleycount);

    return valleycount;
}

// countingValleys(8, 'UDDDUDUU')


/**
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    // Write your code here
    // const sos = 'SOS';
    // const len = s.length / sos.length;
    // let modifiedCount = 0;

    // for(let i = 0; i < len; i++){
    //     for(let j = 0; j < sos.length; j++){
    //         if(sos[j] !== s[j]) {
    //             modifiedCount++;
    //         }
    //     }
    //     s = s.slice(sos.length);
    // }
    // return modifiedCount;

    const n = s.length;
    const r = "SOS".repeat(n / 3);
    let t = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] !== r[i]) {
            t++;
        }
    }
    console.log(t);
    return t;

}

// marsExploration('SOSSOSSSSOSOIEISOSPOISOSIUSISO')

/**
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    let pairs = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            const sum = ar[i] + ar[j];
            if(i < j && sum % k === 0 ) {
                pairs+=1;
            }
        }
    }
    return pairs;
}

// divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])

/**
 * Complete the 'hackerrankInString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function hackerrankInString(s) {
    const base = 'hackerrank';
    let b = 0;

    for(let i=0; i < s.length; i++) {
        if(s[i] === base[b]) {
            b++;
        }
    }

    if(b === base.length) {
        return 'Yes'
    } else {
        return 'No'
    }
}

// hackerrankInString('hereiamstackerrank');

/**
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    const str = s.replace(/\s/g,'').toLowerCase();
    const alphas = {};
    for(let i = 0; i < str.length; i++){
        if(Object.keys(alphas).includes(str[i])){
            alphas[str[i]] += 1
        } else {
            alphas[str[i]] = 1
        }
    }

    if(Object.keys(alphas).length === 26){
        return 'pangram '
    } else {
        return 'not pangram'
    }
}

// pangrams('We promptly judged antique ivory buckles for the next prize')

/**
 * Complete the 'weightedUniformStrings' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY queries
 */

function weightedUniformStrings(s, queries) {
    /**
     * First solution
     */

    // const alphaCode = Array.from(Array(26)).map((e, i) => i + 65);
    // const alphabet = alphaCode.map((x) => String.fromCharCode(x).toLowerCase());
   
    // const arr = s.split('');
    // let q = 1;
    // const u = [];

    // arr.forEach((e, i) => {
    //     if(e === arr[i + 1]){
    //         q += 1;
    //         return;
    //     }
    //     let x = 1;
    //     while(x <= q){
    //         u.push(x * (alphabet.indexOf(e) + 1))
    //         x++
    //     }
    //     q = 1
    // });
    

    // const y = queries.map((e, i) => {
    //     if(u.includes(e)){
    //         return 'Yes'
    //     } else {
    //         return "No"
    //     }
    // });
    // return y

    const substr = s.match(/(.)\1{0,}/g);
    let weights = new Set();
    let ans = [];

    
    for (let i = 0; i < substr.length; i++) {
        for (let count = 1; count <= substr[i].length; count++) {
            weights.add((substr[i].charCodeAt(0) - 96) * count);
        }
    }

    queries.forEach(val => {
        const include = weights.has(val) ? 'Yes' : 'No';
        ans.push(include);
    });
    
    return ans
}

// weightedUniformStrings('abccddde', [1, 3, 12, 5, 9, 10])

/**
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


function funnyString(s) {
    // Write your code here
    const sCharCode = [];
    for (let i = 0; i < s.length; i++) {
        sCharCode.push(s.charCodeAt(i))
    };

    const rCharCode = [...sCharCode].reverse();
    for(let i = 1; i < sCharCode.length; i++){
        const sCode = Math.abs(sCharCode[i] - sCharCode[i-1]);
        const rCode = Math.abs(rCharCode[i] - rCharCode[i-1]);
        if(sCode !== rCode){
            return "Not Funny"
        };
    }
    return 'Funny'
}

// console.log(funnyString('acxz'));

/**
 * Complete the 'gemstones' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY arr as parameter.
 */

function gemstones(arr) {
    // Write your code here;
    let s = new Set(arr[0]);
    // for(let i = 0; i < arr.length; i++) {
    //     const x = new Set(arr[i])
    //     s = new Set([...s].filter(e => x.has(e)))
    // }
    let i = 0;
    while(i !== arr.length) {
        const x = new Set(arr[i]);
        s = new Set([...s].filter(e => x.has(e)));
        i+= 1;
    }
    return s.size
}

// gemstones(['abcdddd', 'abcd', 'bcd'])

/**
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternatingCharacters(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[i-1]) count+= 1;
    }
    
    console.log(count);
    return count;
}

// alternatingCharacters('AABBBBbbbbaaaAB');

/**
 * Complete the 'beautifulBinaryString' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING b as parameter.
 */

function beautifulBinaryString(b) {
    // Write your code here
    let moves = 0;
    let i = 0;

    while(i < b.length){
        const sub = b.substr(i, 3);
        if(sub === "010") {
            moves++;
            i+=3
        } else i++;
    }
   
    return moves;
}

// beautifulBinaryString('0100101010');

/**
 * Complete the 'theLoveLetterMystery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function theLoveLetterMystery(s) {
    let str = [...s].map(e=>e.charCodeAt(0))
    let ans = 0;
     for(let i=0; i < str.length / 2; i++){
        ans += Math.abs(str[(str.length - 1) - i] - str[i])
    }

    return ans;
}

// theLoveLetterMystery('feazhaxpux')




const isPalindrome = word => {
  const reversedWord = [...word].reverse().join('');
  return word === reversedWord;
};

const allSubstringsOfWord = word => {
  const substrings = [];
  const arrayA = [...word];
  let subStringALength = 1;
  while (subStringALength <= arrayA.length) {
    for (let i = 0; i <= arrayA.length - subStringALength; i++) {
      const newWord = arrayA.slice(i, i + subStringALength);
      substrings.push(newWord.join(''));
    }
    subStringALength++;
  }
  return substrings;
};

/**
 * Complete the 'buildPalindrome' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function buildPalindrome(a, b) {
    const subStringsA = allSubstringsOfWord(a);
    const subStringsB = allSubstringsOfWord(b);

    const multiplexedArray = subStringsA.flatMap(wordA => subStringsB.map(wordB => wordA + wordB));
   
//    console.log(multiplexedArray);
    
   const bestPalyndrome = multiplexedArray.reduce((acc, cur) => {
        const word = cur;
        if (isPalindrome(word)) {
        if (word.length > acc.length) {
            return word;
        } else if (word.length === acc.length) {
            if (acc < word) {
            return acc;
            }
            return word;
        }
        }
        return acc;
    }, '');
    if (bestPalyndrome === '') return -1;

    // console.log(bestPalyndrome);
    return bestPalyndrome;

}

// buildPalindrome('bac', 'bac')


/**
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function gameOfThrones(s) {
    let odds = 0
    const count = (i) => s.split().reduce((a, b) => a + (b === i), 0);
 
    while(s){
        if(odds > 1) {
            return 'NO'
        }
        console.log(count(s[0]))

        if(count(s[0]) % 2 == 1) {
            odds += 1
        }
        s = s.slice(1)
    }
        
    return 'YES'
}

// const a = gameOfThrones('cdefghmnopqrstuvw');

/**
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
    // Write your code here
    const len = s.length;
    if(len % 2 !== 0){
        return -1;
    }

    const d = Math.floor(len / 2);
    const a = s.slice(0, d).split('');
    const b = s.slice(d).split('');
    let c = 0;
    for(let i = 0; i < a.length; i++){
        if(!b.includes(a[i])){
            c+= 1;
        } else {
            b.splice(b.indexOf(a[i]), 1);
        }
    }
    return c;
}

// console.log(anagram('xyyx'));

/**
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

//  s1 = list(s1)
//     s2 = list(s2)
//     i = 0
//     while i < len(s1):
//         if s1[i] in s2:
//             s2.remove(s1[i])
//             s1.remove(s1[i])
//             continue
//         i += 1
//     return len(s1) + len(s2)

function makingAnagrams(s1, s2) {
    // Write your code here
    const str1 = s1.split('');   
    const str2 = s2.split(''); 
    let i = 0;
    
    while(i < str1.length) {
        if(str2.includes(str1[i])) {
            str2.splice(str2.indexOf(str1[i]), 1);
            str1.splice(str1.indexOf(str1[i]), 1);
            continue
        }
        i+= 1;
    }
    console.log(str1.length + str2.length);
}

// makingAnagrams('abc', 'amnop')

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let res = '';
    strs = strs.sort();
    const first = strs[0];
    const last = strs[strs.length - 1]
    const len = Math.min(first.length, last?.length);

    for (let i = 0; i < len; i++) {
        if (first[i] !== last[i]) {
            return res
        } else {
            res += first[i]
        }
    }
    return res
};

// longestCommonPrefix(["aaa", "aa", "aaa"])

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    // const roman = {
    //     'I': 1,
    //     'V': 5,
    //     'X': 10,
    //     'L': 50,
    //     'C': 100,
    //     'D': 500,
    //     'M': 1000,
    // }
    
    // let res = 0;
    // let i = s.length -1;

    // while(i >= 0){
    //     console.log(s[i]);
    //     if((s[i] === 'V' || s[i] === 'X') && s[i - 1] === 'I'){
    //         res+= roman[s[i]] - roman[s[i - 1]]
    //         i-=2;
    //     } else if((s[i] === 'L' || s[i] === 'C') && s[i - 1] === 'X') {
    //         res += roman[s[i]] - roman[s[i - 1]]
    //         i -= 2;
    //     } else if ((s[i] === 'D' || s[i] === 'M') && s[i - 1] === 'C'){
    //         res+= (roman[s[i]] - roman[s[i - 1]])
    //         i -= 2;
    //     } else {
    //         res += roman[s[i]];
    //         i--;
    //     }
    // }

    // return res;

    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let res = 0;
    let i = 0;

    while (i < s.length) {
        const curr = roman[s[i]];
        const next = roman[s[i + 1]];
        if (curr < next) {
            res += next - curr;
            i += 2
        } else {
            res += curr
            i++
        }
    }

    return res;
};

// romanToInt("MCMXCIV")

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let ans = 1;
    for (let i = 1; i < nums.length; i++){
        // console.log(i);
        if (nums[i] != nums[i - 1]) {
            nums[ans] = nums[i];
            ans++;
        }
    }
    return ans;
};

// const k = removeDuplicates([1, 1, 2]);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    // let output = nums.indexOf(target);
    // if (output === -1) {
    //     for (let i = 0; i < nums.length; i++) {
    //         if (nums[i] >= target) {
    //             output = i;
    //             break
    //         } else {
    //             output = nums.length;
    //         }
    //     }
    // }
    // return output;
    let i = nums.findIndex(n => n >= target);
    return i > -1 ? i : nums.length;
};

searchInsert([1, 3, 5, 6], 7)

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let x = (BigInt(digits.join("")) + 1n);
    return x.toString().split("").map((y) => parseInt(y))
};

function fib(n){
    // if(n === 1) return 0;
    // if(n === 2) return 1;
    if(n <= 2){
        return 1;
    }

    // let n1 = 0;
    // let n2 = 1;
    // let x;
    // let i = 0;

    // while(i <= n){
    //     x = n1 + n2;
    //     n1 = n2
    //     n2 = x;
    //     console.log(x);
    //     i+= 1;
    // }
    // for(let i = 2; i <= n; i++){
    //     x = n1 + n2;
    //     n1 = n2;
    //     n2 = x;
    // }
    // console.log(n2);

    return fib(n - 1) + fib(n - 2);
}

// console.log(fib(4));

function sum(n){
    // let x = 0;
    // for(let i = 1; i <=n; i++){
    //     // console.log(i);
    //     x+= i;
    // }
    if(n === 0){
        return 1
    }
    return n * sum(n-1);

}

// console.log(sum(3));
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) {
        return n
    }

    let n1 = 1, n2 = 1, x;
    let i = 2;
    while (i <= n) {
        x = n1 + n2;
        n1 = n2;
        /*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    // Write your code here

}
        n2 = x;
        i += 1;
    }
    return x;
};

// climbStairs(5)

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let x = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '++X' || operations[i] === 'X++') {
            x += 1;
        } else {
            x -= 1;
        }
    }
    return x;
};

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let balance = 0;
    let split = 0;

    for (let i of s) {
        if (i === 'R') balance += 1
        else if (i === 'L') balance -= 1
        if (balance === 0) split++
    }
    return split
};

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    // let obj = {};
    // let res = '';
    // for (let i = 0; i < s.length; i++) {
    //     obj = { ...obj, [indices[i]]: s[i] }
    // }
    // Object.keys(obj).forEach((k) => res += obj[k]);

    // return res;

    let arr = [];
    for (let i = 0; i < s.length; i++) {

        arr[indices[i]] = s[i]
    }

    return arr.join('');
};


/** 
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */
function jumpingOnClouds(c) {
    // Write your code here
    let jumps = 0;

    for (let i = 0; i < c.length - 1;) {
        if (c[i + 2] === 0) {
            jumps++;
            i += 2
        } else {
            jumps++;
            i += 1
        }
    }
    return jumps;
}

// jumpingOnClouds([0, 0, 0, 0, 1, 0])

/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    // Write your code here
    const getDay = () => {
        if (year === 1918) return 26;
        if (year % 4 === 0) {
            if (year < 1919 || year % 400 === 0 || year % 100 !== 0) {
                return 12
            };
        }
        return 13;
    }
    return `${getDay()}.09.${year}`;
}

// console.log(dayOfProgrammer(2017))


function stringOccerences(str, n) {
    const counts = {};

    for(let i = 0; i < str.length; i++){
        counts[str[i]] = counts[str[i]] ? counts[str[i]] + 1 : 1; 
    }
    console.log(counts);
    return counts[n];
}

// console.log(stringOccerences('ssiiimonnnnn', 'n'))

/*
 * Complete the 'biggerIsGreater' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING w as parameter.
 */

function biggerIsGreater(w) {
    // Write your code here
    // w = list(w)
    // d = {}

    // for i in range(len(w) - 1, 0, -1):
    //     if ord(w[i]) not in d:
    //         d[ord(w[i])] = i
    //     if ord(w[i]) > ord(w[i - 1]):
    //         swap = ord(w[i - 1]) + 1
    //         while swap not in d:
    //         swap += 1
    //         j = d[swap]
            // w[i - 1], w[j] = w[j], w[i - 1]
            // w[i:] = w[i:][:: -1]
            // return ''.join(w)

    // return 'no answer'

    let chars = w.split('');
    const charCodes = {};
    for(let i = w.length - 1; i >= 0; i--){
        if (!charCodes[w[i].charCodeAt()]) {
            charCodes[w[i].charCodeAt()] = i;
        } 

        if (w[i].charCodeAt() > w[i - 1]?.charCodeAt()){ 
            let swap = w[i - 1].charCodeAt() + 1;
            while (!charCodes[swap]){
                swap+=1;
            }
            let j = charCodes[swap];
            [chars[i - 1], chars[j]] = [chars[j], chars[i - 1]]
            let lastIdx = chars[i];
            chars[i] = chars[chars.length - 1];
            chars[chars.length - 1] = lastIdx;
            return chars.join('')
        }
    }

    return 'no answer'
}

// biggerIsGreater('xildrrhpca');

/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

// const range = (a, b) => a > b ? [] : [a, ...range(a + 1, b)];
const range = (a,  b) => {
    let arr = [];
    for (a; a <= b; a++) {
        arr.push(a)
    }
    return arr;
};

function kaprekarNumbers(p, q) {
    // Write your code here
    const res = []
    for(let num of range(p, q)){
        let sqr = num*num;
        let str_sqr = sqr.toString();
        let d = num.toString().length;
        let r = str_sqr.slice(-d);
        let l = str_sqr.slice(undefined,-d) || '0';
        if((parseInt(r) + parseInt(l)) === num){
            res.push(num)
        }
    }

    if(res.length === 0) {
        console.log('INVALID RANGE')
    } else {
        console.log(res.join(' '))
    }
}

// kaprekarNumbers(1, 10000);


/*
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function beautifulTriplets(d, arr) {
    // Write your code here

    const mySet = new Set(arr);
    let count = 0;
    for(let i = 0; i < arr.length - 2; i++) {
        if (mySet.has(arr[i] + d) && mySet.has(arr[i] + (2 * d))){
            count +=1;
        }
    }
    return count;
}

// console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]))

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    const socks = {};
    for(let item of ar){
        socks[item] = socks[item] ? socks[item] += 1 : 1;
    }
    return Object.entries(socks).reduce((acc, item) => (acc += Math.floor(item[1] / 2)), 0);
}

// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))


/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

function formingMagicSquare(s) {
    // Write your code here
    const magicSquare = [[], [], []]
    let coordinates = [0, 1]
    const range = Array(9).fill(null).map((_, i) => (i + 1))
    const thirdRow = 2
    range.forEach(int => {
        const y = coordinates[0]
        const x = coordinates[1]
        magicSquare[y][x] = int
        const nextY = y === 0
            ? coordinates[0] = thirdRow
            : coordinates[0] = y - 1
        const nextX = x === thirdRow
            ? coordinates[1] = 0
            : coordinates[1] = x + 1
        if (magicSquare[nextY][nextX] > 0) {
            coordinates[0] = y + 1
            coordinates[1] = x
        }
    })
    return magicSquare
}

const s = [
    [4, 8,2],
    [4, 5, 7],
    [6, 1, 6],
];

// console.log(formingMagicSquare(s));

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
function pickingNumbers(a) {
    // Write your code here
    // max_subset = 0
    // for num in a:
    //     same = sum(map(lambda x: 1, filter(lambda x: x == num, a)))
    //     below = sum(map(lambda x: 1, filter(lambda x: x == num - 1, a)))
    //     above = sum(map(lambda x: 1, filter(lambda x: x == num + 1, a)))
    //     max_subset = max(max_subset, same + below, same + above)
    // return max_subset

    a = a.sort((a, b) => a - b);
    console.log(a)

}

// console.log(pickingNumbers([1, 2, 2, 3, 1, 2]))

/*
 * Complete the 'stones' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER a
 *  3. INTEGER b
 */

function stones(n, a, b) {
    // Write your code here 
    const lastStones = [];
    let i = n-1;
    let j = 0;
    while(i >= 0){
        lastStones.push((a * i) + (b * j));
        i-=1;
        j+=1;
    }
    return [...new Set(lastStones)].sort((a, b) => a - b);
}

// stones(3, 1, 2);

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */


Rectangle.prototype.area = function(){
    return this.w * this.h
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle {
    constructor(w, h) {
        super(w, h)
    }
}

// const sqr = new Square(4, 4);
// console.log(sqr.area())

function relativeSortArray(arr1, arr2) {
    const res = [];
    const res2 = []
    for (let i of arr2) {
        for (let j of arr1) {
            if (i === j) {
                res.push(j)
            }
        }
    }

    for (let i of arr1) {
        if (!res.includes(i)) {
            res2.push(i)
        }
    }

    return res.concat(res2.sort((a, b) => a - b))

};

// const arr1 = [2, 3, 1, 3, 2, 4, 6, 4, 7, 9, 2, 19]
// const arr2 = [2, 1, 4, 3, 9, 6]
// relativeSortArray(arr1, arr2);

/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

function acmTeam(topic) {
    // Write your code here
    // n = len(topic)
    // d = {}
    // for i in range(n - 1):
    //     for j in range(i + 1, n):
    //         ipos = [index for index, char in enumerate(topic[i]) if char == '1']
    //         jpos = [index for index, char in enumerate(topic[j]) if char == '1']
    //         tmp = len(set(ipos + jpos))
    //         d[str(i) + str(j)] = tmp
    // mv = max(d.values())
    // mk = [key for key, value in d.items() if value == mv]
    // return mv, len(mk)

    const n = topic.length;
    const d = {};

    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++) {
            
        }
    }

}


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let low = 0  
    let mid = 0 
    let high = nums.length - 1;

    while (mid <= high){
        if (nums[mid] === 0){
            let temp = nums[mid];
            nums[mid] = nums[low];
            nums[low] = temp;
            low += 1
            mid += 1
        } else if (nums[mid] === 1) {
            mid += 1
        } else {
            let temp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp;
            high -= 1
        }
    }
    return nums

};

// console.log(sortColors([2, 0, 2, 1, 1, 0]))


/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let val = init;
    return {
        increment() {
            return init += 1;
        },
        decrement() {
            return val -= 1;
        },
        reset() {
            return val;
        }
    }
};


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 6
console.log(counter.decrement()); // 6
