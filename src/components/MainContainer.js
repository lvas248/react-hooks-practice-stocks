import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";


function MainContainer() {
  
  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])
  const [sort, setSort] = useState("")
  const [filter, setFilter] = useState("")
  


  
  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(data => setStocks(data))
  },[])

  function addToPortfolio(stock){
    if(portfolioStocks.includes(stock)=== false){
    setPortfolioStocks([...portfolioStocks, stock])
    }
  }
  function removeFromPortfolio(stock){
    setPortfolioStocks(portfolioStocks.filter(pStock =>{
      return pStock.id !== stock.id
    }))
  }
function handleFilterChange(e){
  setFilter(e.target.value)
}

function priceSort(){
  setSort("price")
}

function alphabetSort(){
  setSort('alphabet')
}



const filteredStocks = stocks.filter(stock => {
  return stock.type.includes(filter)
})

const sortedStocks = sort === "price"? filteredStocks.sort((a,b)=> a.price - b.price) : filteredStocks.sort((a,b)=>{
  if(a.name < b.name) return -1
  else if(a.name > b.name) return 1
  else return 0
})

  return (
    <div>
      <SearchBar handleFilterChange={handleFilterChange} priceSort={priceSort} alphabetSort={alphabetSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={sortedStocks} handleClick={addToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} handleClick={removeFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
