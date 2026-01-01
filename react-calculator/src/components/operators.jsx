// Operators Component
function Operators({ count, setCount, percentage, clearCount, times, divide }){
  return(
      <>
            <button style={{borderRadius: '5px', border: 'none', padding: '5px 8px 5px 8px', fontSize: '18px'}} onClick={clearCount}>AC</button>
            <button style={{borderRadius: '5px', border: 'none', padding: '5px 15px 5px 15px', fontSize: '20px'}}  onClick={() => times('*')}>x</button>
            <button style={{borderRadius: '5px', border: 'none', padding: '5px 12px 5px 12px', fontSize: '20px'}}  onClick={() => percentage('%')}>%</button>
            <button style={{borderRadius: '5px', border: 'none', padding: '5px 15px 5px 15px', fontSize: '20px', backgroundColor: 'grey', color: 'white'}}  onClick={() => divide('/')}>/
        </button>
    </> 
  )
};

export default Operators;