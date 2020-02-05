var num;

//

// Function homework

function buzz (x,y){
    console.log(x+y)
}
buzz(7,11);

function fizz (x,y){
    console.log(x*y);
}
fizz(2,3);

//var i = 1;

function isNumEven(numToCheck){
    return (numToCheck % 2===0);
}
var numToCheck = 1008;
var result = isNumEven(numToCheck);
console.log(result);



// #4

var x;
function great(j){
    console.log(j+x);
}
//great(j,x);

//5

// Function(success){
//     //express

// }

//var toy =
function hundredLoop(a,b){
    for(var c=0; c<=b; b++){
        console.log(c);
        if (a %15==0){
            console.log("fizzbuzz divided by 3 and 5")
        }
    }
}
//Math
    var rando = Math.floor((Math.random() * 10) + 1);

function randomCheck(){
    var x =document.getElementById('userInput').value;
    if(x == rando){
        console.log("success " + x );
    } else {
        console.log("wrong " + rando)
    }
}

//Array 1

//Question 1
var array = ["cereal", "bread", "cheese", "banana", "apple", "grape", "chips", "dip", "fruit", "pasta"];
for(i = 0; i < array.length; i++){
    console.log(array[i]);
}
//console.log(array[i]);
//console.log(array[3]);

//Question 2

var str = "breadbread";
    for(var i = 0; i < str.length; i++){
        console.log(str.charAt(i));
    }

//Question 3
console.log(str.toUpperCase());