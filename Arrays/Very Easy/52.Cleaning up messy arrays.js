
// Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

// Examples
// cleanUpArray(["8"]) ➞ [[8], []]

// cleanUpArray(["11"]) ➞ [[], [11]]

// cleanUpArray(["7", "4", "8"]) ➞ [[4, 8], [7]]

// cleanUpArray(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]
// Notes
// All numbers will be positive integers.
// function cleanUpArray(arr) {

//     var a = arr.map(Number);
//     for (i = 0; i < arr.length; i++) {

//         if (a % 2 == 0) {
//             arr[0] = a;

//         } else{
//         arr[0] = [];
//     }

//         if (a % 2 !== 0) {

//             arr[1] = a;

//         } else {

//             arr[1] = [];

//         }

//     }
//         return arr

// // }
// console.log(cleanUpArray(["8"]));
// console.log(cleanUpArray(["11"]));
// console.log(cleanUpArray(["7", "4", "8"]));
// console.log(cleanUpArray(["9", "4", "5" ,"8"]));
// function cleanUpArray(arr) {

//     var a = arr.map(Number)
//     var c = a.map(element => (element % 2 !== 0) ? []: element);
//     return c;
// }


function cleanUpArray(arr) {

    // var x = arr.map(Number);
    // console.log(x);
    // var a = x.filter((element) => (element % 2 == 0));
    // var b = x.filter((element) => (element % 2 !== 0));

    // return [a, b];
    const oddNumber = [];
    const evenNumber = [];



    // const oddAndEven = (number) => {

    //     const newNumber = +number
    //     if (newNumber % 2 == 0) {
    //         evenNumber.push(newNumber);
    //     }
    //     else {
    //         oddNumber.push(newNumber);
    //     }
    // }
    // arr.forEach(oddAndEven);
    // return [oddNumber, evenNumber]


    // --- for loop---
    for (let i = 0; i < arr.length; i++) {


        const newNumber = +arr[i];  // + is used to change into number - it converts from sttring to number
        if (newNumber % 2 == 0) {
            evenNumber.push(newNumber);
        }
        else {
            oddNumber.push(newNumber);
        }
    }

    return [oddNumber , evenNumber]



    
    


    // // // ------ for of function


    // for (const number of arr) {

    //     console.log(number)
    //     const newNumber = +number
    //     if (newNumber % 2 == 0) {
    //         evenNumber.push(newNumber);
    //     }
    //     else {
    //         oddNumber.push(newNumber);
    //     }
    // }
    // return [oddNumber, evenNumber]




    // // ---- for in  ----------


    // for (const number in arr) {
    //     console.log(number);
    //     const newNumber = +arr[number]
    //     console.log()
    //     if (newNumber % 2 == 0) {
    //         evenNumber.push(newNumber);
    //     }
    //     else {
    //         oddNumber.push(newNumber);
    //     }
    // }
    // return [oddNumber, evenNumber]



}


console.log(cleanUpArray(["8"]));
console.log(cleanUpArray(["11"]));
console.log(cleanUpArray(["7", "4", "8"]));
console.log(cleanUpArray(["9", "4", "5", "8"]));

