import axios from "axios";
import { useState, useEffect } from "react";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from './PaymentSummary';
import { CheckoutHeader } from "./CheckoutHeader";
import "./CheckoutPage.css";

export function Checkout({ cart, getAppData }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  // Fetching Data from Backend using Async/Await
  useEffect(()=>{
    async function getDeliveryOptions(){
      const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
      setDeliveryOptions(response.data);
    }

    getDeliveryOptions(); 

    async function getPaymentSummary(){
      const response = await axios.get('/api/payment-summary')
      setPaymentSummary(response.data);
    }

    getPaymentSummary();

  }, []);

  // Fecting Data from Backend using Promise
  /* useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        setDeliveryOptions(response.data);
      });

    axios.get("/api/payment-summary").then((response) => {
      setPaymentSummary(response.data);
    });
  }, []); */

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
      <title>Checkout</title>

      <CheckoutHeader  cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart} getAppData={getAppData} />

          <PaymentSummary paymentSummary={paymentSummary}  />
        </div>
      </div>
    </>
  );
}
