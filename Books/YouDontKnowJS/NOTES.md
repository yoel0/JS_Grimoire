# Key Notes

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

- Left off on "Functions".