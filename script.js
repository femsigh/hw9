// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
// 5. Create a string in the format: "Today is MM/DD/YYYY"
// 6. Display the result in the element with id="dateOutput"
const now = new Date();
let month = now.getMonth() + 1;
let day = now.getDate();
const year = now.getFullYear();

month = month.toString().padStart(2, "0");
day = day.toString().padStart(2, "0");

const formattedDate = `Today is ${month}/${day}/${year}`;
document.getElementById("dateOutput").textContent = formattedDate;

// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")

// 4 separate values (2 numeric strings, 1 decimal string, 1 non-numeric):
const value1 = "42";
const value2 = "19.75";
const value3 = "hello";
const value4 = "100";

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()

// Helper function to process each value
function processNumber(original) {
  const converted = Number(original);
  const isNaNResult = Number.isNaN(converted);
  const isIntegerResult = Number.isInteger(converted);

  // TODO:
  // 3. For EACH value, create a sentence showing:
  //    - original value
  //    - converted value
  //    - whether it is NaN
  //    - whether it is an integer
  //
  // Example format (you must create your own variables):
  // "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

  // Build a descriptive string
  return `Original: "${original}" → Converted: ${converted} → isNaN: ${isNaNResult} → isInteger: ${isIntegerResult}`;
}

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)

// Create the results for all four values
const result1 = processNumber(value1);
const result2 = processNumber(value2);
const result3 = processNumber(value3);
const result4 = processNumber(value4);

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"

// Combine into one HTML block (using <p> for each result)
const numberOutput = `<p>${result1}</p>
                      <p>${result2}</p>
                      <p>${result3}</p>
                      <p>${result4}</p>`;
// Insert into the page
document.getElementById("numberConversionOutput").innerHTML = numberOutput;

// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables

//Defined numeric values

const itemPrice = 29.99;
const taxRate = 0.08;
const quantity = 3;

// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
//
// Calculations
const subtotal = itemPrice * quantity; // multiplication
const tax = subtotal * taxRate; // multiplication
const total = subtotal + tax; // addition

// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
//
// Format total to two decimal places using toFixed()
const formattedTotal = total.toFixed(2);

// 4. Build a string showing your results
//
// 5. Display the results inside the element with id="mathOutput"
const mathOutput = `<p>Item price: $${itemPrice.toFixed(2)}</p>
                    <p>Quantity: ${quantity}</p>
                    <p>Subtotal: $${subtotal.toFixed(2)}</p>
                    <p>Tax (8%): $${tax.toFixed(2)}</p>
                    <p><strong>Total cost: $${formattedTotal}</strong></p>`;

document.getElementById("mathOutput").innerHTML = mathOutput;

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//

// First if/else: Check if total is greater than $50
if (total > 50) {
  // Add an extra message to the math section
  const freeShippingMsg = document.createElement("p");
  freeShippingMsg.textContent = "You get free shipping!";
  freeShippingMsg.style.color = "green";
  freeShippingMsg.style.fontWeight = "bold";
  document.getElementById("mathOutput").appendChild(freeShippingMsg);
} else {
  const noShippingMsg = document.createElement("p");
  noShippingMsg.textContent =
    "Add $" + (50 - total).toFixed(2) + " more to get free shipping.";
  noShippingMsg.style.color = "orange";
  document.getElementById("mathOutput").appendChild(noShippingMsg);
}

// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)

// Second if/else: Check if the value "hello" converted to NaN (from part 2)
const testConvert = Number(value3); // "hello" -> not a valid number.
if (Number.isNaN(testConvert)) {
  const warningMsg = document.createElement("p");
  warningMsg.textContent = 'Tip: "hello" is not a valid number.';
  warningMsg.style.color = "red";
  document.getElementById("numberConversionOutput").appendChild(warningMsg);
} else {
  // This won't run because it is NaN, but added to make sense with the structure
  const successMsg = document.createElement("p");
  successMsg.textContent = "✓ All values are valid numbers.";
  document.getElementById("numberConversionOutput").appendChild(successMsg);
}
