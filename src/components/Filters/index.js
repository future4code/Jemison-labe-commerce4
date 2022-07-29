import { FiltersContainer } from "../../style";
import React from 'react'

export function Filters(props) {
   return <FiltersContainer>
      <input
         placeholder="Referência "
         value={props.query}
         onChange={props.updateQuery}
      />

      <input
         type="number"
         placeholder="Valor mínimo"
         value={props.minPrice}
         onChange={props.updateMinPrice}
      />

      <input
         type="number"
         placeholder="Valor máximo"
         value={props.maxPrice}
         onChange={props.updateMaxPrice}
      />

     

   </FiltersContainer>

}

