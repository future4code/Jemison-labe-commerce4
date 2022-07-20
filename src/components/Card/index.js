import { CardContainer, CardFooter, CardContent } from "./style";
import carrinho from './Img/carrinho.jpeg'
import React from 'react'


function Card(props) {
   return  <CardContainer>
      <h2 title={props.job.title}>
          <u >{props.job.title} </u>
      </h2>


      <CardContent title={props.job.description} image={props.job.image}  >
         <div>
         <img src={props.job.image} />
         </div>

         {props.job.description}
        

      </CardContent>

       
      


        <CardFooter>
          <span>&#128176; R$ {props.job.price.toFixed(2).replace(".", ",")}</span>
            
           <img src={carrinho}
           /* onClick={} - ADICIONAR AO CARRINHO  */
           />
          
        </CardFooter>


   </CardContainer>
}

export default Card;
