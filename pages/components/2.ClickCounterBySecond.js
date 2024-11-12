import { ClientPageRoot } from "next/dist/client/components/client-page";
import { useState, useEffect } from "react"

export default function ClickCounterBySecond({start = 0, ...props}) {

    const [ clickCount, setClickCount ] = useState(start);

    function handleClick(e, msg) {
        setClickCount(() => prevValue + prevValue + 1)  // increment the previous value
        console.log(msg)
    }

    useEffect(() => {
        // Set up a timer to increment `clickCount` by 1 every second
        const intervalId = setInterval(() => {
            setClickCount((prevValue) => prevValue + 1)
        }, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId)
    }, []);

    return (
        <>
        <h1>ClickCounter By Second. This is coming from 3.ClickCounterBySecond.js</h1>
        <h4>If you wanted to count by each second, turn "false" restrictionMood in next.config.js</h4>
        <button onClick={(e) => handleClick(e, "Time will tick on each second")}>Clicked: {clickCount}</button>
        </>
    )

}


// ClickCounterBySecond.defaultProps = {
//     start: 0
// }