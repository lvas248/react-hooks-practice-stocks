import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStocks, handleClick}) {
  const renderedStocks = portfolioStocks.map(stock =>{
    return <Stock key={stock.id} stock={stock} handleClick={handleClick}/>
  })
  return (
    <div>
      <h2>My Portfolio</h2>
      {renderedStocks}
    </div>
  );
}

export default PortfolioContainer;
