import { useState } from 'react'
import Todo from './components/todo';
import InputField from './components/inputField';
import ArrayItems from './components/arrayItems';
import './App.css'

// App Component
function App(){
// Lifted the state up
  const [ arrayItems, setArrayItems ] = useState([{
    message: 'Learn React',
    id: crypto.randomUUID()
  }]);


  return(
    <>
      <Todo />
      <InputField 
        arrayItems={arrayItems}
        setArrayItems={setArrayItems}
      />
      <>
        <ArrayItems 
          arrayItems={arrayItems}
        />
      </>
    </>
  )
}

export default App
