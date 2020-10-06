const R = require('ramda');

const water = temperature => R.cond([
    [R.equals(0),   R.always('water freezes at 0°C')],
    [R.equals(100), R.always('water boils at 100°C')],
    [R.equals(200), R.always('me quemo con esto')],
    [R.T,           temp => `nothing special happens at ${temp}°C`]
])(temperature)

console.log(water(200))