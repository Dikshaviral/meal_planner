import React from 'react'
import Meal from './Meal';


function List({mealData}) {
    const nutrients = mealData.nutrients;

    return (
        <main>
              <section className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>Calories: {nutrients.calories.toFixed(0)}</li>
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>
      <h1 className='plan'>Meal Plan</h1>
      <section className="meals">
        
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
        </main>
    )
}

export default List
