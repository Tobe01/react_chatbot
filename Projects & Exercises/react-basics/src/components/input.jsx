import { useState } from 'react'

// input component
function Input(){
  
  const [ inputText, setInputText ] = useState();

  function updateText(event){
    setInputText(event.target.value);
  }

  function resetText(){
    setInputText('');
  }

  function showExample(){
    setInputText('Alice');
  }

  return(
    <>
      <div> 
        <input onChange={updateText} value={inputText} placeholder="Type a name here" />
        <button onClick={resetText}  >Reset</button>
        <button onClick={showExample}>Example</button>
      </div>
      <p>Hello {inputText}</p>
    </>
  )
}

export default Input;