const infixToPostfix = (text) => {
  const outputQueue = [];
  const operatorStack = [];

  const operators = {
    '+': {
      precedence: 2,
      associativity: 'Left',
    },
    '-': {
      precedence: 2,
      associativity: 'Left',
    },
    '/': {
      precedence: 3,
      associativity: 'Left',
    },
    '*': {
      precedence: 3,
      associativity: 'Left',
    },
    '^': {
      precedence: 4,
      associativity: 'Right',
    },
  };

  text = text.replace(/\s+/g, ''); // remove white spaces
  const textArr = text.split(/([\+\-\*\/\^\(\)])/).filter((e) => e); // remove any empty elements

  textArr.map((token) => {
    if (!isNaN(token)) {
      // check for numbers
      outputQueue.push(token);
    } else if (operators.hasOwnProperty(token)) {
      // check for operators and update operator Stack
      const operator1 = token;
      let operator2 = operatorStack[operatorStack.length - 1];
      while (
        '^*/+-'.indexOf(operator2) !== -1
        && ((operators[operator2].precedence >= operators[operator1].precedence && operators[operator1].associativity === 'Left')
          || (operators[operator2].precedence > operators[operator1].precedence && operators[operator1].associativity === 'Right'))
        // or (there is an operator at the top of the operator stack with greater precedence)
        // or (the operator at the top of the operator stack has equal precedence and the token is left associative))
        // and (the operator at the top of the operator stack is not a left parenthesis):
      ) {
        outputQueue.push(operatorStack.pop());
        operator2 = operatorStack[operatorStack.length - 1];
      }

      operatorStack.push(operator1);
    } else if (token === '(') {
      operatorStack.push(token);
    } else if (token === ')') {
      while (operatorStack[operatorStack.length - 1] !== '(') {
        //  move to output quote from stack until ( reached
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.pop();
    }
  });
  while (operatorStack.length > 0) {
    outputQueue.push(operatorStack.pop());
  }
  return outputQueue;
};

export default infixToPostfix;
