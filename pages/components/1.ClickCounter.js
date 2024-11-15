// Here we're making ClickCounter by using React Hooks
import { useState } from "react"

export default function ClickCounter({start = 0 , ...props }) {

    const [ clickCount, setClickCount ] = useState(props.start || 0)

    function handleClick(e, msg) {
    //    console.log("Hi from handleClick()")  // here on click will display this msg when we inspect.

    //    setClickCount(clickCount+ 1)  // This way it's unsafe to do.
    //    console.log("count incremented to: ", clickCount + 1)

        console.log(msg)  // here we'll receive the msg coming from the button key on line 19
        // Best way to handle is to set the previous value and then increase it
        setClickCount((prevValue) => prevValue + 1)  //we're passing a new function and as a parameter we're passing a prevValue
        //updating value by increasing
    }

    return (
        <>
            <h1>1.ClickCounter.js this is coming from</h1>
            <button onClick={(e) => {handleClick(e, `: times user has Clicked`)}}>Clicked {clickCount}</button>
        </>
    )
}


// // This was old way to handle. It was causing hydration error.
// // Fixed version look at line 4:  export default function ClickCount({ start = 0, ...props})
// ClickCounter.defaultProps = {
//     start: 0
// }