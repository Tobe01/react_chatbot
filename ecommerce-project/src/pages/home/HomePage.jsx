import axios from 'axios'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Header } from './../../components/Header';
import { HomePageGrid } from './HomePageGrid';
import './HomePage.css';

export function HomePage({cart, getAppData}) {
  const [ products, setProducts ] = useState([]);
  const [ searchParams ] = useSearchParams();

  const search = searchParams.get('search')

  // Fetching Data from Backend using Async/Await
  useEffect(()=>{
    async function getProducts(){
      if(search){
        const response = await axios.get('/api/products?search=${search}');
        setProducts(response.data);
      }
    }

    getProducts();

  }, [search]);

  
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
        <HomePageGrid products={products} getAppData={getAppData} />
      </div>
    </>
  )
}