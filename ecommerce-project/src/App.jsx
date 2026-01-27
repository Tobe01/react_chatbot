import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/home/HomePage';
import { Checkout } from './pages/checkout/CheckoutPage';
import { Orders } from './pages/orders/OrdersPage';
import { Tracking } from './pages/TrackingPage';
import { ErrorPage } from './pages/ErrorPage';

function App() {
  const [ cart, setCart ] = useState([]);

  // Fetching Data from Backend using Async/Await
  async function getAppData(){
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);
    }
  
  useEffect(()=>{
    getAppData();
  }, []);

  // Fetching Data from Backend using Promise
  /*useEffect(()=>{
    axios.get('/api/cart-items?expand=product')
      .then((res)=>{
        setCart(res.data);
    });
  }, [])*/

  return (
    <>
     <Routes>
      {/* Pages */}
      <Route index element={<HomePage cart={cart} getAppData={getAppData} />} />
      <Route path="Checkout" element={<Checkout cart={cart} />} />
      <Route path="Orders" element={<Orders cart={cart} />} />
      <Route path="tracking/:orderId/:productId" element={<Tracking />} />

      {/* route path to 404 error page */}
      <Route path="*" element={<ErrorPage />} />
     </Routes>
    </>
  )
}

export default App;
