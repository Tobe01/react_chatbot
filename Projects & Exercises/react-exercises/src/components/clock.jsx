import { useState, useRef, useEffect } from 'react'
import { dayjs } from 'supersimpledev'

// clock component
function Clock(){
  
  const [ time, setTime ] = useState(dayjs().format('HH:mm:ss'));

  const getHTML = useRef(null);

  useEffect(() =>{
    const getElem = getHTML.current;
      { getElem ? setInterval(() =>{ setTime(dayjs().format('HH:mm:ss'))}, 1000) : ''}

      console.log('run code');
  }, []);

  return(
    <div ref={getHTML}>
      <h1>Current time: <span>{time}</span></h1>
    </div>
  )
};

export default Clock;