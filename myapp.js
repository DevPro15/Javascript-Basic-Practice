/* Ways of Console */

// Mostly use for debugging and checking the data

console.log("hello world");

console.log(200);

console.log(true);

console.log(null);

var num = 10;

console.log(num);

console.log("string", 10.11, true, false, null, num);

/* ----------------------------------------------------------------------------------*/

/* Parameters & Arguments */

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
