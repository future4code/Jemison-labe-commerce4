import React, { useState } from "react"
import productList from "./camisetas/product.json"
import Header from "./components/Header";
import Card from "./components/Card";
import { Divpai, ListContainer , Main1, NavCarinho, NavFiltros } from "./style";
import { Filters } from "./components/Filters";
import {FiltersMain} from './components/Filters/index2'
import {Compras} from './components/Card/index'
import { addAbortSignal } from "stream";


function App() {

  const [product, setproducts] = useState(productList)
  const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [sortingParameter, setSortingParameter] = useState("")
  const [order, setOrder] = useState("")
  const [addProduto, setaddProduto] = useState(productList)

//const add=(e) =>{
  //e.preventDefault();
 // const newAdd = {title,description,price}
 // const newList = [...addProduto,newAdd]
//  setaddProduto(newList)
//}


  const updateQuery = (e) => {
    setQuery(e.target.value)
  }

  const updateMinPrice = (e) => {
    setMinPrice(e.target.value)
  }

  const updateMaxPrice = (e) => {
    setMaxPrice(e.target.value)
  }

  const updateOrder = (e) => {
    setOrder(e.target.value)
  }

  return (
    <>

      <Header />

     <Divpai>

      <NavFiltros>

        <Filters
          query={query}
          updateQuery={updateQuery}

          minPrice={minPrice}
          updateMinPrice={updateMinPrice}

          maxPrice={maxPrice}
          updateMaxPrice={updateMaxPrice}
          
          
          
        />
    </NavFiltros>


      <Main1>



       <FiltersMain 
       
       
       order={order}
       updateOrder={updateOrder}
      
       
       
       
       />

       

        <ListContainer>
          {product
            .filter((prod) => {
              return  prod.title.toLowerCase().includes(query.toLowerCase()) 
              ||  prod.description.toLowerCase().includes(query.toLowerCase()) 
            })
            .filter((prod) => {
              return minPrice === "" || prod.price >= minPrice
            })
            .filter((prod) => {
              return maxPrice === "" || prod.price <= maxPrice
            })
            .sort((currentProd, nextProd) => {
              switch (sortingParameter) {
                case "title":
                return order * currentProd.title.localeCompare(nextProd.title)
              
                default:
                  return order * (currentProd.price - nextProd.price)
              }
            })
            .map((prod) => {
              return  <Card key={prod.id} prod={prod} />
            })}
        </ListContainer>
       
       


      </Main1>



      <NavCarinho>
        <h2>compras:</h2>
      </NavCarinho>
        
      

      </Divpai>
    </>
  )
}

export default App;
