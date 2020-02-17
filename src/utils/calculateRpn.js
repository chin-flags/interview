import infixToPostfix from './infixToPostfix';

function calculateRpn(text) {
  const tokens = infixToPostfix(text).reverse();
  const stack = [];

  while (tokens.length > 0) {
    const operator = tokens.pop();
    if (/[^+\-/*^]/g.test(operator)) {
      stack.push(operator);
    } else {
      // not enough values on stack
      if (stack.length < 2) {
        return null;
      }
      const num2 = Number(stack.pop());
      const num1 = Number(stack.pop());
      let result = 0;
      // evaluate operator
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;

        case '-':
          result = num1 - num2;
          break;

        case '*':
          result = num1 * num2;
          break;

        case '/':
          result = num1 / num2;
          break;

        case '^':
          result = Math.pow(num1, num2);
          break;
        default:
          break;
      }
      stack.push(result);
    }
  }
  if (stack.length === 1) {
    // convert to a number the last item of the stack
    return Number(stack.pop());
  }

  return null;
}
export default calculateRpn;
