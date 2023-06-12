/* eslint-disable */

export default () => {

    const sync = () =>{
        console.log('동기');
        console.log(1);
        console.log(2);
        console.log(3);
    }

    const async = () =>{
        console.log('비동기');
        console.log(1);
        // ******** 0 초로 준다!!!! ********
        setTimeout(() =>{
            console.log(2);
        }, 0.000);
        console.log(3);
    }

    return(
        <>
            <h1>동기 비동기</h1>
            {/* <button onClick={sync}>sync</button> */}
            <button onClick={async}>async</button>
        </>
    )

}