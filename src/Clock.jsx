import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date())


  useEffect(()=>{

    const interval = setInterval(()=>{
        setTime(new Date())
    }, 1000)

    return ()=>{
        clearInterval(interval)
    }

  }, [])

  
    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridian = hours > 12 ? "PM" : "AM";
        hours = hours % 12;

        function format(t){
            if(t<10){
               return `0${t}`
            }else{
              return t
            }
        }


        return `${format(hours)}:${format(minutes)}:${format(seconds)} ${meridian}`
    }

    

  


  return (
    <div className="clock">
      <p>{formatTime()}</p>
    </div>
  );
}

export default Clock;
