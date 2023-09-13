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

// let jonSnowHealth = 100;
// let jonSnowDefense = 25;

// if (jonSnowHealth <= jamieLannisterAttack){
//     console.log('John is dead')
// } else {
//     jonSnowHealth = jonSnowHealth - jamieLannisterAttack;
//     console.log(`Jom Snow health is down to ${jonSnowHealth}`)
// }



// if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
//     console.log('Jon Snow is dead')
// } else {
//     jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
//     console.log(`Jom Snow health is down to ${jonSnowHealth}`)
// }

for (let i = 1; i <= 3; i++){
    isDead = Math.random() > .5
    if (isDead === true){
        console.log(`John has died after ${i} rounds`)
        break
    }
}

if (isDead === false) {
    console.log('Its a mircale he made it')
}
