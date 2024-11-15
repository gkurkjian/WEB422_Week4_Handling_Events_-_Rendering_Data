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
            <h1>3.Clock.js this is coming from</h1>
            {date?.toLocaleString(props.locale)}
        </>
    )
}