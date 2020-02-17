/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import useKeyboard from '../hooks/useKeyboard';

const styles = {
  wrapper: {
    width: '60%',
    minWidth: 600,
    backgroundColor: '#009688',
    borderRadius: 20,
  },
  display_container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row'
  },
  display: {
    height: '40%',
    width: '80%',
    margin: 40,
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    height: '30%',
    margin: 40,
  },
  display_text: {
    fontSize: 100,
    margin: 0,
    color: 'white',
    wordWrap: 'break-word',
  },
  input_text: {
    wordWrap: 'break-word',
    fontSize: 64,
    margin: 0,
    color: 'white',
    textAlign: 'end',
  },
  typing_prompt: {
    fontSize: 32,
    margin: 0,
    color: 'white',
    textAlign: 'justify',
  },
  reset_text: {
    fontSize: 24,
    textAlign: 'end',
    color: 'white',

  },
};

const Display = () => {
  const { input, isValid, solution } = useKeyboard();

  return (
    <div style={styles.wrapper}>
      <div style={{ ...styles.display, backgroundColor: isValid ? '#80cbc4' : '#f48fb1' }}>
        {
          solution || solution === 0
            ? <p style={styles.display_text}>{solution}</p>
            : <p style={styles.display_text}> Not ready</p>
        }
      </div>
      <div style={styles.input}>
        {
          input
            ? <span style={styles.input_text}>{input}</span>
            : (
              <p style={styles.typing_prompt}>
                start typing and result will follow !
              </p>
            )
        }
        <p style={styles.reset_text}>BTW press "C" to reset</p>
      </div>
    </div>
  );
};

export default Display;
