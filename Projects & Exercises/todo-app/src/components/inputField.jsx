import { useState } from 'react'

// Inputfiled Component
function InputField({ arrayItems, setArrayItems }){
 const [ inputText, setinputText ] = useState();

  function getValue(event){
    setinputText(event.target.value)
  }


  function renderList(){
    setArrayItems([
      ...arrayItems,
      {
        message: inputText,
        id: crypto.randomUUID()
      }
    ])

    setinputText('')
  }

  return(
    <div>
      <input
        onChange={getValue}
        value={inputText}
      size="20" placeholder="Add a new task" />
      <button  
        onClick={renderList}
      >Add</button>
    </div>
  )
};

export default InputField;