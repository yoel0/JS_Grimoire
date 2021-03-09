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

- A for loops has three clauses: 
  - The initialization clause (let i = 0;)
  - The conditional test clause (i <= 9;)
  - The update clause (i++) = [i = i + 1]
  - The first one executes before the first iteration. 
  - The Second one is a condition check on each itteration. 
  - And then lastly we have the update clause executed after each iteration.

**Note** that each of the clauses could contain many variables as presented under the example below:

for (let i=1, b=i; i<10 || b<10 ; i++,b++) { 
  console.log(i*b); 
};