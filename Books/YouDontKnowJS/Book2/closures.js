// A closure is a wombocombo (PeanutButter and Jelly Sandwich) of a function combined together
// with references to its surrounding state. Essentially, a closure gives you access to
// an outer function’s scope from an inner function.

// Original Example
function makeFunc() {
  var name = 'Mozilla';
  var cnt = 1;
  function displayName() {
    alert(name + cnt++);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();



// When using a closure in JavaScript, JavaScript remebers the state
// of the outer function and  uses this state each time the function is ran.
// This state is stored in an object and referenced this will be called
// whenever the function is ran.

// When making a new function for the same closure this will create a new state.

// Try this code out run MommyFunction 3 times, then run SonFunction 2 times.
// Mommy's count will be at 3, while Son's count will be at 2.
// The GREAT part is they both call Daddy.

// My Example
const DaddyFunction = () => {
  const name = 'Penelope';
  let count = 1;

  const displayName = () => {
    alert(name + count++);
  }

  return displayName;
  // Note have not called Daddy
  // We simply constructed and returned Daddy.
};

const MommyFunction = DaddyFunction();
// Here we call Daddy within Mommy.

MommyFunction();

// New state will be created for SonFunction running the same DaddyFunction.
const SonFunction = DaddyFunction();
// Here we call Daddy again within Son.

SonFunction();

// PLOT TWIST, they are NOT the same daddies because a new instance of Daddy is constructed
// on creation - INITIALLY for each new function (First time Only).