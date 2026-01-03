import { useState, useEffect } from 'react'

// counter component
function Counter(){

  // Innitiate state
  const [ count, setCount ] = useState(0);
  const [ autoClicking, setAutoClicking ] = useState(false);

  // Function to update count
  function updateCount(){
    setCount(count + 1);
  }

  // function to reset count
  function resetCount(){
    setCount(0)
  }

    // Toggle auto-clicking
  function toggleAutoClick(){
    setAutoClicking(!autoClicking);
  }

    useEffect(() =>{
    if (autoClicking) {
      const interval = setInterval(() => {
        // Use functional update to avoid stale closure
        setCount(prevCount => prevCount + 1);
      }, 1000);
      
      // Cleanup interval when component unmounts or autoClicking changes
      return () => clearInterval(interval);
    }
  }, [autoClicking]);

  return(
    <div className="buttonCount">
      { count <= 1 ? <button onClick={updateCount}>Clicked {count} time</button> : <button onClick={updateCount}>Clicked {count} times</button>}
      <button onClick={resetCount}>Reset</button>
      <button onClick={toggleAutoClick}>Auto Click</button>
    </div>
  );
};

export default Counter;
