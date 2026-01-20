// reset counter component
function ResetCount({ count, setCount }){

  function resetCount(){
    setCount(0)
  }

  return(
    <div>
      <button onClick={resetCount}>Reset Count</button>
    </div> 
  )
}

export default ResetCount;