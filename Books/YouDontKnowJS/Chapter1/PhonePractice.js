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

// ! Notes
// JavaScript objects inherit properties and methods from a prototype,
// Sometimes you want to add new properties or methods(fns) to
// all existing objects of a given type you can extend and overwrite its functionality
// to modify your own native class within your own application.
// Here we took our Number prototype and changed its under the hood to
// handle decimal places within our application in a more precise way to our own liking.
Number.prototype.round = function (places) {
	return +(Math.round(this + 'e+' + places) + 'e-' + places);
};

const TAX_RATE = 0.23;
const PHONE_PRICE_WITHOUT_TAX = 1199.9999;
const PHONE_PRICE = (PHONE_PRICE_WITHOUT_TAX * (1 + TAX_RATE)).round(2);
const ACCESORY_PRICE_WITHOUT_TAX = 49.49;
const ACCESORY_PRICE = (ACCESORY_PRICE_WITHOUT_TAX * (1 + TAX_RATE)).round(2);

let spendingThreshold = prompt('Please provide your spending threashold');
const SPENDING_TRESHOLD = spendingThreshold;

let bankAccountBalance = prompt('Please provide your account balance');
const INITIAL_BANK_ACCOUNT_BALANCE = bankAccountBalance;

let amount = 0;

function toFixedDecimalPlaces(amount) {
	return amount.toFixed(2);
}

function addCurrencySymbol(amount) {
	return '$' + amount;
}

const REAL_THRESHOLD = Math.min(
	SPENDING_TRESHOLD,
	INITIAL_BANK_ACCOUNT_BALANCE
);
console.log('Your real threashold is', REAL_THRESHOLD);
while (amount + PHONE_PRICE < REAL_THRESHOLD) {
	amount = amount + PHONE_PRICE;
	console.log(
		'You bought the phone of a price ' +
			addCurrencySymbol(toFixedDecimalPlaces(PHONE_PRICE))
	);

	if (amount + ACCESORY_PRICE > REAL_THRESHOLD) {
		console.log("You couldn't afford an accessory");
		break;
	}

	console.log(
		'You bought the accessory of a price ' +
			addCurrencySymbol(toFixedDecimalPlaces(ACCESORY_PRICE))
	);

	amount = amount + ACCESORY_PRICE;
}

console.log(
	'Total amount spent',
	addCurrencySymbol(toFixedDecimalPlaces(amount))
);

if (amount == INITIAL_BANK_ACCOUNT_BALANCE) {
	//TODO: Not so clean code as expected
	console.log('You have completly now money on your account');
} else {
	console.log(
		'You still have',
		addCurrencySymbol(
			toFixedDecimalPlaces(INITIAL_BANK_ACCOUNT_BALANCE - amount)
		),
		'on your account'
	);
}
