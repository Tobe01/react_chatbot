import { Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import dayjs from 'dayjs';
import buyAgain from '../../assets/images/icons/buy-again.png';

export function OrderItem({orderproduct, getAppData}) {
  
  async function addAgain(){
    await axios.post(`/api/cart-items`, {
      productId: orderproduct.id,
      quantity: 1
    })
    await getAppData();
  }

  
  return (
    <Fragment>
      <div className="product-image-container">
        <img src={orderproduct.product.image} />
      </div>

      <div className="product-details">
        <div className="product-name">{orderproduct.product.name}</div>
        <div className="product-delivery-date">
          Arriving on:{" "}
          {dayjs(orderproduct.estimatedDeliveryTimeMs).format("MMMM D")}
        </div>
        <div className="product-quantity">
          Quantity: {orderproduct.quantity}
        </div>
        <button className="buy-again-button button-primary">
          <img className="buy-again-icon" src={buyAgain} />
          <span className="buy-again-message" onClick={addAgain}>
            Add to Cart
          </span>
        </button>
      </div>

      <div className="product-actions">
        <Link to={`/tracking/${orderproduct.id}/${orderproduct.product.id}`}>
          <button className="track-package-button button-secondary">
            Track package
          </button>
        </Link>
      </div>
    </Fragment>
  );
}
