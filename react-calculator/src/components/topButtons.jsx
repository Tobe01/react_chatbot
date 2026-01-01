// Top Buttons
function TopButtons({ count, setCount, plus, plusSeven, plusEight, plusNine }){
  return(
      <>
        <button style={{borderRadius: '5px', border: 'none', padding: '5px 15px 5px 15px', fontSize: '20px', backgroundColor: 'grey', color: 'white'}} onClick={() => plusSeven('7')}>7</button>
            <button style={{borderRadius: '5px', border: 'none', padding: '5px 15px 5px 15px', fontSize: '20px', backgroundColor: 'grey', color: 'white'}} onClick={() => plusEight('8')}>8</button>
            <button style={{borderRadius: '5px', border: 'none', padding: '5px 15px 5px 15px', fontSize: '20px', backgroundColor: 'grey', color: 'white'}} onClick={() => plusNine('9')}>9</button>
            <button style={{borderRadius: '5px', border: 'none', padding: '5px 15px 5px 15px', fontSize: '20px', backgroundColor: 'orange', color: 'white'}} onClick={() => plus('+')}>+</button>
    </> 
  )
};

export default TopButtons;