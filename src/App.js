import './App.css';
import {useState} from 'react';
import List from './List';


function App() {

  const [mealData, setMealData]= useState(null);
  const [cal, setCal] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=e5e20f0345f145cabf1a12f488b1d2c5&timeFrame=day&targetCalories=${cal}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCal(e.target.value);
  }

  return (
    <div className="App">
      <h1 className="head">MEAL PLANNER</h1>
     <section className="controls">
        <input
          type="number"
          placeholder="Enter amount of calories"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Plan</button>
      </section> 
      {mealData && <List mealData={mealData} />}
    </div>
  );
}

export default App;
