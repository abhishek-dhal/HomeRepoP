import React,{useState} from "react";

const Counter = () =>{
    const [count,setCount] = useState(0);

    const onClickHandler = () =>{
        console.log('Button clicked');
        setCount(count+1);
        console.log('========================');
        console.log(count);
        console.log('===========================');
    }
    return(
        <View>
            <Text>Increment</Text>
            <button type='button' onClick={onClickHandler}></button>
        </View>
    );
    }

    export default Counter;
