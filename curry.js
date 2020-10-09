const R = require('ramda')


const curriedFunctionExample = (a) => (b) => (c) => (d) => a + b + c + d;
const functionExampleResult = curriedFunctionExample(1)(1)(1)(1);



const logInfo= (info) => console.info(info)
const boilWater = water => `${water} hervida`;
const grindGrain = coffeeGrain => `${coffeeGrain} molido con exito`
const fillTheCoffeeMaker = (water)=>  (coffeeGrain) =>(coffeeMaker) => `${coffeeMaker} cargada con exito`
const startTheCoffeeMaker = (coffeeMaker) => `${coffeeMaker} iniciada con exito`
const makeTheCoffee = (coffeeGrain,specialFlavour) => `cafe de ${coffeeGrain}y sabor ${specialFlavour} creado con exito`
const prepareCoffee = (water) => (coffeeGrain,specialFlavour) =>(coffeeMaker) => {
  return R.pipe(
    ()=> grindGrain(coffeeGrain),
    logInfo,
    ()=> fillTheCoffeeMaker(
      boilWater(water))(coffeeGrain,specialFlavour)(coffeeMaker),
    logInfo,
    () =>  startTheCoffeeMaker(coffeeMaker),
    logInfo,
    ()=> makeTheCoffee(coffeeGrain,specialFlavour),
    logInfo
  )()
}
prepareCoffee('agua pura')('grabo arabico','sabor a diario')('moka italiana')
