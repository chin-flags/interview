import React, { useState } from 'react';

const useInfixToPostfix = () => {
  const [postFix, setPostFix] = useState([]);
  const [operatorStack, setOperatorStack] = useState([]);
  const [display, setDisplay] = useState('');

  const operators = {
    "+": {
      precedence: 2,
      associativity: "Left"
    },
    "-": {
      precedence: 2,
      associativity: "Left"
    },
    "/": {
      precedence: 3,
      associativity: "Left"
    },
    "*": {
      precedence: 3,
      associativity: "Left"
    },
    "^": {
      precedence: 4,
      associativity: "Right"
    }
  }

  const addToPostFix = (char) => {
    if (!isNaN(char)) {
      postFix.push(char);
    } else if (operators.hasOwnProperty(char)) {
      const op1 = char;
      const op2 = getTopItemOfStack();
      while (
        operators.hasOwnProperty(op2)
        && ((getPrecedence(op2) >= getPrecedence(op1) || getAssociativity(op1) === "Left") || (getPrecedence(op2) > getPrecedence(op1) || getAssociativity(op1) === "Right"))
      ) {
        setPostFix(postFix => [...postFix, operatorStack.pop()])
        op2 = getTopItemOfStack();
      }
      setOperatorStack(operatorStack => [...operatorStack, op1]);

    } else if (char === "(") {
      setOperatorStack(operatorStack => [...operatorStack, char]);
    } else if (char === "(") {
      while (getTopItemOfStack !== "(") {
        setPostFix(postFix => [...postFix, operatorStack.pop()])
      }
      setOperatorStack(operatorStack => operatorStack.slice(0, -1))
    }
    while (operatorStack.length > 0) {
      setPostFix(postFix => [...postFix, operatorStack.pop()])
    }
  }
  const getTopItemOfStack = () => operatorStack[operatorStack.length - 1];
  const getPrecedence = (op) => operators[op].precedence;
  const getAssociativity = (op) => operators[op].associativity;

  return {
    addToPostFix
  }
}


export default useInfixToPostfix;