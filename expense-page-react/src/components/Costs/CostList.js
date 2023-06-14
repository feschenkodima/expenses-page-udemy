import CostItem from "./CostItem";
import "./CostList.css";
const CostList = (props) => {
  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">В цьому році немає розтрат</h2>;
  }
  return (
    <ul className="cost-list">
      {props.costs.map((cost, key) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
};

export default CostList;
