import axios from 'axios';
import { useState } from 'react';
import { formatMoney } from "../../../utils/money";
import checkMark from '../../assets/images/icons/checkmark.png'

export function Products({product, getAppData}) {
  const [ quantity, setQuantity ] = useState(1);
  const [ added, setAdded ] = useState(false);


  function selectQuantity(event){
    const selectedItems = Number(event.target.value)
    setQuantity(selectedItems)
  }

  function displayAdded(){
    setAdded(true);
    setTimeout(()=>{
      setAdded(false);
    }, 2000)
  }

  async function updateCart() {
    await axios.post("/api/cart-items", {
      productId: product.id,
      quantity: quantity,
    });

    await getAppData();
    displayAdded();
  }

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" data-testid="product-image" src={product.image} />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          data-testid="product-rating-stars-image"
          src={`images/ratings/rating-${product.rating.stars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">{formatMoney(product.priceCents)}</div>

      <div
        className="product-quantity-container"
        value={quantity}
        onClick={selectQuantity}
      >
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      {added && (
        <div className="added-to-cart active">
          <img src={checkMark} />
          Added
        </div>
      )}

      <button className="add-to-cart-button button-primary" onClick={updateCart} >
        Add to Cart
      </button>
    </div>
  );
}
