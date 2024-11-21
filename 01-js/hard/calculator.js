/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
      this.result = 0;
  }

  add(number) {
      this.result += number;
      return this.result;
  }

  subtract(number) {
      this.result -= number;
      return this.result;
  }

  multiply(number) {
      this.result *= number;
      return this.result;
  }

  divide(number) {
       if(number==0){
        throw new Error
       }
       else{
        return this.result/=number;
       }
      
  }

  clear() {
      this.result = 0;
      return this.result;
  }

  getResult() {
      return this.result;
  }

  calculate(expression) {
      // Sanitize input by removing extra spaces
      const sanitizedExpression = expression.replace(/\s+/g, '');

      // Validate that the expression contains only valid characters
      if (!/^[0-9+\-*/().]*$/.test(sanitizedExpression)) {
          throw new Error("Invalid expression: contains non-numerical characters");
      }

      try {
          // Evaluate the sanitized expression
          const calculatedResult = eval(sanitizedExpression);
          this.result = calculatedResult; // Update the result variable
          if(this.result==Infinity){
            throw new Error
          }
          return this.result;
      } catch (error) {
          throw new Error("Invalid expression: " + error.message);
      }
  }
}


module.exports = Calculator;
