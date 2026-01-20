import { useState } from 'react'
import Counter from './components/counter';
import CounterTwo from './components/counterTwo';
import ResetCount from './components/resetCount';
import Button from './components/button';
import Input from './components/input';
import Div from './components/div';
import './App.css'

// App component
function App(){
  const [ count, setCount ] = useState(0);

  return(
    <>
      <div style={{display: 'flex'}}>
      <Counter 
        count={count}
        setCount={setCount}
      />
      <CounterTwo 
        count={count}
        setCount={setCount}
      />
      <ResetCount 
        count={count}
        setCount={setCount}
      />
      </div>

      <div>
      <Button />
      </div>

      <div>
        <Input />
      </div>

        <Div />
    </>
  )
}

export default App
