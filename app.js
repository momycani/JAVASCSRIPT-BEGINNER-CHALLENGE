/* MEDIUM CHALLENGE */

/* QUESTIONS 1 */
function falsyOrTruthy(a, b) {
    return !a ? a : b;
}
console.log(falsyOrTruthy(0, 500)); 
console.log(falsyOrTruthy(false, 100)); 
console.log(falsyOrTruthy([true, 'Dog'])); /*did not pass this test */

/* QUESTION 2 */
function arrLength(arr) {
    return arr.length;
}
console.log(arrLength([1, 2, 3]));
console.log(arrLength([5, 0, -4, 1]));
console.log(arrLength([]));

/* QUESTION 3 */
function lastElement(arr) {
    return arr[arr.length - 1];
}
console.log(lastElement([3, 2, 0, 6, 2]));
console.log(lastElement(['dog', 'cat', 'ball']));
console.log(lastElement([null, 5, false]));

/* QUESTION 4 */
function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
    // this is how to loop through every element in an array 
    sum += arr[i];
}
    return sum;
}

console.log(arrSum([2, 2, 2]));
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));

/* QUESTION 5 */
function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; ++i) {
        sum += i;
    }
    return sum;
}

console.log(progressiveSum(3));
console.log(progressiveSum(4));
console.log(progressiveSum(600));

/* QUESTION 6 */
function calcTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    if (mins.toString().length === 1) {
        mins = '0' + mins;
    }
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
console.log(calcTime(66));
console.log(calcTime(50));
console.log(calcTime(300));

/* QUESTION 7 */
function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(getMax([5, 100, 0]));
console.log(getMax([12, 10, -20]));
console.log(getMax([-300, -100, -200]));

/* QUESTION 8 */
//Incrementing loop
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; --i) {
        //This is how to loop through every element in a string  
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('abc'));
console.log(reverseString('David'));
console.log(reverseString('This is cool'));

/* QUESTION 9 */
function convertToZeros(arr) {
    let zerosArr = [];
    for (let i = 0; i < arr.length; ++i) {
        zerosArr.push(0);
    }

    return zerosArr;
}
console.log(convertToZeros([5, 100, 0]));
console.log(convertToZeros([12]));
console.log(convertToZeros([1, 2, 3, 4, 5]));

/* QUESTION 10 */
function removeApples(arr) {
    let noApplesArr = [];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 'Apple') {
            noApplesArr.push(arr[i]);
        }
    }
    return noApplesArr;
}
console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));
console.log(removeApples(['Tomato', 'Orange', 'Banana']));
console.log(removeApples(['Banana', 'Orange', 'Apple']));

/* QUESTION 11 */
//for loop
function filterOutFalsy(arr) {
    let truthyArr = [];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i]) {
            truthyArr.push(arr[i]);
        }
    }
    return truthyArr;
}
console.log(filterOutFalsy(["", [], 0, null, undefined, "0",]));
console.log(filterOutFalsy(['tomato', 'orange', 'banana', false]));
console.log(filterOutFalsy(['banana', 'orange', 'apple'])); //did not pass this test??

/* QUESTION 11 */
//array filter
// function filterOutFalsy(arr) {
//     return arr.filter(element == !!element == true)   
// }


// console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]));
// console.log(filterOutFalsy(['tomato', 'orange', 'banana', false]));
// console.log(filterOutFalsy(['banana', 'orange', 'apple']));

/* QUESTION 12 */
function convertToBoolean(arr) {
    let booleanArr = [];
    for (let i = 0; i < arr.length; ++i) {
        booleanArr.push(!!arr[i]);
    }
    return booleanArr;
}
console.log(convertToBoolean([500, 0, "David", "", []]));
console.log(convertToBoolean([null, "false", true, 0, 1, -1]));
console.log(convertToBoolean(["", NaN, undefined]));

/* USING MAP METHOD */
 function convertToBoolean(arr) {
    return arr.map(element => !!element);
}

console.log(convertToBoolean([500, 0, "David", "", []]));
console.log(convertToBoolean([null, "false", true, 0, 1, -1]));
console.log(convertToBoolean(["", NaN, undefined]));

/* END OF MEDIUM CHALLENGE */

/* HARD CHALLENGE */

/* QUESTION 1 */

function showRating(str) {
    let rating = '';
    for (let i = 0; i < Math.floor(Number(str)); ++i) {
        rating += ' ★';
    }
    if (str.includes('.5')) { //if (!Number.isInteger(Number(str))) {
        rating += ' .';
    }
    return rating;
}
console.log(showRating("3"));
console.log(showRating("4.5"));
console.log(showRating("0.5"))

/* QUESTION 2 */
function sortLowToHigh(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
console.log(sortLowToHigh([5, 10, 0, -5]));
console.log(sortLowToHigh([3, 2, 1, 0]));

/* HIGH TO LOW */
/* QUESTION 2 */
function sortLowToHigh(arr) {
    return arr.sort((a, b) => b - a);
}
console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
console.log(sortLowToHigh([5, 10, 0, -5]));
console.log(sortLowToHigh([3, 2, 1, 0]));

/* QUESTION 3 */  //FAILED TESTS
function sortHighToLow(numbers) {
    return numbers.sort((a, b) => b.price - a.price);
}

console.log(sortHighToLow([
    { id: 1, price: 50},
    { id: 2, price: 30},
    { id: 3, price: 60},
    { id: 4, price: 10},]));

    // QUESTION 4 */ WATCH VIDEOS ON YOUTUBE

    /* QUESTION 5 */ 
   async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

    const result = await promise.json();

    const posts = result.filter(element => element.userId === userId);

    console.log(posts);
    
   }
   postsByUser(4);

   /* QUESTION 6 */
   async function firstSixIncompleteTodos() {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await promise.json();

    const incompleteTodos = result.filter(element => element.completed === false).slice(0, 6);
    console.log(incompleteTodos);
    }
    firstSixIncompleteTodos();