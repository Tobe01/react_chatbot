import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { Checkout } from './pages/CheckoutPage';
import { Orders } from './pages/OrdersPage';
import { Tracking } from './pages/TrackingPage';

function App() {
  return (
    <>
     <Routes>
      <Route index element={<HomePage />} />
      <Route path="Checkout" element={<Checkout />} />
      <Route path="Orders" element={<Orders />} />
      <Route path="Tracking" element={<Tracking />} />
     </Routes>
    </>
  )
}

export default App;
