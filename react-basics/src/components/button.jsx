import { useState } from 'react'
// button component
function Button(){
  
  const [ isButtonOn, setIsButtonOn ] = useState('ON');

  function activate(){
    setIsButtonOn( isButtonOn === 'ON' ? 'OFF' : 'ON' );
  }

  return(
    <>
    { isButtonOn === 'ON' ? <button onClick={activate} className="green">{isButtonOn}</button>  : <button onClick={activate} className="red">{isButtonOn}</button>}
      
    </>
  )
};

export default Button;