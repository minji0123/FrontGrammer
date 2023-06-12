/* eslint-disable */
import { useReducer } from 'react'

export default () => {

    const initialState = { count: 0 };


    function reducer(state, action) {

        console.log('모지',action);
        console.log('모지바꿀객체',state);

        switch (action.type) {
            case "증가":
            return { count: state.count + action.data };
            case "감소":
            return { count: state.count - action.data };
            default:
            throw new Error("오잉", action.type);
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: "증가", data: 1 })}>
                증가
            </button>
            <button onClick={() => dispatch({ type: "감소", data: 1 })}>
                감소
            </button>
        </>
    )
}