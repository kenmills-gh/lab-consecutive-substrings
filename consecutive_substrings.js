function consecutiveSubstrings(string) {
  // Initialize an array to hold all of our generated substrings
  const substrings = [];

  // OUTER LOOP: Determines the starting index of the substring.
  for (let i = 0; i < string.length; i++) {
    // Create a variable to cumulatively build our substring.
    let currentSubstring = "";

    // INNER LOOP: Determines the ending index of the substring.
    for (let j = i; j < string.length; j++) {
      // Append the next character to our current substring
      currentSubstring += string[j];

      // Push the newly formed substring into our results array
      substrings.push(currentSubstring);
    }
  }

  // Return the final array containing all consecutive substrings
  return substrings;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings("abc"));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings("a"));

  // Additional Edge Case Tests for Debugging
  console.log("Expecting: [] (Empty string test)");
  console.log("=>", consecutiveSubstrings(""));

  console.log("");

  console.log("Expecting: ['x', 'xy', 'y']");
  console.log("=>", consecutiveSubstrings("xy"));
}

module.exports = consecutiveSubstrings;
