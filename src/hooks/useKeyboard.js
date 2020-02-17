import { useState, useEffect } from 'react';

import calculateRpn from '../utils/calculateRpn';

const useKeyboard = () => {
  const [input, setInput] = useState('');
  const [solution, setSolution] = useState(0);
  const [isValid, setIsValid] = useState(true);

  const calculate = () => {
    const result = calculateRpn(input);
    setSolution(result);
  };

  const getLastToken = () => input.charAt(input.length - 1);

  const getCurrentNumber = () => input.repeat(1).split(/([\+\-\*\/\^\(\)])/).filter((e) => e).pop();


  const onDown = (event) => {
    const { key } = event;
    const patt = /\+|\-|\*|\//;
    setIsValid(true);
    if (!isNaN(key) && getLastToken() !== ')') {
      if (key === '0') {
        const lastToken = getLastToken();
        (!isNaN(lastToken) || lastToken === '*') && setInput((input) => input.concat(key));
      } else {
        setInput((input) => input.concat(key));
      }
    } else if (patt.test(key)) {
      if (!patt.test(getLastToken()) && getLastToken() !== '(' && getLastToken() !== '') {
        setInput((input) => input.concat(key));
      }
    } else if (key === '(') {
      if (patt.test(getLastToken()) || input === '') setInput((input) => input.concat(key));
    } else if (key === ')') {
      if (!isNaN(getLastToken())) setInput((input) => input.concat(key));
    } else if (key === 'Backspace') {
      setInput((input) => input.substring(0, input.length - 1));
    } else if (key === 'c') {
      setInput('');
      setSolution('');
    } else if (key === '.') {
      if (!isNaN(getLastToken())) {
        const currentNumber = getCurrentNumber();
        if (!currentNumber.includes('.')) setInput((input) => input.concat(key));
      }
    } else {
      setIsValid(false);
      setTimeout(() => setIsValid(true), 100);
    }
  };


  useEffect(() => {
    window.addEventListener('keydown', onDown);
    calculate();
    return () => {
      window.removeEventListener('keydown', onDown);
    };
  }, [input]);

  return { input, solution, isValid };
};

export default useKeyboard;
