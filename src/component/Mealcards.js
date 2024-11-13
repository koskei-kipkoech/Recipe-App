import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom';


const Mealcards = ({detail}) => {
    const handleSaveRecipe =async (recipe) =>{
        try{
            await fetch("http://0.0.0.0:3004/savedRecipes",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(recipe)
            });
            alert(`${recipe.strMeal} Saved Successfully`)
        }catch(error){
            console.error("Error Saving Recipe:",error)
        }
    };
    console.log(detail)
    return (
        <div className='meals'>
            {detail && detail.length > 0 ? detail.map((currItem) => (
                <div className='mealImg' key={currItem.idMeal}>
                    <img src={currItem.strMealThumb} alt="Product" />
                    <p>{currItem.strMeal}</p>
                    <NavLink to={`/${currItem.idMeal}`}>
                        <button>Recipe</button>
                    </NavLink>
                    {/* Save Recipe Button */}
                    <button onClick={() => handleSaveRecipe(currItem)}>Save Recipe</button>
                </div>
            )) : "No meals found."}
        </div>
    )
}

export default Mealcards;
