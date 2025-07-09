// Step 1: Variable Data

const burgers = ['Hamburger', 'Cheeseburger']; // must use const
let featuredDrink = 'Strawberry Milkshake';   // must use let

// Step 2: Function and Block

function addBurger() {
  const newBurger = 'Flatburger';  // must use const
  burgers.push(newBurger);
}

// Step 3: Variable Declaration and Scope

if (true) {
  const anotherNewBurger = 'Maple Bacon Burger';  // must use const with exact casing
  burgers.push(anotherNewBurger);

  function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
  }
}
