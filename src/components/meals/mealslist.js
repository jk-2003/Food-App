import React, { useEffect, useState } from "react";
import "./mealslist.css";
import Meals from "./Meals";

function Mealslist(props) {
  const [meals, setmeals] = useState([]);
  useEffect(() => {
    async function fetchmeals() {
      const response = await fetch(
        "https://food-app-2ef2f-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();
      const mealsdata = [];
      for (const key in data) {
        mealsdata.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setmeals(mealsdata);
    }
    fetchmeals()
  }, []);

  return (
    <>
      <div className="list-container">
        {meals.map((meal) => {
          return (
            <Meals
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          );
        })}
      </div>
    </>
  );
}

export default Mealslist;
