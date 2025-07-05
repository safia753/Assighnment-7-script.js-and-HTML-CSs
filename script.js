       //Assighnment 7//

function displayValues() {
      let num = parseFloat(document.getElementById("userInput").value);

      if (isNaN(num) || num <= 0) {
        alert("Please enter a positive number.");
        return;
      }

      let output = `
        <p><strong>Number:</strong> ${num}</p>
        <p><strong>Round off value:</strong> ${Math.round(num)}</p>
        <p><strong>Floor value:</strong> ${Math.floor(num)}</p>
        <p><strong>Ceil value:</strong> ${Math.ceil(num)}</p>
      `;

      document.getElementById("output").innerHTML = output;
    }


        //   negative floating //


         // Prompt user for input
    let input = prompt("Enter a negative floating point number:");
    let num = parseFloat(input);

    // Check if input is valid and negative
    if (isNaN(num) || num >= 0) {
      document.write("<p>Please enter a valid negative floating point number.</p>");
    } else {
      document.write("<p><strong>Number:</strong> " + num + "</p>");
      document.write("<p><strong>Round off value:</strong> " + Math.round(num) + "</p>");
      document.write("<p><strong>Floor value:</strong> " + Math.floor(num) + "</p>");
      document.write("<p><strong>Ceil value:</strong> " + Math.ceil(num) + "</p>");
    }

    

    // Program to display the absolute value of a number

// Example numbers
let num1 = -4;
let num2 = 5;

// Calculate absolute values using Math.abs()
let abs1 = Math.abs(num1);
let abs2 = Math.abs(num2);

// Display the results
console.log(`The absolute value of ${num1} is ${abs1}`);
console.log(`The absolute value of ${num2} is ${abs2}`);




// Prompt user for input (only works in browser)
letinput = prompt("Enter a number:");
let number = Number(input);

// Get absolute value
let absoluteValue = Math.abs(number);

// Show result
alert(`The absolute value of ${number} is ${absoluteValue}`);






function rollDice() {
      const diceValue = Math.floor(Math.random() * 6) + 1;
      document.getElementById("value").textContent = "You rolled a " + diceValue + "!";
      
      // Optional: display emoji based on dice number
      const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
      document.getElementById("dice").textContent = diceFaces[diceValue - 1];
    }




function tossCoin() {
      // Generate random number: 0 or 1
      var toss = Math.random() < 0.5 ? "Heads" : "Tails";

      // Display result
      document.getElementById("result").textContent = "Result: " + toss;
    }




    function checkAMPM() {
      const currentHour = new Date().getHours(); // gets the hour (0-23)
      if (currentHour < 12) {
        alert("It's AM");
      } else {
        alert("It's PM");
      }
    }






function calculateBirthYear() {
      const age = document.getElementById("ageInput").value;
      const currentYear = new Date().getFullYear();

      if (age && age > 0) {
        const birthYear = currentYear - age;
        document.getElementById("result").textContent =
          "Your birth year is: " + birthYear;
      } else {
        document.getElementById("result").textContent =
          "Please enter a valid age.";
      }
    }

















    // Static data - can be modified or made dynamic
    const customerName = "Faizan Ahmed";
    const units = 350;
    const chargePerUnit = 16;
    const latePaymentSurcharge = 500;

    // Calculations
    const netAmount = +(units * chargePerUnit).toFixed(2);
    const grossAmount = +(netAmount + latePaymentSurcharge).toFixed(2);

    // Get current month
    const monthNames = ["January", "February", "March", "April", "May", "June", "July",
                        "August", "September", "October", "November", "December"];
    const currentMonth = monthNames[new Date().getMonth()];

    // Display in browser
    document.getElementById("customerName").textContent = customerName;
    document.getElementById("month").textContent = currentMonth;
    document.getElementById("units").textContent = units;
    document.getElementById("chargePerUnit").textContent = `Rs. ${chargePerUnit.toFixed(2)}`;
    document.getElementById("netAmount").textContent = `Rs. ${netAmount.toFixed(2)}`;
    document.getElementById("lateSurcharge").textContent = `Rs. ${latePaymentSurcharge.toFixed(2)}`;
    document.getElementById("grossAmount").textContent = `Rs. ${grossAmount.toFixed(2)}`;