/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 37;
let jamieLannisterAttack = 35;

// if(jonSnowAttack > jamieLannisterAttack){
// console.log('john is better')
// } else if(jamieLannisterAttack > jonSnowAttack) {
//     console.log('jamie is beast and way better')
// } else{
//     console.log('These fighters are even matched')
// }

let jonSnowHealth = 100;
let jonSnowDefense = 0;

if (jonSnowHealth <= jamieLannisterAttack){
    console.log('John is dead')
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack;
    console.log(`Jom Snow health is down to ${jonSnowHealth}`)
}


