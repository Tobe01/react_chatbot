import axios from 'axios'
import { useState, useEffect } from 'react';
import { Header } from './../../components/Header';
import { HomePageGrid } from './HomePageGrid';
import './HomePage.css';

export function HomePage({cart}) {
  const [ products, setProducts ] = useState([]);

  // Fetching Data from Backend using Async/Await
  useEffect(()=>{
    async function getProducts(){
      const response = await axios.get('/api/products')
      setProducts(response.data);
    }

    getProducts();

  }, []);
  
  
  // Fetching Data from Backend using Promise
  /*useEffect(()=>{
    axios.get('/api/products')
      .then((res)=>{
          setProducts(res.data);
      })
  }, []);*/

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <title>Home</title>

      <Header cart={cart} />

      <div className="home-page">
        <HomePageGrid products={products}/>
      </div>
    </>
  )
}