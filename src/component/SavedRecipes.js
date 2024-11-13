import React, { useEffect, useState } from 'react';

const SavedRecipes = () => {
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        const fetchSavedRecipes = async () => {
            const response = await fetch("http://0.0.0.0:3004/savedRecipes");
            const data = await response.json();
            setSavedRecipes(data);
        };
        fetchSavedRecipes();
    }, []);

    const handleDeleteRecipe = async (id) => {
        try {
            await fetch(`http://0.0.0.0:3004/savedRecipes/${id}`, { method: "DELETE" });
            setSavedRecipes(savedRecipes.filter(recipe => recipe.idMeal !== id));
        } catch (error) {
            console.error("Error deleting recipe:", error);
        }
    };

    return (
        <div>
            <h1 className='App'>Saved Recipes</h1>
            <div className='meals'>
                {savedRecipes.map(recipe => (
                    <div className='mealImg' key={recipe.idMeal}>
                        <img src={recipe.strMealThumb} alt="Product" />
                        <p>{recipe.strMeal}</p>
                        <button onClick={() => handleDeleteRecipe(recipe.idMeal)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SavedRecipes;
