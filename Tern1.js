let result;
let a = Math.floor(Math.random() * 100);
console.log((a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7));

if (a > 10) {
  result = a;
} else {
  result = a * 2;
}

if (result > 5) {
  console.log(2 * a + 1);
} else {
  if (a < 3) {
    result = 1;
  } else {
    result = 2 * (a - 2);
  }

  switch (true) { //этот switch чисто для выполнения условия задачи, так писать плохо
    case result > 4:
      console.log(5);
      break;
    case a % 2 === 0:
      console.log(6);
      break;
    default:
      console.log(7);
  }
}

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

