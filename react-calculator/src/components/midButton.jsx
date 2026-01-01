
// Mid Buttons Component
function MidButton({ count, setCount, plusFive, plusFour, plusSix, minu }){
  return(
    <>
      <button style={{borderRadius: '5px', border: 'none', padding: '5px 15px 5px 15px', fontSize: '20px', backgroundColor: 'grey', color: 'white'}} onClick={() => plusFour('4')}>4</button>
            <button style={{borderRadius: '5px', border: 'none', padding: '5px 15px 5px 15px', fontSize: '20px', backgroundColor: 'grey', color: 'white'}} onClick={() => plusFive('5')}>5</button>
            <button style={{borderRadius: '5px', border: 'none', padding: '5px 15px 5px 15px', fontSize: '20px', backgroundColor: 'grey', color: 'white'}} onClick={() => plusSix('6')}>6</button>
            <button style={{borderRadius: '5px', border: 'none', padding: '5px 15px 5px 15px', fontSize: '20px', backgroundColor: 'orange', color: 'white'}} onClick={() => minu('-')}>-</button>
    </> 
  )
};

export default MidButton;
