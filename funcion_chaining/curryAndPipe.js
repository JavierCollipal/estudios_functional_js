const R = require("ramda");

const curriedFunctionExample = (a) => (b) => (c) => (d) => a + b + c + d;

const logInfo = (info) => console.info(info);

const grindGrain = (coffeeGrain) => logInfo(`${coffeeGrain} molido con exito`);
const fillTheCoffeeMaker = (water) => (coffeeGrain) => (coffeeMaker) => {
  logInfo(
    `${coffeeMaker} cargada con exito, esta es el agua: ${water} y este es el grano: ${coffeeGrain}`
  );
};
const startTheCoffeeMaker = (coffeeMaker) =>
  logInfo(`${coffeeMaker} iniciada con exito`);
const makeTheCoffee = (coffeeGrain, specialFlavour) =>
  logInfo(`cafe de ${coffeeGrain} y sabor ${specialFlavour} creado con exito`);

const prepareCoffee = (water) => (coffeeGrain, specialFlavour) => (
  coffeeMaker
) => {
  return R.pipe(
    () => grindGrain(coffeeGrain),
    () => fillTheCoffeeMaker(water)(coffeeGrain, specialFlavour)(coffeeMaker),
    () => startTheCoffeeMaker(coffeeMaker),
    () => makeTheCoffee(coffeeGrain, specialFlavour)
  )();
};
prepareCoffee("agua pura")("grano arabico", "sabor a piña")(
  "Cafetera moka italiana"
);
