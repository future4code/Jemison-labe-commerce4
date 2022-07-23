import { FiltersContainer2 } from "../../style";
import React from 'react'



export function FiltersMain (props) {
    return <FiltersContainer2>
<span>
    <label for="">Quantidade de Produtos</label>
   
 </span>
 


 <label className="Ordenacao">Ordenação</label>
 <select className="Ordenacao2"
 
    name="order"
    value={props.order}
    onChange={props.updateOrder}
 >
    
    <option value={1}>Crescente</option>
    <option value={-1}>Decrescente</option>
 
 </select>
 


 </FiltersContainer2>
 }