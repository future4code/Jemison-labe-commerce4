import styled from "styled-components";

export const ListContainer = styled.div`
   display: grid;
   justify-content: column ;
   grid-template-columns: 1fr 1fr 1fr   ;
   grid-template-rows: 1fr 1fr ;
   flex-wrap:wrap;
  
   *{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }

 
`


export const FiltersContainer = styled.div`
   display: grid;
   justify-content: space-between;
   flex-wrap:wrap;
`


export const FiltersContainer2 = styled.div`
   display: grid;
    grid-template-columns:  6fr 1fr 1fr ;
    grid-template-rows: repeat(3, 20px);

.Ordenacao{
   font-family:Georgia, 'Times New Roman', Times, serif
}
  .Ordenacao2{
   font-family:Arial, Helvetica, sans-serif;
   margin-right:10px;  
}
`




export const NavFiltros =styled.nav`
    display: grid;
    grid-template-rows: repeat(1, 150px);
    margin-top:80px;
    margin-left: 20px;


    input{
      margin-top:10px
    }
   
    span{
      margin-top:10px
    }

    select{
      margin-top:10px
    }

`
export const Divpai =styled.div`
   display: grid;
    grid-template-columns: 170px  1fr 300px;
   


`
 export const Main1 =styled.main`

    display:grid;
    margin-top:20px;
    margin-left: 10px;
   
  
    
    


` 

export const NavCarinho =styled.aside`
   margin-top:20px;
    margin-left: 10px;

background-color:green;

`