//Write a function that takes an array of numbers and removes the first and last elements of the array, then returns the modified array.
function trimArray(array=[]) {
    array.pop();
    array.shift();
    return array;
}
console.log(trimArray([1,2,3,4]));


//Write a function that takes an array of strings and adds a new string to the beginning and to the end of the array, then returns the modified array.
function expandArray(array =[''], firstString = string, secondString = string) {
    array.unshift(firstString);
    array.push(secondString);
    return array;
}
console.log(expandArray(['b','c'], 'a', 'd'));

//Write a function that takes an array of numbers and returns true if the array includes the number 5, and false otherwise.
function isFive(array=[]) {
    if (array.includes(5)) return array.includes(5);
    else return array.includes(5);
}
console.log(isFive([1,5,6,3]));
console.log(isFive(['1','3','5','7']));

//Write a function that takes two arrays of numbers and returns a new array that combines the elements of both arrays. 
function combineArrays(arrayOne=[],arrayTwo=[]) {
    let arrayThree =arrayOne.concat(arrayTwo);
    return arrayThree;
}
console.log(combineArrays([1,2,3],[4,5,6]));
console.log(combineArrays(['1','2','3'],['4','5','6']));

//Write a function that takes an array of numbers and a number n, and returns true if the number n appears in the array, and false otherwise.
function isN(array=[],n) {
    if (array.includes(n)) return array.includes(n);
    else return array.includes(n);
}
console.log(isN([1,5,6,3],3));
console.log(isN([1,3,5,7],2));

//Write a function that takes an array of strings and a string s, and returns the index of the first occurrence of the string s in the array.
function whereString(array = [''],s =string) {
    return array.indexOf(s);
}
console.log(whereString(['a','b','c','d','d'],'d'));

//Write a function that takes an array of numbers and returns a new array with the elements in the reverse order.
function transposeArray(array = []) {
    let arrayReversed =array.reverse();
    return arrayReversed;
}
console.log(transposeArray([1,2,3,4,5,6]));

//Write a function that takes an array of numbers and returns a new array with the elements in the reverse order only if the array length is between 5 to 10.
function transposeLongArray(array = []) {
    if(array.length >= 5 && array.length <= 10 ) {
        let arrayReversed =array.reverse();
        return arrayReversed;
    }
}
console.log(transposeLongArray([1,2,3,4,5,6]));
console.log(transposeLongArray([1,2,3,4]));
console.log(transposeLongArray([1,2,3,4,5,6,7,8,9,10]));

//Write a function that takes an array of numbers and a number n, and returns a new array with the elements in the reverse order, but with the first element removed, if the number n appears in the array. If n does not appear in the array, the function should return the original array. 

function isNAndReverse(array=[],n) {
    if (array.includes(n)){
       let reverseArray = array.reverse(array.splice(array.indexOf(n),1,))
       return reverseArray
    } 
    else return array;
}
console.log(isNAndReverse([1,2,5,3,4],3));


//Write a JavaScript function to clone an array.
function cloneArray(array =[]) {
    let newArray = [...array];
    return newArray;
}
console.log(cloneArray([1,23,43,3]));

// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
// For Example :
function firstN(array = [], index) {
    let slicedArray = array.slice(0,index);
    return slicedArray;
}
console.log(firstN([1,2,3,4],2));
console.log(firstN([1,2,3,4]));

//Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
function lastN(array = [], index) {
    if (index === undefined) {
        return array.pop()
    }
    else {
        let slicedArray = array.slice(-index);
        console.log(array.length-index);
        return slicedArray;
    }

}
console.log(lastN([1,2,3,4],2));
console.log(lastN([1,2,3,4]));

//Write a function that checks whether the first and last elements are equal. If they are equal - return true otherwise return false.
function indexEqual(array =[]) {
    let firstIndex = array.shift();
    let lastIndex = array.pop();
    if(firstIndex === lastIndex) {
        return true
    }
    else return false
}
console.log(indexEqual([1,2,3,1]));
console.log(indexEqual([1,2,3,2]));

//Write a function that checks whether the edges of the array are equal (first and last element) and if so, check how many members are between the edges. If not, return false
function isEqualAndLength(array =[]) {
    let firstIndex = array.shift();
    let lastIndex = array.pop();
    if(firstIndex === lastIndex) {
        return array.length
    }
    else return false
}

console.log(isEqualAndLength([1,2,3,1]));
console.log(isEqualAndLength([1,2,3,2]));
