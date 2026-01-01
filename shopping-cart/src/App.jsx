import ProductDetails from './components/ProductDetails';
import tenniBall from './assets/tennis-balls.png';
import plainTShirt from './assets/plain-t-shirt.png';
import cottonSocks from './assets/cotton-socks.png';
import Button from './components/buttons';
import './App.css';

// App component
function App() {
  const products = [
    {
      id: 1,
      image: cottonSocks,
      name: "Cotton socks",
      price: "Price: $10.90",
      discount: "Discount price: $5.45"
    },
    {
      id: 2,
      image: tenniBall,
      name: "Tennis balls",
      price: "Price: $6.00"
    },
    {
      id: 3,
      image: plainTShirt,
      name: "Plain T-Shirt",
      price: "Price: $7.99"
    }
  ]

  return (
    <div className="products-container">
      {products.map(product => (
        <div className="product-details" key={product.id}>
          <ProductDetails {...product} />
          <Button product={product} />
        </div>
      ))}
    </div>
  )
};

     

export default App
