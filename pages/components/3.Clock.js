import { useState, useEffect } from "react";

useState
export default function Clock({locale = "fr-CA", ...props}) {
    const [ date, setDate ] = useState(locale);

    useEffect(() => {
        setDate(new Date);
        const timerID = setInterval(() => {
            setDate(new Date);
        }, 1000)

        return () => {clearInterval(timerID)}
    }, [])

    return (
        <>
            <h1>This is coming from 3.Clock.js</h1>
            {date?.toLocaleString(props.locale)}
        </>
    )
}