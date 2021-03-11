/* Chapter 1, Phone Practice
* Write a program to calculate the total price of your phone purchase. 
* 1. You will keep purchasing phones (hint: loop!) until you run out of money 
* in your bank account. 
* 2. You’ll also buy accessories for each phone as long as your purchase amount is 
* below your mental spending threshold.
* 3. After you’ve calculated your purchase amount, add in the tax, then print out the 
* calculated purchase amount, properly formatted.
* 4. Finally, check the amount against your bank account balance to see if you can afford it or not.
* 5. You should set up some constants for the “tax rate,” “phone price,” “accessory price,” 
* and “spending threshold,” as well as a variable for your “bank account balance.”
* 6. You should define functions for calculating the tax and for formatting the price 
* with a “$” and rounding to two decimal places.
* Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in “Input” on page 6. 
* You may prompt the user for their bank account balance, for example. Have fun and be creative!
*/

const TAX_RATE = 0.23;
const PHONE_PRICE = 1199.99;
const ACCESSORY_PRICE = 49.49;

let spendingThreshold = 1500; // get input from user.
const SPENDING_THRESHOLD = spendingThreshold;

let bankAccountBalance = 3000; // get input from user.
const INITIAL_BANK_ACCOUNT_BALANCE = bankAccountBalance;

let amount = 0;

function calculateTax(amount) {
  return amount * TAX_RATE;
}

function formatAmount(amount) {
  return '$' + amount.toFixed(2);
}

while (amount < bankAccountBalance) {
  // Buy Phone
  amount = amount + PHONE_PRICE;

  // Can we afford the accessory
  if (amount < spendingThreshold) {
    amount = amount + ACCESSORY_PRICE;
  }
}

// Pay our Tax
amount = amount + calculateTax(amount);

console.log(
  "Your Purchase: " + formatAmount(amount)
);

// Can we buy this?

if (amount > bankAccountBalance) {
  console.log("You have no money, brother.");
}

// TODO:
// Check our WHILE LOGIC
// Consider grabbing input from user for ACCESSORY
// Add Prompts to intake User Bank Account Balance and Spending Threshold.
