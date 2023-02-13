import { useEffect, useState } from "react"

export default function Timer({setStop , questionNumber}) {
    const [timer , setTimer] = useState(30);

    useEffect(()=>{

        if(timer === 0 )    return setStop(true);

        const interval   = setInterval(() => {
            setTimer(timer-1);
        }, 1000);

        return ()=> clearInterval(interval);    // this will stop the interval function after the use

    },[setStop , timer])

    useEffect(()=>{
        setTimer(30);
    },[questionNumber])

    return timer;
    
}