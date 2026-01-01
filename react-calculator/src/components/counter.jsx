// Count Component
function Counter({ count, setCount }){
  return(
    <>
      <p style={{fontSize: '40px', margin: '0', padding: '0', margin: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>{count}</p>
    </>
  )
};

export default Counter;