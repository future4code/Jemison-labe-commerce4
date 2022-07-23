import { CardContainer, CardFooter, CardContent } from "./style";
 import carrinho from './Img/carrinho.jpeg'  
import React from 'react'


function Card(props) {
   return  <CardContainer>
      <h2 title={props.prod.title}>
          <u >{props.prod.title} </u>
      </h2>


      <CardContent title={props.prod.description} image={props.prod.image}  >
         <div>
         <img src={props.prod.image}></img>
         </div>

         {props.prod.description}
        

      </CardContent>

       
      


        <CardFooter>
          <span> R$ {props.prod.price.toFixed(2).replace(".", ",")}</span>
            
            <img src={carrinho} alt="Camiseta"></img>
          
        </CardFooter>


   </CardContainer>
}

export default Card;
