import { useState } from 'react'

// text input component
function TextInput(){
  
  const [ password, setPassword ] = useState('Password');

  function showPassword(){
    setPassword( password === 'Password' ? 'Text' : 'Password');
  }

  return(
    <div className="textInput">
      <div className="topInput">
        <input placeholder="Email" size="25" />
      </div>
      <div className="bottomInput">
        <input placeholder="Password" type={password} size="25" />
        <button className="showButton" onClick={showPassword}>Show</button>
      </div>
    </div>
  )
};

export default TextInput;
