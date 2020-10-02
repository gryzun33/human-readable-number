module.exports = function toReadable (number) {
  let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let arr2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arr3 = ['zero', 'zero', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if(number === 0) {
    return 'zero';
  }

  number = number.toString().split('').reverse().join('');

  let result = '';

  if(number[0] == 0) {
      result = '';
  } else {
    result = arr1[Number(number[0])];
  }

  if (number.length > 1) {
      if (number[1] === '1') {
          result = arr2[Number(number[0])];
      } else if (number[1] === '0') {
          result = result;
      } else {
        result = (arr3[Number(number[1])] + ' ' + result).trim();
      }        
  }

  if(number.length > 2) {    
    result = (arr1[Number(number[2])] + ' hundred ' + result).trim();     
  }

  return result;

}
