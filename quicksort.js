/**
 * @author {
 * "name": "AlanJoose",
 *  "email": "alanjsyt@gmail.com",
 *  "github": "AlanJoose"
 * }
 * 
 * @abstract(
 * Example of a quicksort algorithm
 *  based on what is presented in the
 *  book 'Understanding Algorithms'
 *  by Aditya Y. Barghava.)
 * 
 * @version 0.0.1
 * 
 * Feel free to study and improve this code.
 */

console.log("\nOutput: " + quicksort([300, -10, 7.9, 2, 1, 8999, 534]) + '\n');
//This output [-10 1 2 7.9 300 534 8999];

/**
 * Main function of callstack, using recursive case to return an organized array.
 * @param {*} array 
 * @returns 
 */
function quicksort(array)
{
    try {
        let pivot = array[getRandomInteger(array.length)];
        let smallers = getArraySmallers(array, pivot);
        let biggers = getArrayBiggers(array, pivot);

        if(array.length < 2) {
            return array;
        }
        else {
            return (quicksort(smallers) + " " + [pivot] + " " + quicksort(biggers)).trim();
        }
    } catch (error) {
        return error.message;
    }
}

/**
 * Used to get the biggers numbers from quicksort array param.
 * @param {*} array 
 * @param {*} pivot 
 * @returns 
 */
function getArrayBiggers(array, pivot)
{
    let biggers = [];
    for(let index = 0; index < array.length; index++) {

       checkForTypeMismatch(array[index]);

       if(array[index] > pivot) {
        biggers.push(array[index]);
       }
    }

    return biggers;
}

/**
 * Used to get the smallers numbers from quicksort array param.
 * @param {*} array 
 * @param {*} pivot 
 * @returns 
 */
function getArraySmallers(array, pivot)
{
    let smallers = [];
    for(let index = 0; index < array.length; index++) {

       checkForTypeMismatch(array[index]);;

       if(array[index] < pivot) {
        smallers.push(array[index]);
       }
    }

    return smallers;
}

/**
 * Throw an error case the current array element type isn't a number.
 * @param {*} element 
 */
function checkForTypeMismatch(element)
{
    if(typeof element != "number") {
        throw new Error("\nError: The element "+element+" isn't a numeric type.\n");
    }
}

/**
 *  Used to generate the pivot number, base number from quicksort algorithm.
 * @param {*} max 
 * @returns 
 */
function getRandomInteger(max)
{
    return Math.floor(Math.random() * max);
}