var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var phnum = numbers.reduce(createPhoneNumber)
function createPhoneNumber() {
  var conCode = numbers.slice(0, 3);
  country = conCode.join('');
  var areaCode = numbers.slice(3, 6);
  area = areaCode.join('');
  var postCode = numbers.slice(-4);
  post = postCode.join('');

  const chethan = "(" + country + ")" + area + "-" + post;


  return chethan

}
console.log(phnum)