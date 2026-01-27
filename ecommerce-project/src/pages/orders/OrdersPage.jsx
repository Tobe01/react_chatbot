import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Header } from "../../components/Header";
import { OrdersGrid } from './OrdersGrid';
import "./OrdersPage.css";

export function Orders({ cart }) {
  const [orders, setOrders] = useState([]);

  // Fetching Data from Backend using Async/Await
  useEffect(()=>{
    async function getOrders(){
      const response = await axios.get('/api/orders?expand=products')
      setOrders(response.data);
    }

    getOrders();

  }, [])

  // Fetching Data from backend using Promise
  /*useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      setOrders(response.data);
    });
  }, []);*/

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
      <title>Orders</title>

      <Header cart={cart} />

      <OrdersGrid orders={orders} />
    </>
  );
}
