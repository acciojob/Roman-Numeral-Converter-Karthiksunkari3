function convertToRoman(num) {
  const romanNumerals = [
    "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
  ];
  const values = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
  ];

  let romanNumeral = "";
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      romanNumeral += romanNumerals[i];
      num -= values[i];
    }
  }

  return romanNumeral;
}

// Get the necessary DOM elements
const numberInput = document.getElementById("number-input");
const convertButton = document.getElementById("convert-button");
const resultDiv = document.getElementById("result");

// Add click event listener to the convert button
convertButton.addEventListener("click", () => {
  const inputNumber = parseInt(numberInput.value, 10);
  const romanNumeral = convertToRoman(inputNumber);
  resultDiv.textContent = `Roman Numeral: ${romanNumeral}`;
});
