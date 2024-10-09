import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
  const App_ID = '08c21170';
  const App_KEY = '4b47b59f5e01adf8258383ae6285132c';

  const [recipes, setrecipes] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setquery] = useState('banana');

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`);
    const data = await response.json();
    setrecipes(data.hits)
  }
  const Inputchange = e => {
    setsearch(e.target.value);
  }
  const getSearch = e => {
    e.preventDefault();
    setquery(search);
  }
  return (
    <>
      <h1 className='title'>Recipe Finder</h1>
        <form onSubmit={getSearch} className='search-form'>
          <input className='search-bar' type='text' value={search} onChange={Inputchange} />
          <button className='search-button' type='submit'>Search</button>

        </form>
        <div className='recipe'>
          {recipes.map(recipes => (
            <Recipe title={recipes.recipe.label} calorie={recipes.recipe.calorie} image={recipes.recipe.image} key={recipes.recipe.label}
                    ingredients={recipes.recipe.ingredients} />
          ))}
        </div>
      
    </>
  )
}

export default App;


