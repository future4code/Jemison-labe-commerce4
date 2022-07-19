import {React, useEffect, useRef, useState } from 'react';
import '../Cards/CardCamisetas.css';
import Chevron from '../IMG/216151_right_chevron_icon.png'
import Logo from'../IMG/lOGO.png';



export function CardCamisetas() {
const [data,setdata] = useState([]);
const carousel = useRef(null);

  useEffect (() => {
fetch('http://localhost:3000/static/imagens/camisas.json').then ((response) => response.json())
.then(setdata);

  }, [])
    
const handleLeftClick = (e) =>{
e.preventDefault();

carousel.current.scrollLeft -= carousel.current.offsetWidth;
}
  const handleRightClick = (e) =>{
    e.preventDefault();
   
    carousel.current.scrollLeft += carousel.current.offsetWidth;

}




  if(!data || !data.length) return null;
  
  return (
  <div className='container'>
  <div className='logo'>
   <img src={Logo}alt='camisa'/>
   </div>
   <div className='carousel' ref={carousel}>
    
    {data.map((item) =>{
const {id ,name ,price, oldPrice,image} = item;
   return(
   <div className='item' key={id}>
   <div className='image'>
   <img src={image} alt={name}/>
   </div>
   <div className='info'>
  <span className='nome'>{name}</span>
  <span className='oldprice'>$ {oldPrice}</span>
  <span className='price'> $ {price}</span>
  </div>
  </div>
   );
  })}
  </div>
  <div className = "buttons">
  <button onClick={handleLeftClick}>
    <img src= {Chevron} alt='scrollLeft'/>
    </button>
  <button onClick={handleRightClick}>
    <img src= {Chevron} alt='scrollRight'/>
    </button>
  
  
  </div>
  </div>




  );
}

export default CardCamisetas;
