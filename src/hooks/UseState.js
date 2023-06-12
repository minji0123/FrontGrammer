/* eslint-disable */
import { useState } from 'react'

export default () => {

    const [ onoff, onOff바꿔줘] = useState(false);
    let onoff2 = false;

    const whenClick=()=> {
        console.log('useState의 값',onoff);
        onOff바꿔줘(!onoff);
    }

    const whenClick2=()=> {
        console.log('일반변수의 값',onoff2);
        onoff2 = !onoff2;
    }
    
    return(
        <>
            <p>{onoff ? 'ON' : 'OFF'}</p>
            <button onClick={() => whenClick()}>
                useState 스위치
            </button>

            <p>{onoff2 ? 'ON' : 'OFF'}</p>
            <button onClick={() => whenClick2()}>
                일반 변수 스위치
            </button>
        </>
    )
}