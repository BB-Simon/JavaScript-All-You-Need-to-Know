function getBeef() {
  setTimeout(() => {
    return 'Beef'
  }, 100)
}

function cookBeef(beef){
  return beef;
}

function getBuns() {
  return 'Buns'
}

function putBeefBetweenBuns(buns, beef) {
  return beef + ' in ' + buns;
}

function serve(burger) {
  return burger;
}

// synchronous way
// const makeBurger = () => {
//   const beef = getBeef();
//   const patty = cookBeef(beef);
//   const buns = getBuns();
//   const burger = putBeefBetweenBuns(buns, beef);
//   return burger;
// };

// const burger = makeBurger();
// console.log(serve(burger));

// callback with callback hall
const makeBurger = nextStep => { 
  getBeef(function (beef) {
    cookBeef(beef, function (cookedBeef) {
      getBuns(function (buns) {
        putBeefBetweenBuns(buns, beef, function (burger) {
          nextStep(burger)
        })
      })
    })
  })
}

// Make and serve the burger
makeBurger((burger) => {
  serve(burger)
})