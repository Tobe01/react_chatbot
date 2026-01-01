import { useState } from 'react'
import Calculator from './components/calculator';
import Counter from './components/counter';
import Operators from './components/operators';
import TopButtons from './components/topButtons';
import MidButton from './components/midButton';
import BottomButton from './components/bottomButton';

// Parent (App) Component
function App(){

  // UseState Hook
    const [count, setCount] = useState(0);

  //  Operators Component
    function clearCount(){
      setCount(0)
    }

    function times(num){
      setCount( count === 0 ? count += '*' : count + num );
    }

    function percentage(num){
      setCount( count === 0 ? count += '%' : count + num );
    }

    function divide(num){
      setCount( count === 0 ? count += '/' : count + num );
    }

  //  TopButtons Operators
    function plus(num){
      setCount( count === 0 ? count ++ : count + num );
    }

    function plusSeven(num){
      setCount( count === 0 ? count + 7 : count + num );
    }
    
    function plusEight(num){
      setCount( count === 0 ? count + 8 : count + num );
    }

    function plusNine(num){
      setCount( count === 0 ? count + 9 : count + num );
    }

    // MidButtons Component
    function plusFour(num){
      setCount( count === 0 ? count + 4 : count + num );
    }

    function plusFive(num){
      setCount( count === 0 ? count + 5 : count + num );
    }

    function plusSix(num){
      setCount( count === 0 ? count + 6 : count + num );
    }

    function minu(num){
      setCount( count === 0 ? count += '-' : count + num)
    }

    // BottomComponent
    function plusOne(num){
      setCount( count === 0 ? count + 1 : count + num );
    }

    function plusTwo(num){
      setCount( count === 0 ? count + 2 : count + num );
    }

    function plusThree(num){
      setCount( count === 0 ? count + 3 : count + num );
    }

    function plusZero(num){
      setCount( count === 0 ? count + 0 : count + num );
    }

    function dot(num){
      setCount( count === 0 ? count += '.' : count + num );
    }

    function calculate(){
      const total = eval(count);
      setCount(String(Number(total.toFixed(1))));
    }


return(
  <div>
    <>
      <Calculator />
    </>
    
    <div  style={{backgroundColor: 'white', boxShadow: '5px 5px 10px 0 rgba(0, 0, 0, 0.5)', width: '200px', padding: '15px 15px 0 15px', height: '325px', borderRadius: '17px',  gap: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

      <div style={{backgroundColor: 'grey', color: 'white', padding: '4px 10px 4px 0', borderRadius: '8px', marginBottom: '10px', width: '97%'}}>
        <Counter 
          count={count}
          setCount={setCount}
        />
      </div>

      <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '7px'}}>
        <Operators 
          count={count}
          setCount={setCount}
          percentage={percentage}
          divide={divide}
          times={times}
          clearCount={clearCount}
        />
      </div>


      <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '7px'}}>
        <TopButtons 
          plus={plus}
          plusSeven={plusSeven}
          plusEight={plusEight}
          plusNine={plusNine}
        />
      </div>


      <div  style={{width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '7px'}}>
        <MidButton 
          plusFive={plusFive}
          plusFour={plusFour}
          plusSix={plusSix}
          minu={minu}
        /> 
      </div>


      <div style={{display: 'flex', width: '100%'}}>
        <BottomButton
          plusOne={plusOne}
          plusTwo={plusTwo}
          plusThree={plusThree}
          plusZero={plusZero}
          dot={dot}
          calculate={calculate}
        />
      </div>

    </div>
    
    </div>
  )
};


export default App
