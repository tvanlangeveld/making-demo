/*
    In this file, we'll be making a new  story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = ['poke ball', 'poke ball', 'potion', 'beef jerky', 'running shoes']

let pokemon = []

backpack.push('oreos')
backpack.push('oreos')

console.log('after buying oreos, this is our back back')
console.log(backpack)


backpack.push('pokedex')
pokemon.push('pikachu')

console.log('after meeting professor oak we got it')
console.log(backpack)
console.log(pokemon)

for (let i = 0; i < 4; i++){
    pokemon.push('pidgey')
}

console.log('after the pidgeys, our pokemon are now')
console.log(pokemon)

backpack.splice(3,4)

console.log(backpack)


let newPokemon = 'charzard';

pokemon.push(newPokemon)

console.log(pokemon)


console.log('here he is')

let cutestPokemon = pokemon[0]

console.log(cutestPokemon)


let onlyPidgey = pokemon.slice(1,5)
backpack.unshift('Jynx statue')


console.log(onlyPidgey, backpack)


backpack.shift()

console.log(backpack)

let wildPokemon = 'butterfree'
backpack.shift()
let lunch = pokemon.splice(1, 1, wildPokemon)
console.log('this is my back pack now')
console.log(backpack)
console.log('here are the pokemon')
console.log(pokemon)
console.log('pidgey is our lunch')
console.log(lunch)

