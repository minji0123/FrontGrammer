/* eslint-disable */
import { useReducer } from 'react'

export default () => {

    const 처음객체 = { count: 0 };

    function 객체바꿔주는함수(바꿀객체, 인자로받아온객체) {

        console.log('모지',인자로받아온객체);
        console.log('모지바꿀객체',바꿀객체);

        switch (인자로받아온객체.type) {
            case "증가":
            return { count: 바꿀객체.count + 인자로받아온객체.data };
            case "감소":
            return { count: 바꿀객체.count - 인자로받아온객체.data };
            default:
            throw new Error("오잉", 인자로받아온객체.type);
        }
    }

    const [바꿀객체, 객체넘겨주는함수] = useReducer(객체바꿔주는함수, 처음객체);
    
    return(
        <>

            <p>{바꿀객체.count}</p>
            <button onClick={() => 객체넘겨주는함수({ type: "증가", data: 1 })}>
                증가
            </button>
            <button onClick={() => 객체넘겨주는함수({ type: "감소", data: 1 })}>
                감소
            </button>
        </>
    )
}