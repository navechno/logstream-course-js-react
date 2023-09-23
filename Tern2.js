function manyChecks(a) {
  console.log(`a = ${a}`);
  
  return (
    a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10' + (a === 5 ? ' an example of a special case' : '')) + (a === 15 ? ' but a is not 15' : '')+ (a > 5 ? ' and a is greater than 5' : ' and a is less than or equal to 5') + (a % 2 ? ' and a is odd' : ' and a is even ');
}

function myManyChecks(a) {
  console.log(`a = ${a}`);
  
  let result = "";

  switch (true) {
    case a > 10:
      result = "a is bigger than 10";
      break;
    case a <= 10:
      result = "a is less than or equal to 10";
      if (a === 5) {
        result += " an example of a special case";
      }
      break;
  }

  if (a === 15) {
    result += " but a is not 15";
  }

  switch (true) {
    case a > 5:
      result += " and a is greater than 5";
      break;
    case a <= 5:
      result += " and a is less than or equal to 5";
      break;
  }

  switch (a % 2) {
    case 1:
      result += " and a is odd";
      break;
    case 0:
      result += " and a is even";
      break;
  }

  return(result);
}

let a = Math.floor(Math.random() * 20) + 1;
console.log(manyChecks(a));
console.log(myManyChecks(a));

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()