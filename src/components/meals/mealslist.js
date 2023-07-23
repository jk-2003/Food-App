import "./mealslist.css";
import Meals from "./Meals";
import { useSelector } from "react-redux";

function Mealslist(props) {
  const meals = useSelector((state) => state.meals.items);

  return (
    <div className="list-container">
      {meals.map((meal) => {
        return (
          <Meals
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        );
      })}
    </div>
  );
}

export default Mealslist;
