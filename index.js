// -----------------------------------------------------------------------------------------
//Named Function
function Max(Arr){
    let maxiMum =  Arr.reduce((acc,curr)=> acc>curr ? acc : curr);
    console.log(maxiMum)
    return maxiMum;
};
Max([2,4,6,1,9]);

// -----------------------------------------------------------------------------------------
//Anonymous Function
const addNumber = function(a,b){
    console.log(a+b)
    return a+b;
}
let addition = addNumber; //assigned addNumber function to addition
addition(2,3)

// -----------------------------------------------------------------------------------------
//Immediately Invoked Functions (IIFE)
const firstname = 'siddhesh';
const lastname = 'parab';
const age = 21;
(function myGreetings() {
    console.log(`Hello, I am ${firstname} ${lastname} and I am ${age} year old`);
})();