
'use client';
import ProductList from "../app/components/ProductList";
import Slider from "../app/components/Slider";
import Navbar from './components/Navbar';
export default function Home() {
  
  return(
    <div>
      <Navbar/>
      <Slider/>

      <ProductList/>
      </div>
  )
}

