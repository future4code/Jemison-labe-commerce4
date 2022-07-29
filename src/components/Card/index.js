import { CardContainer, CardFooter, CardContent ,} from "./style";
 import FotoCar from './Img/carrinho.jpeg'  
 import React from "react";
 import ButtonGroup from "@material-ui/core/ButtonGroup";
 import Badge from "@material-ui/core/Badge";
 import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
 import Button from "@material-ui/core/Button";
 import AddIcon from "@material-ui/icons/Add";
 import RemoveIcon from "@material-ui/icons/Remove";

function Card(props) {
   const [itemContador, setItemContador] = React.useState(0);

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
          <span> R$ {props.prod.price.toFixed(2).replace(".", ",")}
          
          <span><Badge  color="primary" badgeContent={itemContador}
          anchorOrigin={{
    vertical: 'top',
    horizontal:'center',
  }}>
          <ShoppingCartIcon style={{padding:10,width:40,height:40}}/>
          </Badge></span>
            
          
          </span>
            
      
            
           
          
        </CardFooter>

        <div style={{ display:"block", padding: 10 }}>
        
        <div>
          <ButtonGroup>
            <Button
              onClick={() => {
                setItemContador(Math.max(itemContador - 1, 0));
              }}
            >
              {" "}
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              onClick={() => {
                setItemContador(itemContador + 1);
              }}
            >
              {" "}
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
  

   </CardContainer>
 
}
 
export default Card

