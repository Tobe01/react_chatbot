 // counter component
function Counter({ count, setCount }){   
  function updateCount(){
    setCount( count + 1)
  }

  return(
    <div>
      { count === 1 ? <button onClick={updateCount}>Clicked {count} Time</button> : <button onClick={updateCount}>Clicked {count} Times</button>}
      
    </div>
  )
};

export default Counter;