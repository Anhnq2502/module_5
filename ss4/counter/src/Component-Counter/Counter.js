import {useState} from "react";

function Counter() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    return (
        <div>
            <p>Count1: {count1}</p>
            <button onClick={() => {
                setCount1(count1 + 1);
            }}>
                Add1
            </button>
            <p>Count2: {count2}</p>
            <button onClick={() => {
                setCount2(count2 + 2);
            }}>
                Add2
            </button>
        </div>
    );
}

export default Counter;
