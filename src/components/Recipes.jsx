import { useState, useEffect } from 'react';
import Recipe from './Recipe';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch('recipes.json')
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <div className='text-center mt-12 space-y-6'>
        <h2 className='text-4xl font-bold'> Our Recipes</h2>
        <p className='text-[#150B2B]'>
          Delicious dishes await in our recipe collection, spanning from
          comforting classics to innovative <br /> creations, perfect for every
          palate and occasion.
        </p>
      </div>
      <div className='flex justify-center gap-5'>
        <div className='grid grid-cols-2 gap-5 '>
          {recipes.map((recipes) => (
            <Recipe key={recipes.recipe_id} recipes={recipes}></Recipe>
          ))}
        </div>
        <div>hasdohsa</div>
      </div>
    </div>
  );
};
export default Recipes;
