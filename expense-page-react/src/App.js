import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2022, 4, 7),
    description: "Телефон",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2023, 6, 8),
    description: "Джинси",
    amount: 99.99,
  },
  {
    id: "c3",
    date: new Date(2021, 12, 12),
    description: "Холодильник",
    amount: 999.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
