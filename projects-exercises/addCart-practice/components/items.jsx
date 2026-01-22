// import cottonSocks from '../src/assets/cotton-socks.png';
import './items.css';

export function Items({ itemName, itemPrice, itemImage, cart, setCart }){
  
  function updateCart(){
    setCart(cart + 1);
  }

  return(
    <div className='card'>
      <img src={itemImage} width="150" alt="image" loading="lazy" />
      <div className='cardSub'>
        <h3>{itemName}</h3>
        <p>{itemPrice}</p>
        <button onClick={updateCart}>Add to Cart</button>
      </div>
    </div>
  )
}