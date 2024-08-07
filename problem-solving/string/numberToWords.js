/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  const digitString = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const teenString = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tenString = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const bigString = ["Thousand", "Million", "Billion"];

  function numberToWordsHelper(num) {
    let result = "";

    if (num > 99) {
      result += digitString[Math.floor(num / 100)] + " Hundred ";
    }

    num %= 100;
    if (num < 20 && num > 9) {
      result += teenString[num - 10] + " ";
    } else {
      if (num >= 20) {
        result += tenString[Math.floor(num / 10)] + " ";
      }
      num %= 10;
      if (num > 0) {
        result += digitString[num] + " ";
      }
    }

    return result;
  }


  if (num === 0) {
    return "Zero";
  }

  let result = numberToWordsHelper(num % 1000);
  num = Math.floor(num / 1000);

  for (let i = 0; i < bigString.length; i++) {
    if (num > 0 && num % 1000 > 0) {
      result = numberToWordsHelper(num % 1000) + bigString[i] + " " + result;
    }
    num = Math.floor(num / 1000);
  }

  return result.trim();
};