import { useParams, Link } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Header } from '../components/Header';
import './TrackingPage.css';

export function Tracking() {
  const { orderId, productId } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getOrder() {
      try {
        const response = await axios.get(
          `/api/orders/${orderId}?expand=products`
        );
        setOrder(response.data);
      } catch (error) {
        console.error('Failed to fetch order:', error);
      } finally {
        setLoading(false);
      }
    }

    getOrder();
  }, [orderId]);

  if (loading) return null;
  if (!order) return null;

  const trackedProduct = order.products.find(
    (item) => item.product.id === productId
  );

  if (!trackedProduct) return null;

  return (
    <>
      <Header />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/Orders">
            View all orders
          </Link>

          <div className="delivery-date">
            Arriving on {dayjs(trackedProduct.product.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
          </div>

          <div className="product-info">
            {trackedProduct.product.name}
          </div>

          <div className="product-info">
            Quantity: {trackedProduct.quantity}
          </div>

          <img
            className="product-image"
            src={trackedProduct.product.image}
            alt={trackedProduct.product.name}
          />

          <div className="progress-labels-container">
            <div className="progress-label">Preparing</div>
            <div className="progress-label current-status">Shipped</div>
            <div className="progress-label">Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}
