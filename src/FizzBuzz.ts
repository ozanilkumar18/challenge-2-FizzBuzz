const Fizz = "Fizz";
const Buzz = "Buzz";

function findRemainder(numerator: number, denominator: number) {
  return numerator % denominator == 0;
}

export default function FizzBuzz(start: number, end: number) {
  let combine: string = "";

  for (let i: number = start; i <= end; i++) {
    combine +=
      (findRemainder(i, 15)
        ? Fizz + Buzz
        : findRemainder(i, 3)
        ? Fizz
        : findRemainder(i, 5)
        ? Buzz
        : i) + (i !== end ? "," : "");
  }
  return combine;
}
