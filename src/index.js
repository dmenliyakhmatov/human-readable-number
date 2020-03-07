module.exports = function toReadable (number) {
  let simpleNumb = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
};
let tensNumb = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
}

if( number === 0) return 'zero';
if ( number < 100 ) {
  return twoNumbers(number);
} else {
  let splitNumber = number.toString().split('');
  return (simpleNumb[splitNumber[0]] + ' hundred ' + twoNumbers(number % 100)).trim();
}

function twoNumbers(numb) {
  if (numb < 20) { 
    return simpleNumb[numb];
  } else {
    let arrNumb = numb.toString().split('');
    return (tensNumb[arrNumb[0]] + ' ' + simpleNumb[arrNumb[1]]).trim();
  }
}

}
