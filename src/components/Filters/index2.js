import { FiltersContainer2 } from "../../style";
import React from 'react'



export function FiltersMain (props) {
    return <FiltersContainer2>
<span>
    <label for="">Quantidade de Produtos</label>
    <select 

       name="sort"
       value={props.sortingParameter}
       onChange={props.updateSortingParameter}
    >
       <option value="title">Título</option>
       <option value="price">Preço</option>
       <option value="dueDate">Prazo</option>

    </select>
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