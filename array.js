
// 1- Always Hungry
function alwaysHungry(array) {
    var hungry = true;
    
    for (var i = 0; i < array.length; i++) {
        
        if (array[i] === 'food') {
            array[i] = 'yummy';
            hungry = false;
        }
    }
    return hungry
        ? ["I'm hungry"]
        : array;
}
console.log(alwaysHungry([3.14, "food", "pie", true, "food"]));  
console.log(alwaysHungry([4, 1, 5, 7, 2]));  



// 2-High Pass Filter
function highPass (arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i]>cutoff){
            filteredArr.push(arr[i]); 
            }
        }
        return filteredArr; }
        var result = highPass ([6, 8, 3, 10, -2, 5, 9], 5);
             console.log(result); // we expect back [6, 8, 10, 9]
            
// 3-Better than average
            function betterThanAverage (arr) {
        var sum = 0;
        for (let s = 0; s < arr.length; s++) {
            sum+= arr[s];
        } 
        sum=sum/(arr.length); 
        var count = 0 
        for (let i = 0; i < arr.length; i++) { 
            if (arr[i]>sum) {
                count++;
            } 
        }
            return count;
    }
    var result = betterThanAverage ( [6, 8, 3, 10, -2, 5, 9]);
    console.log(result); 


 //4-  Array Reverse
function reverse(arr) {
    
    const reversed = arr.reverse();
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//5-Fibonacci Array
function fibonacciArray(n) {
        
    var fibArr = [0, 1];
    var d=[];
    for(let i = 2; i <= n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2]; 
        d.push(fibArr[i]);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]