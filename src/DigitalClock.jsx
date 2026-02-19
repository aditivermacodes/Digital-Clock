import React, {useState,useEffect} from "react";

function DigitalClock() {
    const [time,setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=> {
            setTime(new Date());
        },[1000]);
        return() => {
            clearInterval(intervalId);
        }
    },[]);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiam = hours >=12 ? "P.M.":"A.M.";

        hours= hours%12 || 12;

        return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)} ${meridiam}`;
    }

    function padzero(number) {
        return (number<10 ? "0":"") + number;
    }


    return(
        <div className="clock-container">
            <div className="clock"> {formatTime()}</div>
        </div>
    )
}
export default DigitalClock;