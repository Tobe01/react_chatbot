import deleteIcon from '../assets/deleteIcon.png';

// List Component
function List({message}){
  return(
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '220px', borderBottom: '1px solid grey'}}>
      <input type="checkBox" />
      <p>{message}</p>
      <button><img width="20" src={deleteIcon} /></button>
    </div>
  )
};

export default List;

