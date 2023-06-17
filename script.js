function convertToRoman(num) {
  
  if (num < 1 || num > 100000) {
    return "Invalid input. Please provide a number within the range of 0 to 100000.";
  }

  const romanSymbols = [
    { value: 100000, symbol: "M̅" },
    { value: 90000, symbol: "X̅C̅" },
    { value: 50000, symbol: "L̅" },
    { value: 40000, symbol: "X̅L̅" },
    { value: 10000, symbol: "X̅" },
    { value: 9000, symbol: "MX̅" },
    { value: 5000, symbol: "V̅" },
    { value: 4000, symbol: "MV̅" },
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (let i = 0; i < romanSymbols.length; i++) {
    while (num >= romanSymbols[i].value) {
      result += romanSymbols[i].symbol;
      num -= romanSymbols[i].value;
    }
  }

  return result;


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
