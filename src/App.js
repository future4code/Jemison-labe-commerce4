import React, { useState } from "react"
import jobList from "./data/jobs.json"
import Header from "./components/Header";
import Card from "./components/Card";
import { Divpai, ListContainer , Main1, NavCarinho, NavFiltros } from "./style";
import { Filters } from "./components/Filters";



function App() {

  const [jobs, setJobs] = useState(jobList)
  const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [sortingParameter, setSortingParameter] = useState("")
  const [order, setOrder] = useState("")

  const updateQuery = (e) => {
    setQuery(e.target.value)
  }

  const updateMinPrice = (e) => {
    setMinPrice(e.target.value)
  }

  const updateMaxPrice = (e) => {
    setMaxPrice(e.target.value)
  }

  const updateSortingParameter = (e) => {
    setSortingParameter(e.target.value)
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
          updateMinPrice={updateMinPrice}
          updateMaxPrice={updateMaxPrice}
          updateSortingParameter={updateSortingParameter}
          updateOrder={updateOrder}
          minPrice={minPrice}
          maxPrice={maxPrice}
          sortingParameter={sortingParameter}
          order={order}
        />
    </NavFiltros>


      <Main1>

        <ListContainer>
          {jobs
            .filter((job) => {
              return  job.title.toLowerCase().includes(query.toLowerCase()) ||  job.description.toLowerCase().includes(query.toLowerCase()) 
            })
            .filter((job) => {
              return minPrice === "" || job.price >= minPrice
            })
            .filter((job) => {
              return maxPrice === "" || job.price <= maxPrice
            })
            .sort((currentJob, nextJob) => {
              switch (sortingParameter) {
                case "title":
                return order * currentJob.title.localeCompare(nextJob.title)
              
                default:
                  return order * (currentJob.price - nextJob.price)
              }
            })
            .map((job) => {
              return <Card key={job.id} job={job} />
            })}
        </ListContainer>
       
       


      </Main1>



      <NavCarinho>
        <h3>carrinho</h3>
      </NavCarinho>

      </Divpai>
    </>
  )
}

export default App;
