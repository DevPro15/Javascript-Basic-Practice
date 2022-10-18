/* WAYS OF CONSOLE*/

// Mostly use for debugging and checking the data

console.log("hello world");

console.log(200);

console.log(true);

console.log(null);

var num = 10;

console.log(num);

console.log("string", 10.11, true, false, null, num);

/* ----------------------------------------------------------------------------------*/

/* PARAMETERS & ARGUMENTS */

// Parameters
// parameters are variable that contains value

function makeCoffee(sugar, milk) {
  var instructions = "Boil Water";

  instructions += " pour into cup,";

  instructions += " add coffee granules,";

  instructions += " add " + sugar + " spoon  of sugar, ";

  instructions += " add" + milk + "% milk.";

  return instructions;
}

// Arguments
// arguments are value which are passed to parameters

console.log(makeCoffee(2, 20));

/* ----------------------------------------------------------------------------------*/

/* OBJECTS & ARRAYS */

//  Objects

var car = {
  color: "red",
  speed: 200,
  drive: function () {
    return "drive";
  },
};

//  Arrays

var shoppinglist = ["Apple", "Orange", "Pear"];

//Objects & Arrays Embedding

var truck = {
  make: "volvo",
  speed: 160,
  engine: {
    size: 2.0,
    make: "bmw",
    fuel: "petrol",
    pistons: [{ maker: "BMW" }, { maker: "toyota" }],
  },
  drive: function () {
    return "drive";
  },
};

var array = [
  "string",
  100,
  ["embed", 200],
  { car: "ford" },
  function () {
    return "drive";
  },
];

/* ----------------------------------------------------------------------------------*/

/* MEMBERS */

// members are the objects which are present in variable & members are accessed with "."

console.log(truck.make);

// computed member access

console.log(truck.engine.pistons[0].maker);
