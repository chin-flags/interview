import infixToPostfix from './infixToPostfix';

function calculateRpn(text) {
  let tokens = infixToPostfix(text).reverse();
  var stack = [];

  while (tokens.length > 0) {
    var a = tokens.pop();
    if (/[^+\-/*^]/g.test(a)) {
      stack.push(a);
    } else {
      // not enough values on stack
      if (stack.length < 2) {
        return null;
      } else {
        var c = Number(stack.pop());
        var b = Number(stack.pop());
        var d = 0;
        // evaluate operator
        switch (a) {
          case '+':
            d = b + c;
            break;

          case '-':
            d = b - c;
            break;

          case '*':
            d = b * c;
            break;

          case '/':
            d = b / c;
            break;

          case '^':
            d = Math.pow(b, c);
            break;
        }
        stack.push(d);
      }
    }
  }
  if (stack.length === 1) {
    // convert to a number in case there was one thing on the stack
    return Number(stack.pop()).toPrecision(4);
  }

  return null;
}
export default calculateRpn;