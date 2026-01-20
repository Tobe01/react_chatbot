// Bottom Buttons Component
function BottomButton({ count, setCount, plusOne, plusTwo, plusThree, plusZero, dot, calculate }){
  return(
    <>
      <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
          <button style={{borderRadius: '5px', border: 'none', padding: '5px 15px 5px 15px', fontSize: '20px', backgroundColor: 'grey', color: 'white'}} onClick={() => plusOne('1')}>1</button>
          <button style={{borderRadius: '5px', border: 'none', padding: '5px 15px 5px 15px', fontSize: '20px', backgroundColor: 'grey', color: 'white'}} onClick={() => plusTwo('2')}>2</button>
          <button style={{borderRadius: '5px', border: 'none', padding: '5px 15px 5px 15px', fontSize: '20px', marginRight: '10px', backgroundColor: 'grey', color: 'white'}} onClick={() => plusThree('3')}>3</button>
        </div>
        <div style={{display:'flex', gap: '5px'}}>
          <button style={{borderRadius: '5px', border: 'none', padding: '5px 50px 5px 50px', fontSize: '20px', backgroundColor: 'grey', color: 'white'}}  onClick={() => plusZero('0')}>0</button>
          <button style={{borderRadius: '5px', border: 'none', padding: '5px 15px 5px 15px', fontSize: '20px', backgroundColor: 'grey', color: 'white'}}  onClick={() => dot('.')}>.</button>
        </div>
      </div>

      <button style={{borderRadius: '5px', border: 'none', padding: '5px 15px 5px 15px', fontSize: '20px', backgroundColor: 'orange', color: 'white'}} onClick={calculate}>=</button>
    </>
  )
};

export default BottomButton;