import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { Checkout } from './pages/checkout/CheckoutPage';
import { Orders } from './pages/OrdersPage';
import { Tracking } from './pages/TrackingPage';
import { ErrorPage } from './pages/ErrorPage';

function App() {
  const [ cart, setCart ] = useState([]);

  useEffect(()=>{
    axios.get('/api/cart-items?expand=product')
      .then((res)=>{
        setCart(res.data);
    });
  }, [])

  return (
    <>
     <Routes>
      {/* Pages */}
      <Route index element={<HomePage cart={cart} />} />
      <Route path="Checkout" element={<Checkout cart={cart} />} />
      <Route path="Orders" element={<Orders />} />
      <Route path="Tracking" element={<Tracking />} />

      {/* route path to 404 error page */}
      <Route path="*" element={<ErrorPage />} />
     </Routes>
    </>
  )
}

export default App;
