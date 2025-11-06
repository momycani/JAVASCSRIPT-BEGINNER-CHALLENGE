/* BEGINNER CHALLENGE */

/* QUESTIONS 1 */
function addition(num1, num2) {
    return num1 + num2;
}
console.log(addition(3, 5));

function addition(num1, num2) {
    return num1 + num2;
}
console.log(addition(-3, -6));

function addition(num1, num2) {
    return num1 + num2;
}
console.log(addition(7, 3));

/* QUESTIONS 2 */
function convertHoursToSeconds(seconds) {
    return seconds * 60 * 60;
}
console.log(convertHoursToSeconds(2));
console.log(convertHoursToSeconds(10));
console.log(convertHoursToSeconds(24));

/* QUESTIONS 3 */
function calcPerimeter(num1, num2) {
    return (num1 + num2) * 2;
} 
console.log(calcPerimeter(6, 7));
console.log(calcPerimeter(20, 10));
console.log(calcPerimeter(2, 9));

/* QUESTIONS 4 */

function calcTriangleArea(base, height) {
    return (0.5 * base * height);
}
console.log(calcTriangleArea(3, 2));
console.log(calcTriangleArea(10, 10));
console.log(calcTriangleArea(20, 20));

/*QUESTIONS 5 */
function appendFrontend(str) {
    return str + "Frontend";
}
console.log(appendFrontend("Apple"));
console.log(appendFrontend("Banana"));
console.log(appendFrontend("Orange"));

/* QUESTIONS 6 */
function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100;   
}
console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));
console.log(sumGreaterThan100(100, -50));

/* QUESTIONS 7 */
function lessThanOrEqualToZero(num) {
    return num <= 0;
}
console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));

/* QUESTIONS 8 */
function oppositeBoolean(bool) {
    return !bool;
}
console.log(oppositeBoolean(true));
console.log(oppositeBoolean(false));

/* QUESTIONS 9 */
function isNotZero(num) {
    return num !== 0;
}
console.log(isNotZero(5));
console.log(isNotZero(0));
console.log(isNotZero(null));

/* QUESTIONS 10 */
function calcRemainder(num1, num2) {
    return num1 % num2;
}
console.log(calcRemainder(4, 2));
console.log(calcRemainder(7, 8));
console.log(calcRemainder(9, 8));

/* QUESTION 11 */
function isOdd(num) {
    return num % 2 !== 0;
}   
console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));

/* QUESTION 12 */
function booleanToInteger(num) {
    return num % 2 === 0 ? 1 : -1;
}
console.log(booleanToInteger(1));
console.log(booleanToInteger(2));
console.log(booleanToInteger(5));

/* QUESTION 13 */
function isLoggedInAndSubscribed(loggedIn, subscribed) {
  return (loggedIn === "LOGGED_IN") && (subscribed === "subscribed");
}
console.log(isLoggedInAndSubscribed("LOGGED_IN", "subscribed"));
console.log(isLoggedInAndSubscribed("LOGGED_IN", "unsubscribed"));
console.log(isLoggedInAndSubscribed("LOGGED_OUT", "subscribed"));

/* QUESTION 14 */
function isLoggedInOrSubscribed(loggedIn, subscribed) {
    return (loggedIn === "LOGGED_IN") || (subscribed === "subscribed");
}
console.log(isLoggedInOrSubscribed("LOGGED_IN", "unsubscribed"));
console.log(isLoggedInOrSubscribed("LOGGED_OUT", "subscribed"));
console.log(isLoggedInOrSubscribed("LOGGED_OUT", "unsubscribed"));  