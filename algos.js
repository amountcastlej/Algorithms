// Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.

function incrementSeconds(arr){
    for(var i = 1; i < arr.length; i+=2){
        arr[i] = arr[i] + 1;
    }
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    return arr;
}

console.log(incrementSeconds([1,2,3,4,5]));



// Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].

function previousLengths(arr){
    for (var i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}

// console.log(previousLengths(["hello", "dojo", "awesome"]));

// Add Seven to Most - Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

function sevenMore(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(arr[i]+7);
    }
    return newArr;
}

// console.log(sevenMore([0,1,2,3]));

// Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverse(arr){
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

console.log(reverse([3,1,6,4,2,5]));



// Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function negativeMaker(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arr[i] = arr[i]*-1;
        }
        newArr.push(arr[i]);
    }
    return newArr;
}

// console.log(negativeMaker([1,-3,5]));