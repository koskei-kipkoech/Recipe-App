import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const SavedRecipes = () => {
    const [savedRecipes, setSavedRecipes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSavedRecipes = async () => {
            const response = await fetch("https://recipe-app-yt9e.onrender.com/savedRecipes");
            const data = await response.json();
            setSavedRecipes(data);
        };
        fetchSavedRecipes();
    }, []);

    const handleDeleteRecipe = async (id) => {
        try {
            await fetch(`https://recipe-app-yt9e.onrender.com/savedRecipes/${id}`, 
                { method: "DELETE" });
            setSavedRecipes(savedRecipes.filter(recipe => recipe.idMeal !== id));
        } catch (error) {
            console.error("Error deleting recipe:", error);
        }
    };
    const handleBackToRecipe = () =>{
        navigate('/mainpage')
    }

    return (
        <div>
            <h1 className='App'>Saved Recipes</h1>
            <div className='meals'>
                {savedRecipes.map(recipe => (
                    <div className='mealImg' key={recipe.idMeal}>
                        <img src={recipe.strMealThumb} alt="Product" />
                        <p>{recipe.strMeal}</p>
                        <NavLink to={`/${recipe.idMeal}`}>
                            <button>View Recipe</button>
                        </NavLink>
                        <button onClick={() => handleDeleteRecipe(recipe.idMeal)}>Delete</button>
                    </div>
                ))}
            </div>
            <button className='backbutton' onClick={handleBackToRecipe}>Back To Recipes</button>
        </div>
    );
};

export default SavedRecipes;
