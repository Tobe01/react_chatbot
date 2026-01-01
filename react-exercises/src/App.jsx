import Chat from './components/chat';
import Clock from './components/clock';
import Counter from './components/counter';
import Form from './components/form';
import TextInput from './components/textInput';
import Buttons from './components/buttons';
import './App.css'

// App Component
function App(){
  return(
    <div>
      <>
      <Chat />
      </>

      <>
      <Clock />
      </>

      <>
        <Counter />
      </>

      <>
        <Form />
        <TextInput />
        <Buttons />
      </>
    </div>
  ) 
}

export default App
