import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleClick}) {
  const renderedStocks = stocks.map(stock =>{
    return <Stock key={stock.id} stock={stock} handleClick={handleClick}/>
  })
  return (
    <div>
      <h2>Stocks</h2>
      {renderedStocks}
    </div>
  );
}

export default StockContainer;
