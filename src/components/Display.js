import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import useKeyboard from '../hooks/useKeyboard';

const styles = {
  wrapper: {
    width: '50%',
    minWidth: 400,
    backgroundColor: '#009688',
    borderRadius: 20,
  },
  display: {
    height: '50%',
    backgroundColor: '#80cbc4',
    margin: 20,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    padding: 20,
  }
};


const Display = () => {
  const { input, setInput, isValidKey, solution } = useKeyboard();
  const props = useSpring({ number: 1, from: { number: 0 } })
  return (
    <div style={styles.wrapper}>
      <div style={styles.display}>
        <p style={{ fontSize: 100, margin: 0, color: 'white', fontFamily: 'acme' }}>{solution ? Number.parseFloat(solution).toPrecision(4) : 'Not ready'}</p>
      </div>
      <div style={styles.input}>
        {
          input ?
            <span
              style={{ wordWrap: 'break-word', fontSize: 64, margin: 0, color: 'white', textAlign: 'end', fontFamily: 'acme' }}
            >
              {input}
            </span>
            :
            <p style={{ fontSize: 32, margin: 0, color: 'white', textAlign: 'justify', fontFamily: 'acme' }}>
              start typing
          </p>
        }
      </div>
    </div >
    // <div style={{ display: 'flex', flex: 1, alignItems: 'center', height: '40vh', width: '60vw', flexDirection: 'column', backgroundColor: '#0097A7', padding: 32, borderRadius: 20 }} >
    //   <div style={{ borderWidth: 40, borderColor: 'blue', width: '100%', display: 'flex', flex: 1, justifyContent: 'center', borderRadius: 20, backgroundColor: solution ? '#4db6ac' : '#f48fb1' }}>
    //     <p style={{ fontSize: 100, margin: 0, color: 'white', fontFamily: 'acme' }}>{solution ? solution : 'Not ready'}</p>
    //   </div>
    //   {
    //     input ?
    //       <p
    //         style={{ fontSize: 64, margin: 0, color: 'white', alignSelf: 'flex-end', fontFamily: 'acme' }}
    //       >
    //         {input}
    //       </p>
    //       :
    //       <p style={{ fontSize: 32, margin: 0, color: 'white', alignSelf: 'flex-end', fontFamily: 'acme' }}>
    //         start typing
    //       </p>
    //   }

    //   {/* <button onClick={() => {
    //     setResult(calculateRpn(input));
    //   }} >Solve</button>
    //   <button onClick={() => { setResult(0); setInput("") }}>Reset</button> */}
    // </div >
  )
}

export default Display;