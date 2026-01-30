import { OrdersItem } from './OrdersItem';

export function OrdersDetailsGrid({order, getAppData}) {
  return (
    <div className="order-details-grid">
      {order.products.map((orderproduct) => {
        return (
          <OrdersItem key={orderproduct.product.id} order={order} orderproduct={orderproduct} getAppData={getAppData} />
          // <Fragment key={orderproduct.product.id}>
          //   <div className="product-image-container">
          //     <img src={orderproduct.product.image} />
          //   </div>

          //   <div className="product-details">
          //     <div className="product-name">{orderproduct.product.name}</div>
          //     <div className="product-delivery-date">
          //       Arriving on:{" "}
          //       {dayjs(orderproduct.estimatedDeliveryTimeMs).format("MMMM D")}
          //     </div>
          //     <div className="product-quantity">
          //       Quantity: {orderproduct.quantity}
          //     </div>
          //     <button className="buy-again-button button-primary">
          //       <img className="buy-again-icon" src={buyAgain} />
          //       <span className="buy-again-message" onClick={addItem}>Add to Cart</span>
          //     </button>
          //   </div>

          //   <div className="product-actions">
          //     <Link to={`/tracking/${order.id}/${orderproduct.product.id}`}>
          //       <button className="track-package-button button-secondary">
          //         Track package
          //       </button>
          //     </Link>
          //   </div>
          // </Fragment>
        );
      })}
    </div>
  );
}
