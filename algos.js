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

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once. Example: [1,"food",true, "food"] ==> "yummy" "yummy". [1,2,4,"sleep"] ==> "I'm hungry"

function hungry(arr){
    var gotFood = false;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === "food"){
            console.log("yummy");
            gotFood = true;
        }
    }
    if (gotFood == false){
        console.log("I'm hungry");
    }
}

// hungry([1,2,4,"sleep"]);

// Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swapTowardCenter(arr){
    for (var i = 0; i < arr.length/2; i+=2){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

// console.log(swapTowardCenter([1,2,3,4,5,6]));

// Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].

function scaleArray(arr, num){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*num;
    }
    return arr;
}
// console.log(scaleArray([1,2,3,4],4));

//Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number(inclusive).Ex: sigma(3) = 6(or 1 + 2 + 3);
// sigma(5) = 15(or 1 + 2 + 3 + 4 + 5).
function sigma(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
    sum += i;
}
    
    return sum;
}
// sigma(5);
// sigma(4);
// sigma(3);
// sigma(2);

//Factorial - Write a function factorial(num) that, given a number, returns the product(multiplication) of all positive integers from 1 up to the given number(inclusive).
// For example, factorial(3) = 6(or 1 * 2 * 3); factorial(5) = 120(or 1 * 2 * 3 * 4 * 5).
function factorial(num) {
    var product = 1;
    for (var i = 1; i <= num; i++) {
    product *= i;
    }

    return product;
}
// console.log(factorial(3));
// console.log(factorial(5));

//Fibonacci - Create a function to generate Fibonacci numbers.In this famous mathematical sequence, each number is the sum of the previous two, starting with
// values 0 and 1.  Your function should accept one argument, an index into the sequence(where 0 corresponds to the initial value, 4 corresponds to the value four
function fib(n) {

    var a = 0, b = 1, sum = 1;

    for(var i = 2; i <= n; i++) {
    sum = a + b;
    a = b;
    b = sum;
    }

    return sum;
}
// console.log(fib(6))
// console.log(fib(7))
// console.log(fib(8))
// console.log(fib(9))
// console.log(fib(10))

//Array: Second - to - Last: Return the second - to - last element of an array.Given[42, true, 4, "Liam", 7], return "Liam".If array is too short, return null.
function SecondToLast (arr){
    if (arr.length<2){
    return null;
    } else{
    return arr[arr.length-2];
    }
}
// console.log(SecondToLast([42, true, 4, "Liam", 7]));
// console.log(SecondToLast ([4]));

//Array: Nth - to - Last: Return the element that is N - from - array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function NthtoLast(arr,n){
    if(arr.length<n){
    return null;
    } else {
    return arr[arr.length-n];
    }
}
// console.log(NthtoLast ([1,3],3))
// console.log(NthtoLast ([5,2,3,6,4,9,7],3));
