import { useEffect, useState } from "react";

function BharatTime() {
  const [time,setTime] = useState(new Date());

  useEffect(()=>{
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return ()=>{
      clearInterval(timerId);
    }
  })

  return (
    <p className="slogan">
      This is the correct time : {time.toLocaleDateString()} date :{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default BharatTime;
