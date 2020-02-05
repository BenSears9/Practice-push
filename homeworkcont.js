//Create an inventory array and associate a number with each item. Then get user input that purchases items (subtracts one from the item).
var inventory = [];

// function fillArray() {
//     inventory["water"] = 100,
//       inventory["soda"] = 100,
//       inventory["detergent"] = 50,
//       inventory["apple"] = 100,
//       inventory["banana"] = 100,
//       inventory["tomato"] = 100,
//       inventory["bread"] = 50,
//       inventory["butter"] = 50,
//       inventory["milk"] = 50,
//       inventory["chicken"] = 50;
// }
// fillArray();

// var inventory = [
//     ['water', 100],
//     ['soda', 50],
//     ['milk', 200],
//     ['eggs', 100],
//     ['cheese', 400],
//     ['snacks', 100],
//     ['fruit', 200],
//     ['veg', 700]
// ]

// for(let i = 0; i < inventory.length; i++){
//     console.log()
// }
// function add(){
//     var input = document.getElementById("userInput").value;    
    
// }

// option 1: multideminsional array
let inventory = [
    ['apple', 10],
    ['blueberry', 15],
    ['broccoli', 5],
    ['milk', 25],
    ['cheese', 4]
]

function add() {
    let input = document.getElementById("userInput").value
    inventory.forEach(array => {
        let name = array[0];
        let qty = array[1];
        if(input == array[0]){}
            array[1] += 1;
            let temp = [];;
            temp.push(name);
            temp.push(qty);
            cart.push(temp);
            console.log(cart);
            console.log(inventory);
    });
}

function sub() {
    let input = document.getElementById('userInput').value;
    for(let i = 0; i < inventory.length; i++){
        if(input == inventory[i][0]){
            if(inventory[i][1] > 0){
            inventory[i][1] -= 1;
        } else {
            console.log('${input} is out of stock!!!');
        }
    }
}
// // option 2: parallel array
// let name = ['apple', 'blueberry', ' broccoli', 'milk', 'cheese'];
// let qty = [10, 15, 5, 25, 4]; (edited) 



function add() {}