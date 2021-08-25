import FizzBuzz from "./FizzBuzz";

describe("FizzBuzz", () => {
  it("should return csv formated strings", () => {
    expect(FizzBuzz(12, 20)).toBe("Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz");
  });
  it("should return empty string on negative numbers params", () => {
    expect(FizzBuzz(-12, 20)).toBe(
      "Fizz,-11,Buzz,Fizz,-8,-7,Fizz,Buzz,-4,Fizz,-2,-1,FizzBuzz,1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz"
    );
  });
  it("should return empty string on non-valid params", () => {
    expect(FizzBuzz(20, 12)).toBe("");
  });
});
