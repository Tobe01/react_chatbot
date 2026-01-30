import { NavLink } from 'react-router';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import whiteLogo from '../../src/assets/images/logo-white.png';
import mobileLogo from '../../src/assets/images/mobile-logo-white.png';
import cartIcon from '../assets/images/icons/cart-icon.png';
import searchIcon from '../assets/images/icons/search-icon.png';
import "./Header.css";

export function Header({cart}) {
  const [ input, setInput ] = useState('');
  const navigate = useNavigate();

  let totalQuantity = 0;

  if(cart){
    cart.forEach((cartItem)=>{
      totalQuantity += cartItem.quantity;
    });
  }

  function getInput(event){
    setInput(event.target.value);
  }

  function runSearch() {
    if (!input) return;
    navigate(`/?search=${input}`);
  }

  function checkKey(event){
    if( event.key === "Enter" ){
      console.log(input);
      setInput('');
    } else if ( event.key === "Escape" ){
      setInput('');
    }
  }
 
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src={whiteLogo} />
          <img className="mobile-logo" src={mobileLogo} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input value={input} onChange={getInput} onKeyDown={checkKey} className="search-bar" type="text" placeholder="Search" />

        <button onClick={runSearch} className="search-button">
          <img className="search-icon" src={searchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/Orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/Checkout">
          <img className="cart-icon" src={cartIcon} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
