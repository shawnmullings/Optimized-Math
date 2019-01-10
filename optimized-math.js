// Method for logging to the console.
let print = n => {
  (num => {
    let output = "is";
    // Check if 'num' is divisible by both two and three
    if (num % 3 === 0 && num % 2 === 0) {
      output = "divisible by two and three";
    }
    // Check if 'num' is divisible by only three
    else if (num % 3 === 0) {
      output = "divisible by three";
    }
    // Check if 'num' is divisible by only two and considered an even number
    else if (num % 2 === 0) {
      output = "even";
    }
    // 'num' is considered an odd number
    else {
      output = "odd";
    }
    // Print to console
    console.log("The number '" + num + "' " + output + ".");
  })(n);
};

// Main
let main = n => {
  // loop 'n' times printing to console
  for (var i = 1; i <= n; i++) {
    print(i);
  }
};

// Start program
main(100);
