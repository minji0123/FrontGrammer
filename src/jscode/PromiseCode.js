/* eslint-disable */

import { useState } from 'react';
export default () => {

    // promise 함수 선언
    const 더하기함수 = new Promise( (성공,실패) => {
        // 원하는 코드 작성
        if (1+1 === 2){
            성공();
        }else{
            실패();
        }
    });
    
    // promise 함수 실행
    더하기함수.then(() => {
        console.log('성공1');
    }).then(() => {
        console.log('성공2');
    }).then(() => {
        console.log('성공3');
    }).then(() => {
        console.log('성공4');
    }).catch(() => {
        // 실패 시 실행
        console.log('실패');
    
    });


    return(
        <>
            <h1>PromiseCode</h1>
        </>
    )

}