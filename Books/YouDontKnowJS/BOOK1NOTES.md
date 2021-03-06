# Key Notes

**CH.1**

- To Open a Blank Browser Page
  - Enter in about:blank, to open a clean page for console.

- Comments should explain why, not what. They can optionally explain how if what’s written is particularly confusing.

- Another common usage of variables is for centralizing value setting. This is more typically called constants, when you declare a variable with a value and intend for that value to not change throughout the program.
You declare these constants, often at the top of a program, so that it’s convenient for you to have one place to go to alter a value if you need to. By convention, JavaScript variables as constants are usually capitalized, with underscores _ between multiple words.

- JS uses dynamic typing, which is different from the static typing in Java.

- '$' + String(2) <- an Explicit coercion of 2 to '2'.

- '$' + 2 <- an Implicit coercion of 2 to '2'.

- Values that aren’t already of an expected type are often coerced to that type. The if statement expects a boolean, but if you pass it something that’s not already boolean, coercion will occur.

- while do, the condition is checked on the first iteration.

- do while, the condition is checked AFTER the first iteration.

- A for loop has three clauses:
  - The initialization clause (let i = 0;)
  - The conditional test clause (i <= 9;)
  - The update clause (i++) = [i = i + 1]
  - The First one executes before the first iteration.
  - The Second one is a condition check on each iteration.
  - And then Lastly we have the update clause executed after each iteration.

**Note** that each of the clauses could contain many variables as presented under the example below:

for (let i=1, b=i; i<10 || b<10; i++,b++) {
  console.log(i * b);
}; // This is Gucci Baebe.
  - This is beneficial because rather then use nested for loops, we can achieve the same thing with one and one is always faster / more performant then two, Imagine that you have a mathimatical x function y is values and you need to draw a vector graphically - you can draw it via one loop.
  - This is also a way that Graphics cards generate raster or vector graphics. 🔮
  - Sometimes one for loop is more readable and self explanitory than two for loops.
  - One loop can create better, cleaner code.
  - Computers can manage any code but humans need READABLE code.
  - Preformance is LESS IMPORTANT than readablity.

**CH.2**

-  JavaScript has typed values, not typed variables.

- Built in Data-Types:
  - String
  - Number
  - Boolean
  - BigInt
  - Null
  - Undefined
  - Symbol

- Built in Structural-Types:
  - Object

- Only values have types in JavaScript, Variables are just simple containers for those values.

- Coercion comes in two forms, explicit and implicit. Explicit coercion is that you can see from the code that a conversion from one type to another will occur, whereas implicit coercion is when the type conversion can happen as more of a non-obvious side effect of some other operation.

- Falsy Values
  - an "" empty string.
  - 0, -0, NaN (Not a Number)
  - null, undefined.
  - false.

- Truthy Values
  - "Hello", not an empty string.
  - 42, a positive number.
  - true
  - [], Arrays
  - {}, Objects
  - (), functions

- ==, checks for value equality with coercion allowed.
- ===, checks for both value equality without allowing coercion.


0 === 1 <-- numbers because === will not allow coercion.

0 == 1 <-- this can be coerced to false and true as coercion is allowed. A less strict comparator.

== | !=
=== | !==

Take special note of the == and === comparison rules if you’re comparing two non-primitive values, like objects (including function and array). Those values are actually held by reference, both == and === comparisons will simply check whether the references match, not anything about the underlying values.

// REFERENCE (More Readable, powerful seen in Java)
const b = {a : null};
function test (b){
b.a = "test123";
}
test(b);
console.log("B value is", b.a);

var a= 41;
var b = "42";
var c = "43";
a < b; // true
b < c; // true

- What happens here? In ES5 specification, it says that if both values in the < comparison are strings, as it is with b < c, the comparison is made lexicographically (aka alphabetically like a dictionary).
But if one or both is not a string, as it is with a < b, then both values are coerced to be numbers, and a typical numeric comparison occurs.

- JavaScript Reserved Words:
  - for
  - in
  - if
  - null
  - true
  - false
etc. We cannot use "keywords" as variable Identifiers.

- Using "use strict"; is considered good practice.
  - It can be called globally or within a fn.
  - Is good for many reasons around your code base in general.