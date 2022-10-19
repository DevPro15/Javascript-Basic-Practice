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
console.log(array[1 - 1 + 1]);
console.log(truck["engine"]["pistons"][0]["maker"]);

/* ----------------------------------------------------------------------------------*/

/* Builtin Javascript function */

// it gives the total number elements
dummytext.length();

// it removes the 1st element from an array
dummytext.shift();

// it removes the last element from an array
dummytext.pop();

// it adds elements from the start in an array
dummytext.unshift("string", "dummy");

// it adds elements from the end in an array
dummytext.push(200, "text");

// it deletes the elements inside an array at any position
// such as first number show's the position and second number tells how many elements you want to delete
dummytext.splice(2, 0);

// it adds the element inside an array at any position
// such as first number show's the position and second number tells how many elements you want to delete
// & 3rd show's the elements you're adding after the 2nd element
dummytext.splice(2, 0, "hello", "world");

// it replaces the element inside an array at any position
// such as first number show's the position and second number tells how many elements you want to delete
// & 3rd show's the elements you're adding after the 3rd element
dummytext.splice(3, 2, "nice", 100);

/* ----------------------------------------------------------------------------------*/

// Callable Objects

function Callable() {
  var fullname = "Lawrence Turton";

  function concat(Callable) {
    return "MR." + Callable;
  }
  return concat(fullname);
}
var obj = [{}];

// ------------------

function call(name) {
  return name.firstname + name.lastname;
}
console.log(call({ firstname: "Lawrence", lastname: "Turton" }));

// ------------------

function cat(fullname2) {
  return fullname2();
}

console.log(
  cat(function () {
    return "embed";
  })
);

/* ----------------------------------------------------------------------------------*/

/* MEMORY HOISTING */

// the javascript starts running from top-left and as
// it moves it reads 'myName' but can't read the value then shows undefined, further on it moves to 'printName'
// which is a function then goes down now he knows the value of 'myName' but as console is call first he can't print it but for the
// function its different as he knows it's a function then he goes through it and hoist (grab) the value and shows up

console.log(myName, printName());
var myName = "Lawrence";

function printName() {
  return "johnnnn";
}

// output

undefined, "johnnnn";

/* ----------------------------------------------------------------------------------*/

/* SCOPE & CLOSURES */

// Scope = Access

//scope is limit of variable accessing such as

console.log(mice);

var mice = "micky";

/* output */

undefined;

//it is because var is defined after it is call so it can't be accessed check out another
// example

function cute() {
  return note;
}
var note = "write";

/* OutPut */

("note is undefined");

//this because its call after the function

/* CLOSURE */

// Execution Stack

// take an example below when a function runs it knows the value of a and then goes directly to return add()
// but now he doesn't removes the value of a instead its saves it which is known as closure and move to add function
// where it grabs b and returns a + b

function runExpression() {
  var a = 10;

  function add() {
    var b = 90;
    return a + b;
  }
  return add();
}
/* output */ 

100;

// functions are callable objects, callable objects have scopes just like regular objects
//  and you can have objects embeded in objects but callable objects are special infact we have temporary symbols
// table and the language feature is called closures where any sort of symbol that is created inside our execution
// stack as long as there is a another callable object still in the execution stack it keeps the symbol and encloses 
// everything together, it keeps those symbol vast without executing all those instructions in execution stack 
// or main thread and then once all of it's been executed it returns final value and it does all the operations.
// It then clears out the symobols which can no longer in our program (Garbage collection) 

/* ----------------------------------------------------------------------------------*/
