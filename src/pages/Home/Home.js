import {Navbar} from '../../components/Navbar/Navbar'
import {ProductCard} from '../../components/ProductCard/ProductCard'
import { Fragment, useEffect,useState } from 'react'
import axios from "axios"
import './Home.css'
export const Home=()=>{
    const [Products,setProducts] = new useState([]);
    useEffect(()=>{
      
        (async ()=>{
          try {
              const {data:{books}}= await axios.get("data.json");
              //console.log(books);
              setProducts(books);
          } catch (error) {
              console.log(error);
          }
        })()

    },[])
   
    console.log(Products);
    return (
        <Fragment>
            <Navbar/>
            <main className='main d-flex gap wrap'>
            {
            Products.map(product => <ProductCard key={product.id} product = {product}/>)
            } 
            </main>
            
        </Fragment>
    )

}